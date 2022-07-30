export class Computer {
    boot(): void {
        console.log('Computer is booting');
    }

    shutdown(): void {
        console.log('Computer is shutting down');
    }

    display(): void {
        console.log('Displaying content in one screen');
    }

    print(): void {
        console.log('No printer found');
    }

    renderVideo(): void {
        console.log('Cannot render video without dedicated graphic card');
    }
}

