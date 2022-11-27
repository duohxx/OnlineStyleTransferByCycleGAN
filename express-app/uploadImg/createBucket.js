const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = 'AKIAQ3IU7H7QMX4QJAEO';
const SECRET = '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';

// The name of the bucket that you have created
const BUCKET_NAME = 'thexjoaifopajf';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "ca-central-1"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});