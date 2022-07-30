import { inject, injectable } from 'inversify';
import { IDepA } from './IDepA';
import { IDepB } from './IDepB';
import { IDepC } from './IDepC';
import { TYPES } from './types';

@injectable()
export class ConcreteC implements IDepC {
    constructor(
        @inject(TYPES.IDepA) private _concreteA: IDepA,
        @inject(TYPES.IDepB) private _concreteB: IDepB,
        @inject(TYPES.name) private _name: string = '!max'
    ) {}
    doC(): void {
        this._concreteA.doA();
        this._concreteB.doB();
        console.log(`Doing C -${this._name} `);
    }
}

// https://stackoverflow.com/questions/37439798/inversifyjs-injecting-literal-constructor-parameters
