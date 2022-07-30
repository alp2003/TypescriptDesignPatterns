import { container } from "./example-dependencyINJ";
export class IoContainer {
    private static _instance: IoContainer = new IoContainer();
    private _dependencies: { [key: string]: Object } = {};

    private constructor() {
        if (IoContainer._instance) {
            throw new Error("Singleton class. Can not instantiate using new!");
        }

        IoContainer._instance = this;
    }

    public static get instance(): IoContainer {
        return IoContainer._instance;
    }

    register(name: string, dependencies: string[], implementation: any) {
        if (this._dependencies[name]) {
            throw new Error("Dependency already registered!");
        }

        let dependenciesImplementations =
            this.getDependenciesImplementations(dependencies);
        this._dependencies[name] = new implementation(
            ...dependenciesImplementations
        );
    }

    resolve<T>(name: string): T {
        if (!this._dependencies[name]) {
            throw new Error(`Unresolved dependency ${name}`);
        }

        return this._dependencies[name] as T;
    }

    private getDependenciesImplementations(
        dependenciesNames: string[]
    ): Object[] {
        return dependenciesNames.map((name) => this.resolve(name));
    }
}

export function Register(name: string, dependencies: string[]): Function {
    let container = IoContainer.instance;
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
        container.register(name, dependencies, constructor);
    };
}
