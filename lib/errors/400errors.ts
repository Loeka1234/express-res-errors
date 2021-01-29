import { DefaultError } from "./DefaultError";

export class BadRequestError extends DefaultError {
  constructor(public returnObject?: object) {
    super(400);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

export class UnauthorizedError extends DefaultError {
  constructor(public returnObject?: object) {
    super(401);
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}

export class PaymentRequiredError extends DefaultError {
  constructor(public returnObject?: object) {
    super(402);
    Object.setPrototypeOf(this, PaymentRequiredError.prototype);
  }
}

export class ForbiddenError extends DefaultError {
  constructor(public returnObject?: object) {
    super(403);
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}

export class NotFoundError extends DefaultError {
  constructor(public returnObject?: object) {
    super(404);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class MethodNotAllowedError extends DefaultError {
  constructor(public returnObject?: object) {
    super(405);
    Object.setPrototypeOf(this, MethodNotAllowedError.prototype);
  }
}

export class NotAcceptableError extends DefaultError {
  constructor(public returnObject?: object) {
    super(406);
    Object.setPrototypeOf(this, NotAcceptableError.prototype);
  }
}

export class ProxyAuthenticationRequiredError extends DefaultError {
  constructor(public returnObject?: object) {
    super(407);
    Object.setPrototypeOf(this, ProxyAuthenticationRequiredError.prototype);
  }
}

export class RequestTimeoutError extends DefaultError {
  constructor(public returnObject?: object) {
    super(408);
    Object.setPrototypeOf(this, RequestTimeoutError.prototype);
  }
}

export class ConflictError extends DefaultError {
  constructor(public returnObject?: object) {
    super(409);
    Object.setPrototypeOf(this, ConflictError.prototype);
  }
}

export class GoneError extends DefaultError {
  constructor(public returnObject?: object) {
    super(410);
    Object.setPrototypeOf(this, GoneError.prototype);
  }
}

export class LengthRequiredError extends DefaultError {
  constructor(public returnObject?: object) {
    super(411);
    Object.setPrototypeOf(this, LengthRequiredError.prototype);
  }
}

export class PreconditionFailedError extends DefaultError {
  constructor(public returnObject?: object) {
    super(412);
    Object.setPrototypeOf(this, PreconditionFailedError.prototype);
  }
}

export class PayloadTooLargeError extends DefaultError {
  constructor(public returnObject?: object) {
    super(413);
    Object.setPrototypeOf(this, PayloadTooLargeError.prototype);
  }
}

export class URITooLongError extends DefaultError {
  constructor(public returnObject?: object) {
    super(414);
    Object.setPrototypeOf(this, URITooLongError.prototype);
  }
}

export class UnsupportedMediaType extends DefaultError {
  constructor(public returnObject?: object) {
    super(415);
    Object.setPrototypeOf(this, UnsupportedMediaType.prototype);
  }
}

export class RangeNotSatisfiableError extends DefaultError {
  constructor(public returnObject?: object) {
    super(416);
    Object.setPrototypeOf(this, RangeNotSatisfiableError.prototype);
  }
}

export class ExpectationFailedError extends DefaultError {
  constructor(public returnObject?: object) {
    super(417);
    Object.setPrototypeOf(this, ExpectationFailedError.prototype);
  }
}

export class ImATeapotError extends DefaultError {
  constructor(public returnObject?: object) {
    super(418);
    Object.setPrototypeOf(this, ImATeapotError.prototype);
  }
}

export class MisdirectedRequestError extends DefaultError {
  constructor(public returnObject?: object) {
    super(421);
    Object.setPrototypeOf(this, MisdirectedRequestError.prototype);
  }
}

export class UnprocessableEntityError extends DefaultError {
  constructor(public returnObject?: object) {
    super(422);
    Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
  }
}

export class LockedError extends DefaultError {
  constructor(public returnObject?: object) {
    super(423);
    Object.setPrototypeOf(this, LockedError.prototype);
  }
}

export class FailedDependencyError extends DefaultError {
  constructor(public returnObject?: object) {
    super(424);
    Object.setPrototypeOf(this, FailedDependencyError.prototype);
  }
}

export class TooEarlyError extends DefaultError {
  constructor(public returnObject?: object) {
    super(425);
    Object.setPrototypeOf(this, TooEarlyError.prototype);
  }
}

export class UpgradeRequiredError extends DefaultError {
  constructor(public returnObject?: object) {
    super(426);
    Object.setPrototypeOf(this, UpgradeRequiredError.prototype);
  }
}

export class PreconditionRequiredError extends DefaultError {
  constructor(public returnObject?: object) {
    super(428);
    Object.setPrototypeOf(this, PreconditionRequiredError.prototype);
  }
}

export class TooManyRequestsError extends DefaultError {
  constructor(public returnObject?: object) {
    super(429);
    Object.setPrototypeOf(this, TooManyRequestsError.prototype);
  }
}

export class RequestHeaderFieldsTooLargeError extends DefaultError {
  constructor(public returnObject?: object) {
    super(431);
    Object.setPrototypeOf(this, RequestHeaderFieldsTooLargeError.prototype);
  }
}

export class UnavailableForLegalReasons extends DefaultError {
  constructor(public returnObject?: object) {
    super(451);
    Object.setPrototypeOf(this, UnavailableForLegalReasons.prototype);
  }
}
