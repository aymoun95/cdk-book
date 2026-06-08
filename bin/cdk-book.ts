#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { HelloCdkStack } from "../lib/stack-hello-cdk";

const app = new cdk.App();
new HelloCdkStack(app, "CdkBookStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,

    region: process.env.CDK_DEFAULT_ACCOUNT_REGION,
  },
});
