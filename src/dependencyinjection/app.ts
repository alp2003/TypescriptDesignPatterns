// Decorator that disables a function
export function disable(
    target: Object,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    descriptor.value = () => {
        throw new Error("Method is disabled");
    };
}

// Decorator that run method before function
export function before(hook: Function) {
    return function <T extends Function>(
        target: Object,
        methodName: string,
        descriptor: PropertyDescriptor
    ): PropertyDescriptor {
        return {
            get: function (this: T) {
                let originalMethod = descriptor.value!.bind(this);
                hook = hook.bind(this);

                return () => {
                    hook();
                    originalMethod();
                };
            }
        };
    };
}

//
export function capitalize(fav: number) {
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            _a = "A";
            _b = "B";
        };
    };
}

@capitalize(1)
export class Whatever {
    private _a: string = "a";
    private _b: string = "b";

    constructor(private fav: number) {}

    foo() {
        console.log("foo");
    }
    @before(() => {
        console.log("before hook ");
    })
    bar() {
        console.log("bar");
    }

    baz() {
        console.log(`a: ${this._a}, b: ${this._b}`);
    }

    getFav() {
        return this.fav;
    }
}

export let whatever = new Whatever(4);

whatever.foo();
console.log("==============");
console.log(whatever.getFav());

whatever.baz();
