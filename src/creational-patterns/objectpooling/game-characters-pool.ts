import { GameCharacter } from "../factory/game-character";
import { GameCharacterFactory } from "../factory/game-character-factory";
export class GameCharactersPool {
    private _warriorsPool: GameCharacter[] = [];
    private _magesPool: GameCharacter[] = [];
    private static WARRIORS_POOL_SIZE = 30;
    private static MAGES_POOL_SIZE = 20;

    constructor(private level: number) {
        this.loadWarriorsPool();
        this.loadMagesPool();
    }

    private loadWarriorsPool() {
        for (
            let index = 0;
            index < GameCharactersPool.WARRIORS_POOL_SIZE;
            index++
        ) {
            this._warriorsPool.push(
                GameCharacterFactory.getWarrior(this.level)
            );
        }
    }

    private loadMagesPool() {
        for (
            let index = 0;
            index < GameCharactersPool.MAGES_POOL_SIZE;
            index++
        ) {
            this._magesPool.push(GameCharacterFactory.getMage(this.level));
        }
    }

    private getPoolItem<T>(pool: T[], reloadFn: () => void) {
        let item: T = pool.pop() as T;

        if (!pool.length) {
            reloadFn();
        }

        return item;
    }

    public getWarrior(): GameCharacter {
        return this.getPoolItem(
            this._warriorsPool,
            this.loadWarriorsPool.bind(this)
        );
    }

    public getMage(): GameCharacter {
        return this.getPoolItem(this._magesPool, this.loadMagesPool.bind(this));
    }
}
