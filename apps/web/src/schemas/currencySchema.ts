import { z } from "zod";

export const currencySchema = z
  .string()
  .regex(/^\d+(\.\d{1,2})?$/, { message: "Invalid format, expected currency" })
  .transform(value => (value.includes(".") ? value.replace(".", "") : `${value}00`))
  .pipe(z.coerce.number().min(0));
