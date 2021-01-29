import { DefaultErrors } from "./types";

/**
 * Base class for defining custom errors.
 *
 * Usage:
 * ```typescript
 * class BadRequestError extends CustomError {
 *   statusCode = 400;
 *
 *   constructor(public message: string) {
 *     super(message);
 *     Object.setPrototypeOf(this, CustomError.prototype);
 *   }
 *
 *   serializeErrors() {
 *     return [
 *       {
 *         message: this.message,
 *       },
 *     ];
 *   }
 * }
 * ```
 */
export abstract class CustomError<T = DefaultErrors> extends Error {
  public abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, Error.prototype);
  }

  abstract serializeErrors(): T;
}
