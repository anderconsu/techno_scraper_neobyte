import {JSDOM} from 'jsdom';

class XtremParser {
    constructor(html) {
        this.html = html;
        this.dom = new JSDOM(this.html);
    }
    getCards = () => {
        return this.dom.window.document.querySelectorAll("x-grid-list__item");
    }
    getTitle = (card) => {
        return card.querySelector("x-mot-result").textContent.trim();
    }
    getPrice = (card) => {
        return card.querySelector("x-mot-result-price_").textContent.trim();
    }
    getImage = (card) => {
        return card.querySelector("x-result-picture-image").getAttribute("src");
    }
    getUrl = (card) => {
        return card.querySelector("x-result-link").getAttribute("href");
    }
    getCard = (card) => {
        return {
            title: this.getTitle(card),
            price: this.getPrice(card),
            image: this.getImage(card),
            url: this.getUrl(card)
        };
    }
    
    getCardsArray = () => {
        const cards = this.getCards();
        const cardsArray = [];
        for(let card of cards){
            try{
                cardsArray.push(this.getCard(card));
            }
            catch(e){
                console.log(e);
            }
        }
        return cardsArray;
    }


}

export default XtremParser;