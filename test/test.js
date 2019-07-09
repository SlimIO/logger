// Require Node.js Dependencies
const { join } = require("path");

// Require Third-party Dependencies
const test = require("japa");
const is = require("@slimio/is");

// Require Internal
const Logger = require("../");

test("Logger must be a non-extensible class Object", (assert) => {
    assert.isTrue(is.classObject(Logger));
    assert.isFalse(Object.isExtensible(Logger));
});

test("Create a new logger and log 5 iterations", async(assert) => {
    const fd = join(__dirname, "test.log");
    const lg = new Logger(fd, { title: "MY-LOG" });
    lg.writeLine("hello world!");
    lg.writeLine(void 0);
    lg.writeLine("foo bar");
    await lg.close();
});

