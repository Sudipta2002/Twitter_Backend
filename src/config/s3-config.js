import multer from 'multer';
import multers3 from 'multer-s3';
import aws from 'aws-sdk';

aws.config.update({
    region: process.env.AWS_REGION,
    secretAccessKey: process.env.AWS_SECRET_ACCESS,
    accessKeyId: process.env.AWS_ACCESS_KEY
});

const s3 = new aws.S3();

const upload = multer({
    storage: multers3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        acl: 'public-read',
        metadata: function(req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function(req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
});
export { upload };