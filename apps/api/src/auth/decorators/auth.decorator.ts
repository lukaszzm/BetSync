import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

export const AuthId = createParamDecorator((_data: unknown, context: ExecutionContext): string => {
  const request = context.switchToHttp().getRequest<Request>();

  const id = request["user"]["sub"];

  if (!id || typeof id !== "string") {
    throw new Error("Invalid user id");
  }

  return id;
});
