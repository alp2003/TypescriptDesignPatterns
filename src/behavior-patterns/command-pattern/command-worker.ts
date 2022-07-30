import { ICommand } from './icommand';
export class CommandWorker {
    private _commands: ICommand[] = [];
    private readonly _interval: number;
    private _intervalID: any;

    constructor(interval: number) {
        this._interval = interval;
        this.startWorker();
    }

    registerCommand(command: ICommand) {
        console.log('Registering command');
        if (!this._commands.find((c) => c === command)) {
            this._commands.push(command);
        }
    }

    startWorker(): any {
        this._intervalID = setInterval(() => {
            let command = this._commands.pop();

            if (command) {
                command.execute();
            }
        }, this._interval);
    }

    stopWorker(): any {
        if (this._intervalID) {
            clearInterval(this._intervalID);
        }
    }
}
