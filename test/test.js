"use strict";

// Require Node.js Dependencies
const { join } = require("path");

// Require Third-party Dependencies
const japa = require("japa");
const is = require("@slimio/is");
const premove = require("premove");

// Require Internal
const Logger = require("../");

japa.group("logger", (group) => {
    const fd = join(__dirname, "test.log");
    group.after(async() => {
        try {
            await premove(fd);
        }
        catch (err) {
            // ignore
        }
    });

    japa("Logger must be a non-extensible class Object", (assert) => {
        assert.isTrue(is.classObject(Logger));
        assert.isFalse(Object.isExtensible(Logger));
    });

    japa("Create a new logger and log 5 iterations", async(assert) => {
        const lg = new Logger(fd, { title: "MY-LOG" });
        lg.writeLine("hello world!");
        lg.writeLine(void 0);
        lg.writeLine("foo bar");
        await lg.close();
    });
});


