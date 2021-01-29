# Custom Errors Usecase

Imagine using express-validation for validating the JSON body that the user sends to the server.

We can make this custom error:

```typescript
import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(err => {
      return { message: err.msg, field: err.param };
    });
  }
}
```

As you can see, we can now easily throw this RequestValidationError and provide the errors array that `express-validator` gives us. Our custom error will convert this array to the typescript type we need. This gives us a consistent JSON body for all errors.

```typescript
const errors = validationResult(req);

if (!errors.isEmpty()) throw new RequestValidationError(errors.array());
```


