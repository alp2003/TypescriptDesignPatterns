import { IErrorLoggingStrategy } from './ierror-logging-strategy';
import { format } from 'date-fns';
import fs from 'fs';
export class FileErrorLoggingStrategy implements IErrorLoggingStrategy {
    log(err: Error): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.appendFile(
                'logs/error.log',
                `${format(new Date(), `dd/MM/yyyy HH:mm:ss z`)} - ${
                    err.name
                }: ${err.message}\r\n`,
                'utf-8',
                (error) => {
                    if (error) {
                        console.error('Error Logging failed');
                        reject(error);
                    } else {
                        resolve(err);
                    }
                }
            );
        });
    }
}
