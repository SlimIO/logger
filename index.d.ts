declare namespace Logger {
    interface ConstructorOptions {
        title?: string;
        local?: string;
    }
}

declare class Logger {
    constructor(fd?: string | number, options?: Logger.ConstructorOptions);
    writeLine(msg?: string): void;
    close(): Promise<void>;
}

export = Logger;
export as namespace Logger;
