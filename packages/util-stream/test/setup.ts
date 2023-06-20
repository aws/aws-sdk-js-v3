import { AttachedPolicy, CreateRoleResponse, GetRoleResponse, IAM } from "@aws-sdk/client-iam";
import {
  GetFunctionConfigurationCommandOutput,
  Lambda,
  Runtime,
  waitUntilFunctionActiveV2,
  waitUntilFunctionUpdated,
} from "@aws-sdk/client-lambda";
import fs from "fs";
export const FunctionName = "aws-sdk-js-v3-e2e-echo";
export const Handler = "index.handler";
const LAMBDA_ROLE_NAME = "aws-sdk-js-v3-e2e-LambdaRole";

export async function setup() {
  const lambda = new Lambda({
    region: "us-west-2",
  });
  const getFn: null | GetFunctionConfigurationCommandOutput = await lambda
    .getFunctionConfiguration({
      FunctionName,
    })
    .catch(() => null);

  if (getFn) {
    return;
  }

  const iam = new IAM({
    region: "us-west-2",
  });

  const roleName = LAMBDA_ROLE_NAME;
  const role: null | GetRoleResponse | CreateRoleResponse = await iam
    .getRole({
      RoleName: roleName,
    })
    .catch(() => null);

  if (!role) {
    console.info("Creating role", roleName);
    await iam.createRole({
      RoleName: roleName,
      Path: "/",
      Description: "aws sdk js v3 lambda test role",
      AssumeRolePolicyDocument: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Action: ["sts:AssumeRole"],
            Principal: {
              Service: ["lambda.amazonaws.com"],
            },
          },
        ],
      }),
    });
  } else {
    console.info("Role exists", roleName);
  }

  const listAttachedRolePolicies = await iam.listAttachedRolePolicies({
    RoleName: roleName,
  });
  const policies = listAttachedRolePolicies.AttachedPolicies || [];

  const existingPolicies = policies.reduce((acc: Record<string, boolean>, cur: AttachedPolicy) => {
    if (cur.PolicyName) {
      acc[cur.PolicyName] = true;
    }
    return acc;
  }, {} as Record<string, boolean>);

  const required = ["AWSLambda_FullAccess"];

  for (const requiredPolicy of required) {
    if (!existingPolicies[requiredPolicy]) {
      console.info("Attaching policy to role", requiredPolicy, roleName);
      await iam.attachRolePolicy({
        RoleName: roleName,
        PolicyArn: `arn:aws:iam::aws:policy/${requiredPolicy}`,
      });
    } else {
      console.info("Policy exists on role", requiredPolicy, roleName);
    }
  }

  const getRole: null | GetRoleResponse = await iam
    .getRole({
      RoleName: roleName,
    })
    .catch(() => null);
  if (!getRole) {
    throw new Error("Role not found.");
  } else {
    console.info("Role found", roleName);
  }

  const roleArn = getRole.Role!.Arn!;

  if (getFn) {
    console.info("Function exists:", FunctionName);

    if ((getFn.Timeout ?? 0) < 5 * 60 || getFn?.Handler !== Handler) {
      await lambda.updateFunctionConfiguration({
        FunctionName,
        Handler,
        Timeout: 5 * 60,
      });
      await waitUntilFunctionUpdated(
        {
          client: lambda,
          maxWaitTime: 40,
        },
        {
          FunctionName,
        }
      );
    }
    // await lambda.updateFunctionCode({
    //   FunctionName,
    //   ZipFile: fs.readFileSync(require.resolve("./function.zip")),
    // });
    // console.info("Function code/configuration updated:", FunctionName);
  } else {
    await lambda.createFunction({
      FunctionName,
      Role: roleArn,
      Code: {
        ZipFile: fs.readFileSync(require.resolve("./function.zip")),
      },
      Runtime: Runtime.nodejs16x,
      Description: `aws sdk js v3 e2e test echo`,
      Timeout: 300,
      Handler,
    });
    console.info("Function created:", FunctionName);
  }

  await waitUntilFunctionActiveV2(
    {
      maxWaitTime: 40,
      client: lambda,
    },
    {
      FunctionName,
    }
  );
}
