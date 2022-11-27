const fs = require('fs');
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


const downloadFile = (fileName) => {
    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName, // File name you want to save as in S3
    };

    // downloading files to the bucket
    s3.getObject( params, function (error, data) {
          if (error) {
            throw error;
          } else {
            console.log("Loaded " + data.ContentLength + " bytes");
            // do something with data.Body
          }
        }
      );
};

downloadFile('vg.png');