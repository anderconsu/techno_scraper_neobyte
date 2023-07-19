import XtremScraper from "../../src/scraper/xtremscraper.js";

describe("Scraper", () => {
    let scraper;
    beforeAll(async () => {
        scraper = new XtremScraper(false);
        await scraper.init();
    });
    afterAll(async () => {
        await scraper.close();
    });
    it("should return a string", async () => {
        let query = "iphone";
        const content = await scraper.scrap(query);
        expect(content).toContain("Xtremmedia");
    }, 30000);
});