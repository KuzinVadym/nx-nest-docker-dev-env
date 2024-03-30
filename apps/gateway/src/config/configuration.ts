import { config } from 'dotenv';

config();

const { env } = process;

export const configuration = () => {
  const dataMicroserviceUrl = env.DATA_MICROSERVICE_URL;

  if (dataMicroserviceUrl) {
    return {
        dataMicroserviceUrl,
    };
  }

  throw new Error('Missing Data Microservice Url');
};
