import Joi from "joi";

export default () => ({
  port: process.env.PORT,
});

export const configSchema = Joi.object({
  PORT: Joi.number().default(4000),
});
