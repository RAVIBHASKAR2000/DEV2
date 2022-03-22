import { S3Adapter } from '@keystonejs/file-adapters';
import { LocalFileAdapter } from '@keystonejs/file-adapters';
import { staticRoute, staticPath, distDir } from '../config';

const isDev = process.env.NODE_ENV !== 'production';

const s3Options = {
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  endpoint: process.env.S3_ENDPOINT,
  region: 'DUMMY',
};

const s3Adapter = new S3Adapter({
  bucket: process.env.S3_BUCKET,
  folder: process.env.S3_PATH,
  publicUrl: ({ id, filename, _meta }) =>
    `${process.env.S3_CDN_URL}/${process.env.S3_PATH}/${filename}`,
  s3Options,
  uploadParams: ({ filename, id, mimetype, encoding }) => ({
    ACL: 'public-read',
    Metadata: {
      keystone_id: `${id}`,
    },
  }),
});

const avatarFileAdapter = new LocalFileAdapter({
  src: `${staticPath}/avatars`,
  path: `${staticRoute}/avatars`,
});

export const avatarAdapter = isDev ? avatarFileAdapter : s3Adapter;

const fileAdapter = new LocalFileAdapter({
  src: `${isDev ? '' : `${distDir}/`}${staticPath}/uploads`,
  path: `${staticRoute}/uploads`,
});

export const imageAdapter = isDev ? fileAdapter : s3Adapter;