import { DefaultError } from "./DefaultError";
import { STATUS_CODES } from "http";

export class HTTPError extends DefaultError {
  /**
   * @param statusCode The statuscode this error should send
   * @param returnObject The JSON body this error should send
   */
  constructor(statusCode: number, public returnObject: object) {
    super(statusCode);
    Object.setPrototypeOf(this, HTTPError.prototype);

    const msg = STATUS_CODES[statusCode];
    if (!msg) throw new Error("Unknown status code in HTTPError");

    this.name = msg;
  }
}
