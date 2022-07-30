import { Computer } from './computer';

export class ServerComputer extends Computer {
    boot(): void {
        console.log('Booting server...');
    }

    shutdown(): void {
        console.log('Server is shutting down');
    }
}
