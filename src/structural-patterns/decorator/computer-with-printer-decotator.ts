import { Computer } from './computer';
import { ComputerComponentDecorator } from './computer-component-decorator';

export class ComputerWithPrinterDecorator extends ComputerComponentDecorator {
    constructor(computer: Computer) {
        super(computer);
    }

    print(): void {
        console.log('Printing...');
    }
}
