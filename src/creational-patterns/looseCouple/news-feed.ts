import { IPostsService } from "./iposts-service";
export class NewsFeed {
    constructor(private _service: IPostsService) {}

    async show() {
        const posts = await this._service.getAll();
        posts.forEach((post) => {
            console.log(`${post.title} - ${post.body}`);
        });
    }
}
