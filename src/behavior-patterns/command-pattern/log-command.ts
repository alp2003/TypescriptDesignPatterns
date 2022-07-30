import { ICommand } from './icommand';
import fs from 'fs';
import { format } from 'date-fns';

export interface LogCommandParams {
    title: string;
    body: string;
    error: Error;
    filename: string;
}

export class LogCommand implements ICommand {
    private readonly _logCommandParams: LogCommandParams;
    constructor(params: LogCommandParams) {
        this._logCommandParams = params;
    }
    execute(): Promise<any> {
        return new Promise<void>((resolve, reject) => {
            const contents = `${format(
                new Date(),
                `dd/MM/yyyy HH:mm:ss z`
            )} | ${this._logCommandParams.error} - ${
                this._logCommandParams.title
            }: ${this._logCommandParams.body}\r\n`;
            fs.appendFile(
                this._logCommandParams.filename,
                contents,
                'utf-8',
                (err) => {
                    if (err) {
                        console.error('Logger failed');
                        reject(err);
                    } else {
                        resolve();
                    }
                }
            );
        });
    }
}
