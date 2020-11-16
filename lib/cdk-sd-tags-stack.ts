import * as cdk from "@aws-cdk/core";

import * as ec2 from "@aws-cdk/aws-ec2";
import * as servicediscovery from "@aws-cdk/aws-servicediscovery";

export class CdkSdTagsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = ec2.Vpc.fromLookup(this, "VPC", {
      isDefault: true,
    });

    new ec2.SecurityGroup(this, "SecurityGroup", {
      vpc,
    });

    const vpcNamespace = new servicediscovery.PrivateDnsNamespace(
      this,
      `BobNamespace`,
      {
        vpc,
        name: "test",
      }
    );
  }
}
