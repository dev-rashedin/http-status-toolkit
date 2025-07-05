# http-status-toolkit

[![npm version](https://img.shields.io/npm/v/http-status-toolkit)](https://www.npmjs.com/package/http-status-toolkit)
![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label)
[![license](https://img.shields.io/npm/l/http-status-toolkit)](https://github.com/dev-rashedin/http-status-toolkit/blob/main/LICENSE)
[![downloads](https://img.shields.io/npm/dw/http-status-toolkit)](https://www.npmjs.com/package/http-status-toolkit)
[![GitHub stars](https://img.shields.io/github/stars/dev-rashedin/http-status-toolkit?style=social)](https://github.com/dev-rashedin/http-status-toolkit/stargazers)
![minified](https://badgen.net/bundlephobia/min/http-status-toolkit)
![minified gzip](https://badgen.net/bundlephobia/minzip/http-status-toolkit)


👉 [View on npm](https://www.npmjs.com/package/http-status-toolkit)


A simple and lightweight toolkit for HTTP status codes and messages — written in TypeScript for safe, reliable usage.

If you like the project, please give the project a GitHub ⭐


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

// Get a detailed message (pass 'detailed' as second parameter)
console.log(getStatusMessage(StatusCodes.NOT_FOUND, 'detailed'));
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
- `getStatusMessage(code, 'detailed'?)`: returns either a short or detailed message for a given status code


> **Note:** The function `getStatusMessage` returns the HTTP reason phrase for a status code.  
> We chose the name `getStatusMessage` to keep it simple and clear.  
> You can also use the alias `getReasonPhrase`, which behaves the same way.


## Common HTTP Status Codes

| Code | Constant       | Message         |
|------|----------------|-----------------|
| 200  | OK             | Request OK      |
| 201  | CREATED        | Resource created|
| 400  | BAD_REQUEST    | Bad input       |
| 401  | UNAUTHORIZED   | Auth required   |
| 403  | FORBIDDEN      | Access denied   |
| 404  | NOT_FOUND      | Not found       |
| 500  | SERVER_ERROR   | Server crashed  |



🔗 **[See full list of status codes](./docs/status-codes-with-short-message.md)**  
🔗 **[See status codes with detailed messages](./docs/status-codes-with-detailed-message.md)**



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


## Links

- **GitHub:** [Rashedin-063](https://github.com/dev-rashedin)
- **Portfolio:** [rashedin.dev](https://www.rashedin.dev)

---

Made with ❤️ by [Rashedin Islam](https://www.rashedin.dev)

