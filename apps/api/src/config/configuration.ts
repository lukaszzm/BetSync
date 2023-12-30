import Joi from "joi";

export default () => ({
  port: process.env.PORT,
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY,
    refreshKey: process.env.JWT_REFRESH_KEY,
  },
});

export const configSchema = Joi.object({
  PORT: Joi.number().default(4000),
  DATABASE_URL: Joi.string().required(),
  JWT_SECRET_KEY: Joi.string().required(),
  JWT_REFRESH_KEY: Joi.string().required(),
});
