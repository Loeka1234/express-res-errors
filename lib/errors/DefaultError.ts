import { STATUS_CODES } from "http";

export abstract class DefaultError extends Error {
  public abstract returnObject?: object;

  constructor(public statusCode: number) {
    super(STATUS_CODES[statusCode]);
    this.name = STATUS_CODES[statusCode] || this.name;
    Object.setPrototypeOf(this, Error.prototype);
  }

  serializeErrors() {
    return (
      this.returnObject ?? {
        message: STATUS_CODES[this.statusCode],
      }
    );
  }
}
