import * as fs from 'fs';
import { IExportPostsService } from './iexport-posts-service';
import { IPostsService } from './iposts-service';
import { Post } from './post';
const path = require('path');

export class PostsService implements IPostsService {
    private _fileName: string = path.join(__dirname, 'posts.json');

    constructor() {}

    getAll(): Promise<Post[]> {
        return new Promise((resolve, reject) => {
            fs.readFile(this._fileName, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                }

                if (data) {
                    resolve(JSON.parse(data));
                } else {
                }
            });
        });
    }

    save(post: Post): Promise<void> {
        return new Promise((resolve, reject) => {
            this.getAll().then((posts) => {
                if (!posts) {
                    posts = [];
                }

                posts.push(post);

                fs.writeFile(this._fileName, JSON.stringify(posts), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        });
    }

    export(service: IExportPostsService): Promise<string> {
        return this.getAll().then((posts) => service.export(posts));
    }
}
