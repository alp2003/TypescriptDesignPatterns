export class Car {
    private _currentSpeed: number = 0;
    private readonly _maxSpeed: number;
    private _currentSpeedObservers: Function[] = [];
    registerCurrentSpeedObserver(observer: Function) {
        if (!this._currentSpeedObservers.find((obs) => obs === observer)) {
            this._currentSpeedObservers.push(observer);
        }
    }
    triggerCurrentSpeedObservers(newValue: number, oldValue: number) {
        this._currentSpeedObservers.forEach((observer) =>
            observer(newValue, oldValue)
        );
    }

    constructor(maxSpeed: number) {
        this._maxSpeed = maxSpeed;
    }

    public get currentSpeed(): number {
        return this._currentSpeed;
    }
    public set currentSpeed(value: number) {
        if (this._currentSpeed < 0) {
            throw new Error('Invalid current speed');
        }

        if (this._currentSpeed > this._maxSpeed) {
            throw new Error('Engine broke');
        }

        if (this._currentSpeed !== value) {
            let oldValue = this._currentSpeed;
            this._currentSpeed = value;
            this.triggerCurrentSpeedObservers(value, oldValue);
        }
    }

    public get maxSpeed(): number {
        return this._maxSpeed;
    }
}
