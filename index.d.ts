declare namespace Logger {
    interface ConstructorOptions {
        title?: string;
        local?: string;
    }
}

declare class Logger {
    public isStdout: boolean;

    constructor(fd?: string | number, options?: Logger.ConstructorOptions);
    writeLine(msg?: string): void;
    close(): Promise<void>;
}

export = Logger;
export as namespace Logger;
