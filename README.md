# http-status-toolkit

A small and simple toolkit for HTTP status codes and messages. Made with TypeScript for easy and safe use.

---

## What is this?

This package gives you:

- HTTP status codes as constants (like `StatusCodes.OK` for 200)
- Short and clear messages for each status code
- Longer, more detailed messages if you want extra info
- A helper function to get messages by status code
- Full TypeScript support for better coding experience

---

## How to install

Use npm or yarn to add it to your project:

```bash
npm install http-status-toolkit
or
yarn add http-status-toolkit


import { StatusCodes, StatusMessages, DetailedStatusMessages, getStatusMessage } from 'http-status-toolkit';

// Get the status code number
console.log(StatusCodes.OK); // 200

// Get a short message (default)
console.log(getStatusMessage(StatusCodes.NOT_FOUND)); // "Not Found"

// Get a detailed message
console.log(getStatusMessage(StatusCodes.NOT_FOUND, true)); 
// "Not Found: The requested resource could not be found but may be available in the future."

// You can also access messages directly
console.log(StatusMessages[StatusCodes.FORBIDDEN]); // "Forbidden"
console.log(DetailedStatusMessages[StatusCodes.FORBIDDEN]);
// "Forbidden: The server understood the request but refuses to authorize it."




