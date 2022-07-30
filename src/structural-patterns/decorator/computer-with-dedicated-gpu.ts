import { Computer } from './computer';
import { ComputerComponentDecorator } from './computer-component-decorator';

export class ComputerWithDedicatedGPU extends ComputerComponentDecorator {
    constructor(computer: Computer) {
        super(computer);
    }

    renderVideo(): void {
        console.log('Rendering video with dedicated GPU');
    }
}
