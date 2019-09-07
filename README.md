# Logger
![version](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/SlimIO/logger/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/SlimIO/logger/commit-activity)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
![dep](https://img.shields.io/david/SlimIO/logger)
![size](https://img.shields.io/github/languages/code-size/SlimIO/logger)
[![Known Vulnerabilities](https://snyk.io//test/github/SlimIO/logger/badge.svg?targetFile=package.json)](https://snyk.io//test/github/SlimIO/logger?targetFile=package.json)
[![Build Status](https://travis-ci.com/SlimIO/logger.svg?branch=master)](https://travis-ci.com/SlimIO/logger)

SlimIO Sonic Logger. Very simple logger designed to be used in SlimIO. This package is inspired by pino logger.

## Requirements
- [Node.js](https://nodejs.org/en/) v10 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @slimio/logger
# or
$ yarn add @slimio/logger
```

## Usage example
```js
const log = new Logger(void 0, {
    title: "MY-LOG"
});
for (let id = 0; id < 10; ++id) {
    log.writeLine("hello world!");
}

// end and flush writestream.
await log.close();
```

## API

### constructor(fd?: string | number, options?: Logger.ConstructorOptions)
Create a new Logger. The default value of `fd` is `process.stdout.fd`.

Options is described by the following TypeScript interface:
```ts
interface ConstructorOptions {
    title?: string;
    local?: string;
}
```

### writeLine(msg?: string): void
Write a new line in the write stream. If the **msg** is undefined or equal to Empty String, then we write `\n` in the WriteStream.

```js
log.writeLine("hello");
log.writeLine(void 0);
log.writeLine("bye bye !");
```

It will produce the following stdout
```
[my-log] Jul 10, 2019, 3:24:25 PM - hello

[my-log] Jul 10, 2019, 3:24:25 PM - bye bye !
```

### close(): Promise< void >
Close and flush the stream.

## Dependencies

|Name|Refactoring|Security Risk|Usage|
|---|---|---|---|
|[flatstr](https://github.com/davidmarkclements/flatstr#readme)|Minor|Low|TBC|
|[sonic-boom](https://github.com/mcollina/sonic-boom#readme)|Minor|High|TBC|


## License
MIT
