import XtremScraper from "../scraper/xtremscraper.js";
import XtremParser from "../parser/xtremParser.js";
import fs from "fs";

class XtremController{
    constructor (headless = true){
        this.scraper = new XtremScraper(headless);
        this.parser = null;
    }

    init = async () => {
        await this.scraper.init();
    }

    getData = async (query) => {
        const content = await this.scraper.scrap(query);
        fs.writeFileSync("./src/scraper/content.txt", content);
        this.parser = new XtremParser(content);
        const cards = this.parser.getCardsArray();
        this.close();
        return cards;
    }
    close = async () => {
        await this.scraper.close();
    }
}

export default XtremController;