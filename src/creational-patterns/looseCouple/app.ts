import { NewsFeed } from './news-feed';
import { PostsService } from './posts-service';
import { JsonExportService } from './json-export-service';

export const newsFeed = new NewsFeed(new PostsService());
newsFeed.show();
