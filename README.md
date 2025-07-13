# http-status-toolkit

[![npm version](https://img.shields.io/npm/v/http-status-toolkit)](https://www.npmjs.com/package/http-status-toolkit)
![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label)
[![license](https://img.shields.io/npm/l/http-status-toolkit)](https://github.com/dev-rashedin/http-status-toolkit/blob/main/LICENSE)
[![downloads](https://img.shields.io/npm/dm/http-status-toolkit)](https://www.npmjs.com/package/http-status-toolkit)
![bundle size](https://deno.bundlejs.com/badge?q=http-status-toolkit)

<!-- ![minified](https://badgen.net/bundlephobia/min/http-status-toolkit)
![minified gzip](https://badgen.net/bundlephobia/minzip/http-status-toolkit) -->


👉 [View on npm](https://www.npmjs.com/package/http-status-toolkit)

A simple and lightweight toolkit for HTTP status codes and messages — written in TypeScript for safe, reliable usage.

If you like the project, please give the project a GitHub ⭐

---

## What is this?

This package gives you:

- HTTP status codes as constants (like `StatusCodes.OK` for 200)
- Short and clear messages for each status code
- Longer, more detailed messages if you want extra info
- Localization support for 10+ languages
- A helper function (`getStatusMessage`) to fetch messages by status code
- Full TypeScript support for better coding experience

---

# 🚀 Installation Guide

You can install **http-status-toolkit** using your favorite package manager.

### Using npm

```bash
npm install http-status-toolkit
```

### Using yarn

```bash
yarn add http-status-toolkit
```

## Using pnpm

```bash
pnpm add http-status-toolkit
```

## TypeScript & Module Support

- ✅ Full TypeScript support with type safety and autocompletion  
- ✅ Works in both ESM and CommonJS environments

---

## How to use

```ts
import {
  StatusCodes,
  getStatusMessage,
} from 'http-status-toolkit';

// Get the status code number
console.log(StatusCodes.OK); // 200

// Get a short message (default)
console.log(getStatusMessage(StatusCodes.NOT_FOUND));
// Output: "Not Found"

// Get a detailed message (import detailed messages and pass variant)
import DetailedMessages from 'http-status-toolkit/messages-detailed';
console.log(getStatusMessage(StatusCodes.NOT_FOUND, { variant: DetailedMessages }));
// Output: "Not Found: The requested resource could not be found but may be available in the future."

// Get a localized message (import a language variant)
import BengaliMessages from 'http-status-toolkit/messages-bn';
console.log(getStatusMessage(StatusCodes.NOT_FOUND, { variant: BengaliMessages }));
// Output: (Not Found message in Bengali)
```

---

## What’s included?

- `StatusCodes`: constants for all HTTP status codes  
- `StatusMessages`: short messages for each code (English default)  
- `DetailedStatusMessages`: longer, more detailed English messages  
- `getStatusMessage(code, options?)`: returns the message for a status code; optionally pass a `{ variant }` to get localized or detailed messages  

> **Note:**  
> `getStatusMessage` returns the HTTP reason phrase for a status code.  
> You can also use the alias `getReasonPhrase`, which behaves the same way.

---

## Common HTTP Status Codes

| Code | Constant     | Message          |
| ---- | ------------ | ---------------- |
| 200  | OK           | Request OK       |
| 201  | CREATED      | Resource created |
| 400  | BAD_REQUEST  | Bad input        |
| 401  | UNAUTHORIZED | Auth required    |
| 403  | FORBIDDEN    | Access denied    |
| 404  | NOT_FOUND    | Not found        |
| 500  | SERVER_ERROR | Server crashed   |


🔗 **[See full list of status codes](./docs/default-status-messages.md)**  
🔗 **[See status codes with detailed messages](./docs/detailed-status-messages.md)**

---

## Supported Languages (Localization)

You can import message variants for different languages:

| Language    | Import Path                           | Docs File                          |
|-------------|-------------------------------------|-----------------------------------|
| English (default)  | —                               | —                                 |
| Detailed English   | `messages-detailed`              | [detailed-status-messages.md](./docs/detailed-status-messages.md) |
| Bengali     | `messages-bn`                       | [bengali-status-messages.md](./docs/bengali-status-messages.md)   |
| Chinese     | `messages-zh`                       | [chinese-status-messages.md](./docs/chinese-status-messages.md)   |
| Hindi       | `messages-hi`                       | [hindi-status-messages.md](./docs/hindi-status-messages.md)       |
| Arabic      | `messages-ar`                       | [arabic-status-messages.md](./docs/arabic-status-messages.md)     |
| German      | `messages-de`                       | [german-status-messages.md](./docs/german-status-messages.md)     |
| French      | `messages-fr`                       | [french-status-messages.md](./docs/french-status-messages.md)     |
| Italian     | `messages-it`                       | [italian-status-messages.md](./docs/italian-status-messages.md)   |
| Spanish     | `messages-es`                       | [spanish-status-messages.md](./docs/spanish-status-messages.md)   |
| Japanese    | `messages-ja`                       | [japanese-status-messages.md](./docs/japanese-status-messages.md) |
| Russian     | `messages-ru`                       | [russian-status-messages.md](./docs/russian-status-messages.md)   |

---

## Contributors

Thanks to everyone who has contributed to this project! Special thanks to:

- [Rocky Haque](https://github.com/rockyhaque) — for their valuable pull request(s)

Contributions of any kind are always welcome. Feel free to open issues or submit PRs!

---

## License

MIT License. See the LICENSE file.

---

## Contributions

Feel free to suggest improvements or add new status codes by opening issues or pull requests on GitHub.

---

## Links

- **GitHub:** [https://github.com/dev-rashedin/http-status-toolkit](https://github.com/dev-rashedin/http-status-toolkit)  
- **Portfolio:** [https://www.rashedin.dev](https://www.rashedin.dev)

---

Made with ❤️ by [Rashedin Islam](https://www.rashedin.dev)