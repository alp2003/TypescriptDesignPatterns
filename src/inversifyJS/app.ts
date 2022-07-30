import container from './example-dependencyINJ';
import { IDepA } from './IDepA';
import { IDepB } from './IDepB';
import { IDepC } from './IDepC';
import { TYPES } from './types';

let a = container.get<IDepA>(TYPES.IDepA);
let b = container.get<IDepB>(TYPES.IDepB);
let c = container.get<IDepC>(TYPES.IDepC);
a.doA();
b.doB();
console.log('==============');
c.doC();
