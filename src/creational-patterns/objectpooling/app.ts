import { GameCharactersPool } from "./game-characters-pool";
let level = 12;

export let pool = new GameCharactersPool(level);

// Load 40 warriors
for (let index = 0; index < 40; index++) {
    console.log(index + 1);
    console.log(pool.getWarrior());
}

