# Changelog

All notable changes to this project will be documented in this file.  
This project adheres to [Semantic Versioning](https://semver.org) and follows [Conventional Commits](https://www.conventionalcommits.org).

---

## [2.0.0](https://github.com/Rashedin-063/http-status-toolkit/releases/tag/v2.0.0) – 2025-07-10

### ⚠️ Breaking Changes

- Updated `getStatusMessage` function signature to accept an options object with `variant` property instead of a string parameter.
- Message variants like detailed or localized messages must now be imported explicitly as subpath imports (e.g., `messages-detailed`) and passed as `{ variant: DetailedMessages }`.
- Removed legacy string parameter support for detailed messages, requiring code updates on usage.

### ✨ Features

- Added support for localization with 10+ language variants available as subpath imports.
- Refactored message management to improve bundle size and flexibility.

---

## [1.0.1] ~ [1.0.3](https://github.com/Rashedin-063/http-status-toolkit/releases/tag/v1.0.2) – 2025-07-05

### 🛠️ Fixes

- Version bump only — no functional changes (republish to fix npm version conflict)
- Added CODE_OF_CONDUCT.md, CONTRIBUTION.md, updated README.md and package.json files

---

## [1.0.0](https://github.com/Rashedin-063/http-status-toolkit/releases/tag/v1.0.0) – 2025-07-01

### ✨ Features

- First stable release of `http-status-toolkit`
- Semantic and human-readable messages for HTTP status codes
- Both short (default) and detailed (optional) messages included
- Support for both short and detailed messages
- ES Modules + CommonJS + TypeScript typings
- Tree-shakable and subpath exports
- Includes unofficial, Microsoft, NGINX, and Cloudflare codes
