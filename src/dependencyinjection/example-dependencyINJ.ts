import { IoContainer, Register } from './ioc-container';

interface IDepA {
    doA(): void;
}

interface IDepB {
    doB(): void;
}

interface IDepC {
    doC(): void;
}

@Register('IDepA', [])
class ConcreteA implements IDepA {
    doA(): void {
        console.log('Doing A');
    }
}

@Register('IDepB', [])
class ConcreteB implements IDepB {
    doB(): void {
        console.log('Doing B');
    }
}

@Register('IDepC', ['IDepA', 'IDepB'])
class ConcreteC implements IDepC {
    constructor(
        private _concreteA: IDepA,
        private _concreteB: IDepB,
        private _name: string = '!max!'
    ) {}
    doC(): void {
        this._concreteA.doA();
        this._concreteB.doB();
        console.log('Doing C', `with name ${this._name}`);
    }

    public get name() {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }
}

export let container = IoContainer.instance;
// container.register("IDepA", [], ConcreteA);
// container.register("IDepB", [], ConcreteB);
// container.register("IDepC", ["IDepA", "IDepB"], ConcreteC);

let a = container.resolve<IDepA>('IDepA');
let b = container.resolve<IDepB>('IDepB');
let c = container.resolve<IDepC>('IDepC');

a.doA();
b.doB();
console.log('==============');
c.doC();
