import { GameCharacterFactory } from "./game-character-factory";

export let warrior = GameCharacterFactory.getWarrior(6);
export let mage = GameCharacterFactory.getMage(12);
console.log(`the mage  character  lvl 12 - `, mage);
console.log(`the warrior character lvl 6 - `, warrior);
