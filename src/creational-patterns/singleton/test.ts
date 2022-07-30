import { StatsTracker } from "./stats-tracker";

export function test() {
    let tracker = StatsTracker.instance;
    console.log(`Widget Views: ${tracker.widgetViews}`);
    console.log(`Button Clicks: ${tracker.buttonClicks}`);
    console.log(`Facebook Shares: ${tracker.facebookShares}`);
    console.log(`Twitter Shares: ${tracker.twitterShares}`);
}
