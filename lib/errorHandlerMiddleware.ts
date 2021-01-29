import { NextFunction, Request, Response } from "express";
import { CustomError } from "./CustomError";
import { DefaultError } from "./errors/DefaultError";

const defaultConfig: ErrorHandlerMiddlewareConfig = {
  defaultResponse: {
    errors: [{ message: "Something went wrong" }],
  },
  logCustomErrors: false,
  logUnknownErrors: true,
};

export interface ErrorHandlerMiddlewareConfig {
  /** The default response that the middleware should send if the error was not a custom error. */
  defaultResponse?: object;
  /** If true, the middleware will log custom errors and default errors. Default: **false** */
  logCustomErrors?: boolean;
  /** If true, the middleware will log uknown errors. Default: **true** */
  logUnknownErrors?: boolean;
}

/**
 * Error handler for handling custom errors.
 * @param config config for the error handler middleware.
 */
export const errorHandlerMiddleware = (
  config?: ErrorHandlerMiddlewareConfig
) => {
  if (!config) config = defaultConfig;

  const { defaultResponse, logCustomErrors, logUnknownErrors } = config;

  return (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof CustomError || err instanceof DefaultError) {
      if (logCustomErrors) console.error(err);
      return res.status(err.statusCode).json({ errors: err.serializeErrors() });
    }

    if (logUnknownErrors) console.error(err);
    return res.status(500).json(defaultResponse);
  };
};
