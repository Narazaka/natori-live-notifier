import * as puppeteer from "puppeteer";

/**
 * detect YouTube Live
 */
export class DetectYoutubeLive {
    readonly url: string;
    browser!: puppeteer.Browser;
    page!: puppeteer.Page;

    /**
     * @param url Youtube Videos LiveStream page url
     */
    constructor(url: string) {
        this.url = url;
    }

    async start() {
        this.browser = await puppeteer.launch();
        this.page = await this.browser.newPage();
        await (this.page as any)._client.send('Network.clearBrowserCookies');
        await this.page.goto(this.url);
    }

    async currentLiveUrls() {
        await this.page.reload();
        const details = await this.page.$$("#items #details");
        if (!details.length) throw new Error("no items");
        const hrefs = [];
        for (const detail of details) {
            if (!await detail.$(".badge-style-type-live-now")) continue;
            const videoTitle = await detail.$("#video-title");
            if (!videoTitle) throw new Error("no title");
            const hrefProp = await videoTitle.getProperty("href");
            hrefs.push(await hrefProp.jsonValue() as string);
        }
        return hrefs;
        // return Boolean(await this.page.$(".badge-style-type-live-now"));
    }

    async stop() {
        await this.browser.close();
    }
}
