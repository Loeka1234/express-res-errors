# Express-res-errors

Express-res-errors is a package for throwing errors inside express routes. It handles these error with a custom express middleware.  The package is made to be used in Typescript but can potentially also be used in Javascript.

### Features

- [HTTPError](#httperror)

- [Default Errors](#default-errors)

- [Custom Errors](#custom-errors)

### Example

```typescript
app.get("/myRoute", (req, res) => {
  throw new BadRequestError();
});

// After your routes
app.use(
  errorHandlerMiddleware({
    // Config
  })
);
```

### Usage with async routes

```typescript
app.get("/myRoute", async (req, res, next) => {
  next(
    new BadRequestError()
  );
});
```

Or install [express-async-errors](https://npmjs.com/package/express-async-errors) if you want to throw errors inside of async routes.

```typescript
import "express-async-errors";

// ...

app.get("/myRoute", async (req, res) => {
  throw new BadRequestError();
});
```

### HTTPError

Example:

```typescript
app.get("/myRoute", (req, res) => {
  throw new HTTPError(500, {
    message: "My Custom JSON Body"
  });
});
```

### Default Errors

Example:

```typescript
app.get("/myRoute", (req, res) => {
  throw new InternalServerError();
});
```

This package includes all 400 and 500 status codes.

### Custom Errors

You can create custom errors yourself. This is very useful if you want every error to return the same JSON structure.

```typescript
class MyCustomError extends CustomError {
  statusCode = 400; // The status code the error should send

  constructor(public returnMessage: string) {
    super("Bad Request"); // Error message
    Object.setPrototypeOf(this, MyCustomError.prototype); // Required in order to let the custom error work
  }

  serializeErrors() {
    return [{
      message: this.returnMessage
    }]
  }
}
```

`serializeErrors` returns by default this typescript type: `{ message: string; field?: string }[];` The purpose of serializeErrors is that it converts variables, passed in by the constructor to this typescript type so that the JSON body with every error looks the same. Useful use case can be found [here](https://github.com/Loeka1234/express-res-errors/blob/main/custom-errors-usecase.md).

You can change the return type of `serializeErrors`. In this example, `serializeErrors` should return an object with key `message` that has a value that is a string.

```typescript
class MyCustomError extends CustomError<{ message: string }> {
    // ...
}
```
