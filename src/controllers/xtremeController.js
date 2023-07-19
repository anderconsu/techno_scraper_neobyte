import XtremScraper from "../scraper/xtremescraper.js";
import XtremParser from "../parser/xtremeParser.js";

class xtremeController{
    constructor (){
        this.scraper = new XtremScraper();
        this.parser = null;
    }

    init = async () => {
        await this.scraper.init();
    }

    getData = async (query) => {
        const content = await this.scraper.scrap(query);
        this.parser = new XtremParser(content);
        const cards = this.parser.getCardsArray();
        this.close();
        return cards;
    }
    close = async () => {
        await this.scraper.close();
    }
}

export default xtremeController;