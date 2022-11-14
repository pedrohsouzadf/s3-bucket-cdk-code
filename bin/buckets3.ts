#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { S3BucketStack } from '../lib/buckets3-stack';

const app = new cdk.App();
new S3BucketStack(app, 'Buckets3Stack',{
    env: {account: '836167084357', region: 'us-east-2'},
});
