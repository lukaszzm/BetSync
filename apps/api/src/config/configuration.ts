import Joi from "joi";

export default () => ({
  port: process.env.PORT,
  database: {
    url: process.env.DATABASE_URL,
  },
});

export const configSchema = Joi.object({
  PORT: Joi.number().default(4000),
  DATABASE_URL: Joi.string().required(),
});
