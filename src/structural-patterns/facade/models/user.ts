import { Address } from './Address';
import { Company } from './Company';
import { Post } from './post';
import { Todo } from './todo';

export interface User {
    address: Address;
    company: Company;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
    posts: Post[];
    todos: Todo[];
}
