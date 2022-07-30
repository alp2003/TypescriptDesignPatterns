import { Subscription } from './subscription';

async function sleep(duration: number): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}
export let subscription = new Subscription();
subscription.checkSubscriptionStatus();
subscription.dayPassed();
subscription.checkSubscriptionStatus();
(async () => {
    try {
        for (let index = 0; index < 13; index++) {
            await sleep(1000);
            subscription.dayPassed();
            subscription.checkSubscriptionStatus();
        }

        subscription.pay(200);
        subscription.checkSubscriptionStatus();
        subscription.pay(10);
        subscription.checkSubscriptionStatus();
    } catch (err: any) {
        console.log(err.message);
    }
})();
