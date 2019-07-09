# Logger
![version](https://img.shields.io/badge/version-0.1.0-blue.svg)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/SlimIO/is/commit-activity)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)

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
for (let id = 0; id < 150; ++id) {
    log.writeLine("hello world!");
}

// end and flush writestream.
await log.close();
```

## API

### constructor(fd?: string | number, options?: Logger.ConstructorOptions)
Create a new Logger. The default value of `fd` is `process.stdout.fd`.

### writeLine(msg: string): void
Write a new line in the write stream.

### close(): Promise< void >
Close and flush the stream.

## Dependencies

|Name|Refactoring|Security Risk|Usage|
|---|---|---|---|
|[flatstr](https://github.com/davidmarkclements/flatstr#readme)|Minor|Low|TBC|
|[sonic-boom](https://github.com/mcollina/sonic-boom#readme)|Minor|High|TBC|


## License
MIT
