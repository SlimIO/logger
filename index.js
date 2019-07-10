"use strict";

// Require Node.js Dependencies
const { once } = require("events");

// Require Third-party Dependencies
const SonicBoom = require("sonic-boom");
const flatstr = require("flatstr");

// Require Internal Dependencies
const { format } = require("./src/utils");

// Symbols
const SYM_FD = Symbol("symFd");
const SYM_TITLE = Symbol("symTitle");
const SYM_LOCAL = Symbol("symLocal");

class Logger {
    /**
     * @class Logger
     * @memberof Logger#
     * @param {string | number} fd filedescriptor
     * @param {object} [options] options
     * @param {string} [options.title] logger title
     * @param {string} [options.local="en-GB"] Date local (timezone).
     *
     * @throws {TypeError}
     */
    constructor(fd = process.stdout.fd, options = Object.create(null)) {
        const { title = "", local = "en-GB" } = options;
        if (typeof title !== "string") {
            throw new TypeError("title must be typeof string");
        }
        if (typeof local !== "string") {
            throw new TypeError("local must be typeof string");
        }

        Object.defineProperty(this, SYM_LOCAL, { value: local });
        Object.defineProperty(this, SYM_TITLE, {
            value: title === "" ? title : `[${title}]`
        });
        Object.defineProperty(this, SYM_FD, {
            value: new SonicBoom(fd)
        });
    }

    /**
     * @function writeLine
     * @description Write a new line in the logger
     * @memberof Logger#
     * @param {!string} [msg] message
     * @returns {void}
     */
    writeLine(msg = "") {
        if (msg === "") {
            this[SYM_FD].write("\n");
        }
        else {
            const date = format(void 0, this[SYM_LOCAL]);
            this[SYM_FD].write(flatstr(`${this[SYM_TITLE]} ${date} - ${msg}\n`));
        }
    }

    /**
     * @function close
     * @memberof Logger#
     * @returns {void}
     */
    async close() {
        this[SYM_FD].end();
        await once(this[SYM_FD], "finish");
    }
}
Object.preventExtensions(Logger);

module.exports = Logger;
