import { CommandWorker } from './command-worker';
import { LogCommandParams, LogCommand } from './log-command';

async function sleep(duration: number): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}

async function testCommandPattern(): Promise<any> {
    // Run the command worker every 5 seconds
    let commandWorker = new CommandWorker(1000);
    let counter = 0;
    while (true) {
        try {
            await sleep(1000);
            let b: any = 100;
            if (counter === 30) {
                commandWorker.stopWorker();
                return;
            }
            b();
        } catch (err: any) {
            let params: LogCommandParams = {
                title: 'Oops something went wrong',
                body: 'Please try again later',
                error: err as Error,
                filename: './logs/error.log'
            };

            counter++;
            commandWorker.registerCommand(new LogCommand(params));
        }
    }
}

testCommandPattern();
