import { Computer } from './computer';

export class ComputerComponentDecorator extends Computer {
    constructor(private _computer: Computer) {
        super();
    }

    boot(): void {
        return this._computer.boot();
    }

    shutdown(): void {
        return this._computer.shutdown();
    }

    display(): void {
        return this._computer.display();
    }

    print(): void {
        return this._computer.print();
    }

    renderVideo(): void {
        return this._computer.renderVideo();
    }
}
