import { IErrorDisplayStrategy } from './ierror-display-strategy';
import clc from 'cli-color';

export class ConsoleErrorDisplayStrategy implements IErrorDisplayStrategy {
    display(title: string, body: string): void {
        console.log(`${clc.red(title)}:${clc.blue(body)}`);
    }
}
