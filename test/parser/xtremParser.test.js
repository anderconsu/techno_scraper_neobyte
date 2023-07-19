import XtremParser from "../../src/parser/xtremParser.js";
import fs from "fs";

describe("Parser", () => {
    let parser;
    let html;
    beforeAll(async () => {
        html = fs.readFileSync("./test/xtremTest.html", "utf8");
        parser = new XtremParser(html);
    });
    it("should return all card containers", async () => {
        const cards = parser.getCards();
        expect(cards.length).toBeGreaterThanOrEqual(4);
    });
    it("should return the title of a card", async () => {
        const cards = parser.getCards();
        const title = parser.getTitle(cards[1]);
        expect(title).toBe("");
    });
    it("should return the price of a card", async () => {
        const cards = parser.getCards();
        const price = parser.getPrice(cards[1]);
        expect(price).toBe("");
    });
    it("should return the image of a card", async () => {
        const cards = parser.getCards();
        const image = parser.getImage(cards[1]);
        expect(image).toBe("");
    });
    it("should return the url of a card", async () => {
        const cards = parser.getCards();
        const url = parser.getUrl(cards[1]);
        expect(url).toContain("https://xtremmedia.com/");
    });
    it("should return a card", async () => {
        const cards = parser.getCards();
        const card = parser.getCard(cards[1]);
        expect(card).toHaveProperty("title");
        expect(card).toHaveProperty("price");
        expect(card).toHaveProperty("image");
        expect(card).toHaveProperty("url");
        expect(card.price).toBe("");
    });
    it("should return an array of cards", async () => {
        const cards = parser.getCardsArray();
        expect(cards.length).toBeGreaterThanOrEqual(2);
    });
});
    