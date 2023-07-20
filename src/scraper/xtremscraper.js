import puppeteer from "puppeteer";

class XtremScraper{
    constructor(headless = true){
        this.browser = null;
        this.page = null;
        this.headless = headless;
        this.baseURL = new URL("https://www.neobyte.es/buscador");
    }
    
    init = async () => {
        this.browser = await puppeteer.launch({headless: this.headless});
        this.page = await this.browser.newPage();
    }
    close = async () => {
        await this.browser.close();
    }
    scrap = async (query) => {
        this.baseURL.searchParams.set("s", query);
        const url = this.baseURL.toString();
        await this.page.goto(url);
        const content = await this.page.content();
        await new Promise(resolve => setTimeout(resolve, 5000));
        return content;
    }
    

}

export default XtremScraper;