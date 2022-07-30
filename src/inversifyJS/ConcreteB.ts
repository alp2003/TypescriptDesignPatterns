import { injectable } from "inversify";
import { IDepB } from "./IDepB";

@injectable()
export class ConcreteB implements IDepB {
    doB(): void {
        console.log("Doing B");
    }
}
