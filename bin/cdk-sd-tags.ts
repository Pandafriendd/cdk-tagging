#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { CdkSdTagsStack } from "../lib/cdk-sd-tags-stack";

const app = new cdk.App();

const BobTag = {
  Name: "Sygna backoffice backend",
  Owner: "Oo Kang Zheng",
  Team: "Sygna",
  Product: "Sygna",
  Group: "Node",
  Application: "Backend",
  Description: "CDK generated Back office backend",
};

const stack = new CdkSdTagsStack(app, "CdkSdTagsStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

Object.entries(BobTag).forEach(([k, v]) => {
  cdk.Tag.add(stack, k, v);
});

Object.entries(BobTag).forEach(([k, v]) => {
  cdk.Tag.remove(stack, k, {
    includeResourceTypes: ["AWS::ServiceDiscovery::PrivateDnsNamespace"],
  });
});
