import { DetectYoutubeLive } from "./detectYoutubeLive";
import opn = require("opn");
import { genTray } from "./tray";
import * as notifier from "node-notifier";

const url = "https://www.youtube.com/channel/UCIdEIHpS0TdkqRkHL5OkLtA/videos?view=2";
const intervalSec = 30;

const wait = (sec: number) => new Promise<void>((resolve) => setTimeout(resolve, sec * 1000));

const openedUrls: {[url: string]: boolean} = {};

async function main() {
    const detect = new DetectYoutubeLive(url);
    await detect.start();
    try {
        while (true) {
            const liveUrls = await detect.currentLiveUrls();
            if (liveUrls.length) {
                for (const liveUrl of liveUrls) {
                    if (!openedUrls[liveUrl]) {
                        notifier.notify({
                            title: "ライブが開始されました",
                        });
                        await opn(liveUrl);
                    }
                    openedUrls[liveUrl] = true;
                }
            }
            await wait(intervalSec);
        }
    } catch (e) {
        try {
            await detect.stop();
        } catch {
        }
    }
}

async function mainloop() {
    while (true) {
        await main();
    }
}

genTray({
    close() { process.exit(); },
});

mainloop();
