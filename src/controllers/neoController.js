import NeoScraper from "../scraper/neoSraper.js";
import NeoParser from "../parser/neoParser.js";

class NeoController{
    constructor (headless = true){
        this.scraper = new NeoScraper(headless);
        this.parser = null;
    }

    init = async () => {
        await this.scraper.init();
    }

    getData = async (query) => {
        const content = await this.scraper.scrap(query);
        this.parser = new NeoParser(content);
        const cards = this.parser.getCardsArray();
        this.close();
        return cards;
    }
    close = async () => {
        await this.scraper.close();
    }
}

export default NeoController;