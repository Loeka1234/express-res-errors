import { DefaultError } from "./DefaultError";

export class InternalServerError extends DefaultError {
  constructor(public returnObject?: object) {
    super(500);
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

export class NotImplementedError extends DefaultError {
  constructor(public returnObject?: object) {
    super(501);
    Object.setPrototypeOf(this, NotImplementedError.prototype);
  }
}

export class BadGatewayError extends DefaultError {
  constructor(public returnObject?: object) {
    super(502);
    Object.setPrototypeOf(this, BadGatewayError.prototype);
  }
}

export class ServiceUnavailableError extends DefaultError {
  constructor(public returnObject?: object) {
    super(503);
    Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
  }
}

export class GatewayTimeoutError extends DefaultError {
  constructor(public returnObject?: object) {
    super(504);
    Object.setPrototypeOf(this, GatewayTimeoutError.prototype);
  }
}

export class HTTPVersionNotSupportedError extends DefaultError {
  constructor(public returnObject?: object) {
    super(505);
    Object.setPrototypeOf(this, HTTPVersionNotSupportedError.prototype);
  }
}

export class VariantAlsoNegotiatesError extends DefaultError {
  constructor(public returnObject?: object) {
    super(506);
    Object.setPrototypeOf(this, VariantAlsoNegotiatesError.prototype);
  }
}

export class InsufficientStorageError extends DefaultError {
  constructor(public returnObject?: object) {
    super(507);
    Object.setPrototypeOf(this, InsufficientStorageError.prototype);
  }
}

export class LoopDetectedError extends DefaultError {
  constructor(public returnObject?: object) {
    super(508);
    Object.setPrototypeOf(this, LoopDetectedError.prototype);
  }
}

export class NotExtendedError extends DefaultError {
  constructor(public returnObject?: object) {
    super(510);
    Object.setPrototypeOf(this, NotExtendedError.prototype);
  }
}

export class NetworkAuthenticationRequiredError extends DefaultError {
  constructor(public returnObject?: object) {
    super(511);
    Object.setPrototypeOf(this, NetworkAuthenticationRequiredError.prototype);
  }
}
