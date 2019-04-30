import { readme } from "./clientReadme";
describe("README auto generator", () => {
  const model = {
    documentation:
      '<p>With Application Auto Scaling, you can automatically scale your AWS resources. The experience is similar to that of <a href="https://aws.amazon.com/autoscaling/">Auto Scaling</a>. You can use Application Auto Scaling to accomplish the following tasks:</p> <ul> <li> <p>Define scaling policies to automatically scale your AWS resources</p> </li> <li> <p>Scale your resources in response to CloudWatch alarms</p> </li> <li> <p>Schedule one-time or recurring scaling actions</p> </li> <li> <p>View the history of your scaling events</p> </li> </ul> <p>Application Auto Scaling can scale the following AWS resources:</p> <ul> <li> <p>Amazon ECS services. For more information, see <a href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html">Service Auto Scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>Amazon EC2 Spot fleets. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/fleet-auto-scaling.html">Automatic Scaling for Spot Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p> </li> <li> <p>Amazon EMR clusters. For more information, see <a href="http://docs.aws.amazon.com/ElasticMapReduce/latest/ManagementGuide/emr-automatic-scaling.html">Using Automatic Scaling in Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.</p> </li> <li> <p>AppStream 2.0 fleets. For more information, see <a href="http://docs.aws.amazon.com/appstream2/latest/developerguide/autoscaling.html">Fleet Auto Scaling for Amazon AppStream 2.0</a> in the <i>Amazon AppStream 2.0 Developer Guide</i>.</p> </li> <li> <p>Provisioned read and write capacity for Amazon DynamoDB tables and global secondary indexes. For more information, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html">Managing Throughput Capacity Automatically with DynamoDB Auto Scaling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </li> <li> <p>Amazon Aurora Replicas. For more information, see <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Integrating.AutoScaling.html">Using Amazon Aurora Auto Scaling with Aurora Replicas</a>.</p> </li> </ul> <p>For a list of supported regions, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#as-app_region">AWS Regions and Endpoints: Application Auto Scaling</a> in the <i>AWS General Reference</i>.</p>',
    metadata: {
      serviceFullName: "Amazon Simple Storage Service",
      serviceId: "S3"
    },
    operations: {
      AbortMultipartUpload: {
        name: "AbortMultipartUpload",
        input: {
          shape: {
            type: "structure",
            members: {},
            required: []
          }
        }
      }
    }
  };
  it("should generate right readme", () => {
    const readmeContent = readme({
      model: model as any,
      name: "s3",
      runtime: "node"
    });
    expect(readmeContent.indexOf("## Description")).toBeGreaterThan(-1);
    expect(readmeContent.indexOf("## Installing")).toBeGreaterThan(-1);
    expect(readmeContent.indexOf("## Import")).toBeGreaterThan(-1);
    expect(readmeContent.indexOf("## Usage")).toBeGreaterThan(-1);
    expect(readmeContent.indexOf("## Troubleshooting")).toBeGreaterThan(-1);
  });
});
