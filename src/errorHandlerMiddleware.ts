import { NextFunction, Request, Response } from "express";
import { CustomError } from "./CustomError";

const defaultConfig: errorHandlerMiddlewareParams = {
  defaultResponse: {
    errors: [{ message: "Something went wrong" }],
  },
};

export interface errorHandlerMiddlewareParams {
  /** The default response that the middleware should send if the error was not a custom error. */
  defaultResponse?: object;
}

/**
 * Error handler for handling custom errors.
 * @param config config for the error handler middleware.
 */
export const errorHandlerMiddleware = (
  config?: errorHandlerMiddlewareParams
) => {
  if (!config) config = defaultConfig;

  const { defaultResponse } = config;

  return (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof CustomError)
      return res.status(err.statusCode).json({ errors: err.serializeErrors() });

    return res.status(500).json(defaultResponse);
  };
};
