# http-status-toolkit

A simple and lightweight toolkit for HTTP status codes and messages — written in TypeScript for safe, reliable usage.

---

## What is this?

This package gives you:

- HTTP status codes as constants (like `StatusCodes.OK` for 200)
- Short and clear messages for each status code
- Longer, more detailed messages if you want extra info
- A helper function (getStatusMessage) to fetch messages by status code
- Full TypeScript support for better coding experience

---

## How to install

Use npm or yarn to add it to your project:

```bash
npm install http-status-toolkit
# or
yarn add http-status-toolkit 
```


## How to use

```ts
// Import what you need from the toolkit
import {
  StatusCodes,
  StatusMessages,
  DetailedStatusMessages,
  getStatusMessage,
} from 'http-status-toolkit';

// Get the status code number
console.log(StatusCodes.OK); // 200

// Get a short message (default)
console.log(getStatusMessage(StatusCodes.NOT_FOUND));
// Output: "Not Found"

// Get a detailed message
console.log(getStatusMessage(StatusCodes.NOT_FOUND, true));
// Output: "Not Found: The requested resource could not be found but may be available in the future."

// You can also access messages directly
console.log(StatusMessages[StatusCodes.FORBIDDEN]);
// Output: "Forbidden"

console.log(DetailedStatusMessages[StatusCodes.FORBIDDEN]);
// Output: "Forbidden: The server understood the request but refuses to authorize it."
```



## What’s included?
- `StatusCodes`: constants for all HTTP status codes
- `StatusMessages`: short messages for each code
- `DetailedStatusMessages`: longer, more detailed messages
- `getStatusMessage(code, detailed?)`: returns either a short or detailed message for a given status code



## TypeScript & Module Support

- ✅ Full TypeScript support with type safety and autocompletion
- ✅ Works in both ESM and CommonJS environments

Works in ESM and CommonJS

```ts
// ESM
import { StatusCodes } from 'http-status-toolkit';

// CommonJS
const { StatusCodes } = require('http-status-toolkit');
```


## License
MIT License. See the LICENSE file.

## Contributions
Feel free to suggest improvements or add new status codes by opening issues or pull requests on GitHub.


