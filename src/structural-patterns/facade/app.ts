import { JsonPlaceholderFacade } from './json-placeholder-facade';
import { JsonPlaceholderService } from './json-placeholder-service';

const facade = new JsonPlaceholderFacade(new JsonPlaceholderService());

(async () => {
    try {
        const user = await facade.getUser(1);
        console.log('user: ', user);
    } catch (err: any) {
        console.log('error:', err.message);
    }
})();
