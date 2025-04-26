module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {  // ← wrap everything inside this
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET_NAME'),
          },
        },
      },
    },
  },
});
