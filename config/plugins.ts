import * as dotenv from "dotenv";

dotenv.config();

const env = (variable: string): string => {
  const value = process.env[variable];
  if (!value) {
    throw new Error(`Environment variable ${variable} is not defined`);
  }
  return value;
};

export default () => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
