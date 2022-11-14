import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class S3BucketStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s3Bucket = new s3.Bucket(this, 'testBucket', {
      bucketName: "my-test-bucket-1-cdk-code",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    s3Bucket.grantRead(new iam.AccountRootPrincipal());
  }
}

const app = new cdk.App();
new S3BucketStack(app, 'S3BucketStack');
app.synth();