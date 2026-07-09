/**
 * Type-compatibility fixture.
 *
 * One AWS client per wire protocol is imported, instantiated, and used to send
 * a command. Nothing here is executed - the file exists purely so that `tsc`
 * type-checks the clients' published `.d.ts` surface (and their transitive
 * `@smithy` / `@aws-sdk` type dependencies) against each TypeScript version.
 *
 * Protocol coverage:
 *   - awsJson1_0  -> @aws-sdk/client-dynamodb
 *   - awsJson1_1  -> @aws-sdk/client-cloudwatch-logs
 *   - awsQuery    -> @aws-sdk/client-sts
 *   - ec2Query    -> @aws-sdk/client-ec2
 *   - restJson1   -> @aws-sdk/client-lambda
 *   - restXml     -> @aws-sdk/client-s3
 *
 * Note: no shipping client currently uses the smithy rpcv2Cbor protocol. Add
 * one here (with its command) once such a client is published.
 */
import { CloudWatchLogsClient, DescribeLogGroupsCommand } from "@aws-sdk/client-cloudwatch-logs";
import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { DescribeRegionsCommand, EC2Client } from "@aws-sdk/client-ec2";
import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda";
import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";
import { GetCallerIdentityCommand, STSClient } from "@aws-sdk/client-sts";

// awsJson1_0
export async function dynamodb(): Promise<void> {
  const client = new DynamoDBClient({});
  const output = await client.send(new ListTablesCommand({}));
  const names: string[] | undefined = output.TableNames;
  void names;
}

// awsJson1_1
export async function cloudwatchLogs(): Promise<void> {
  const client = new CloudWatchLogsClient({});
  const output = await client.send(new DescribeLogGroupsCommand({}));
  void output.logGroups;
}

// awsQuery
export async function sts(): Promise<void> {
  const client = new STSClient({});
  const output = await client.send(new GetCallerIdentityCommand({}));
  const account: string | undefined = output.Account;
  void account;
}

// ec2Query
export async function ec2(): Promise<void> {
  const client = new EC2Client({});
  const output = await client.send(new DescribeRegionsCommand({}));
  void output.Regions;
}

// restJson1
export async function lambda(): Promise<void> {
  const client = new LambdaClient({});
  const output = await client.send(new ListFunctionsCommand({}));
  void output.Functions;
}

// restXml
export async function s3(): Promise<void> {
  const client = new S3Client({});
  const output = await client.send(new ListBucketsCommand({}));
  void output.Buckets;
}
