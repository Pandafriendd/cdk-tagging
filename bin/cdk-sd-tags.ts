#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkSdTagsStack } from '../lib/cdk-sd-tags-stack';

const app = new cdk.App();
new CdkSdTagsStack(app, 'CdkSdTagsStack');
