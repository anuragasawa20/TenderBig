const crypto = require('crypto')
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
require('dotenv').config();

const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    region: process.env.S3_BUCKET_REGION
});

exports.getFileByFilename = (files, filename) => {
    return files.find((file) => file.fieldname === filename);
};

exports.uploadFileToS3 = async (file) => {
    const randomFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');
    const fileName = randomFileName();
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: fileName,
        Body: file.buffer,
        ContentType: file.mimetype,
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);

    return fileName;
};