import { Album } from './models/album';
import { Comment } from './models/comment';
import { Photo } from './models/photos';
import { Post } from './models/post';
import { Todo } from './models/todo';
import { User } from './models/user';

export interface IJsonPlaceholderService {
    getAlbum(): Promise<Album[]>;
    getComments(): Promise<Comment[]>;
    getPhotos(): Promise<Photo[]>;
    getPosts(): Promise<Post[]>;
    getTodos(): Promise<Todo[]>;
    getUsers(): Promise<User[]>;
}
