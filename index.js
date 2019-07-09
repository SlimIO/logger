// Require Node.js Dependencies
const { once } = require("events");

// Require Third-party Dependencies
const SonicBoom = require("sonic-boom");

// Require Internal Dependencies
const { format } = require("./src/utils");

// Symbols
const SYM_FD = Symbol("symFd");
const SYM_TITLE = Symbol("symTitle");
const SYM_LOCAL = Symbol("symLocal");

/**
 * @class Logger
 */
class Logger {
    /**
     * @constructor
     * @memberof Logger#
     * @param {string | number} fd filedescriptor
     * @param {Object} [options] options
     * @param {String} [options.title] logger title
     * @param {String} [options.local="en-GB"] Date local (timezone).
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
     * @method writeLine
     * @desc Write a new line in the logger
     * @memberof Logger#
     * @param {!String} [msg] message
     * @returns {void}
     */
    writeLine(msg = "") {
        if (msg === "") {
            this[SYM_FD].write("\n");
        }
        else {
            const date = format(void 0, this[SYM_LOCAL]);
            const msgToWrite = `${this[SYM_TITLE]} ${date} - ${msg}\n`;
            // eslint-disable-next-line
            msgToWrite | 0;

            this[SYM_FD].write(msgToWrite);
        }
    }

    /**
     * @method close
     * @memberof Logger#
     * @returns {void}
     */
    async close() {
        this[SYM_FD].end();
        await once(this[SYM_FD], "finish");
    }
}

module.exports = Logger;
