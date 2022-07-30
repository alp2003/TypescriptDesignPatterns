import 'reflect-metadata';
import { IDepA } from './IDepA';
import { IDepB } from './IDepB';
import { IDepC } from './IDepC';
import { Container } from 'inversify';
import { TYPES } from './types';
import { ConcreteA } from './ConcreteA';
import { ConcreteB } from './ConcreteB';
import { ConcreteC } from './ConcreteC';

export let container = new Container();
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA).inSingletonScope();
container.bind<IDepB>(TYPES.IDepB).to(ConcreteB).inSingletonScope();
container.bind<IDepC>(TYPES.IDepC).to(ConcreteC).inSingletonScope();
container.bind<string>(TYPES.name).toConstantValue('master');
export default container;
