# Decorator Pattern

Plugin Use
Extends Computer and Compose data member
Computer Base Class

Problem that it solve no need create another Component if we want combine features
Computer
ComputerComponentDecorator extends Computer
ComputerWithPrinterDecorator extends ComputerComponentDecorator
ComputerWithDedicatedGPU extends ComputerComponentDecorator
