import { ServerComputer } from './server-computer';
import { ComputerWithPrinterDecorator } from './computer-with-printer-decotator';
import { ComputerWithDedicatedGPU } from './computer-with-dedicated-gpu';

let server = new ServerComputer();
let serverWithPrinter = new ComputerWithPrinterDecorator(server);
export let serverWithPrinterAndDedicatedGPU = new ComputerWithDedicatedGPU(
    serverWithPrinter
);

serverWithPrinterAndDedicatedGPU.print();
serverWithPrinterAndDedicatedGPU.renderVideo();
