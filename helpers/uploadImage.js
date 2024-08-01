const express = require('express');
const dotenv = require("dotenv").config();
const multer = require('multer')
const crypto = require('crypto')
const {S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand} = require('@aws-sdk/client-s3')
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const sharp  = require('sharp')

const bucket = process.env.BUCKET_NAME
const region = process.env.REGION
const accessKey = process.env.ACCESS_KEY
const secretAccessKEY = process.env.SECRET_ACCESS_KEY

const storage = multer.memoryStorage()
const upload = multer({ storage: storage });



// Configure AWS SDK with your credentials
const s3 = new S3Client ({
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretAccessKEY,
    },
    region: region
})



const uploadToS3 = async (fileData) => {
  const randomImageName = crypto.randomBytes(32).toString("hex");

  //image editing
  const buffer = await sharp(fileData.buffer).toBuffer();
  //.resize({height: 200,width: 300, fit: "contain"})
  //send image to AWS
  const params = {
    Bucket: bucket,
    Key: randomImageName,
    Body: buffer,
    ContentType: fileData.mimetype,
  };

  const command = new PutObjectCommand(params);

  try {
    await s3.send(command);
    const url = `https://profileimage100.s3.us-east-1.amazonaws.com/${randomImageName}`;
    return url;
  } catch (err) {
    throw err;
  }
};


const deleteFromS3 = async (fileName) => {
  const params = {
    Bucket: bucket,
    Key: fileName,
  };

  try {
    await s3.send(new DeleteObjectCommand(params));
    
  } catch (err) {
    console.error(`Error deleting ${fileName} from S3:`, err);
  }
};


module.exports = {uploadToS3, deleteFromS3}