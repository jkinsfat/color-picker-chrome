import { Quote } from "./quote";
import { iPopupViewController } from "./popupViewController";


export interface iPopupView {
    display(data: Array<any>): void;
    setController(controller: iPopupViewController): void;
}

//Must add a controller to enable delete functionality
export class QuotePopupView {
    private controller: iPopupViewController;

    constructor(readonly doc: Document) {}

    public display = (quotes: Array<Quote>) => {
        let quoteDiv: HTMLElement | null = this.doc.getElementById('my-quotes');
        quoteDiv!.innerHTML = "";

        if (quotes.length > 0) {
            let fragment: DocumentFragment = this.doc.createDocumentFragment();
            for (let i = 0; i < quotes.length; i++) {
                let temp = this.createQuoteFrag(quotes[i]);
                fragment.appendChild(temp);
            }
            
            quoteDiv!.appendChild(fragment);
        } else {
            let noQuotes: HTMLLIElement = this.doc.createElement('li');
            noQuotes.appendChild(this.doc.createTextNode('No Quotes Saved'));
            quoteDiv!.appendChild(noQuotes);
        }
    }

    public setController(controller: iPopupViewController) {
        this.controller = controller;
    }

    //Creates HTML structure to display a single quote
    private createQuoteFrag = (quote: Quote): HTMLLIElement => {
        let outerEnvelope: HTMLLIElement = this.doc.createElement('li'),
            quoteBodyDiv: HTMLDivElement = this.doc.createElement('div'),
            quoteBodyP: HTMLParagraphElement = this.doc.createElement('p'),
            sourceDiv: HTMLElement = this.doc.createElement('cite'),
            sourceP: HTMLParagraphElement = this.doc.createElement('p'),
            dateDiv: HTMLDivElement = this.doc.createElement('div'),
            dateP: HTMLParagraphElement = this.doc.createElement('p'),
            deleteQuoteButton: HTMLButtonElement = this.doc.createElement('button');
        
        outerEnvelope.appendChild(quoteBodyDiv);
        outerEnvelope.appendChild(sourceDiv);
        outerEnvelope.appendChild(dateDiv);

        quoteBodyDiv.appendChild(quoteBodyP);
        sourceDiv.appendChild(sourceP);
        dateDiv.appendChild(dateP);
        dateDiv.appendChild(deleteQuoteButton);

        quoteBodyP.appendChild(this.doc.createTextNode(quote.quote));
        sourceP.appendChild(this.doc.createTextNode(quote.source));
        dateP.appendChild(this.doc.createTextNode(quote.accessDate));

        deleteQuoteButton.appendChild(this.doc.createTextNode('Delete'));
        deleteQuoteButton.addEventListener('click', () => {
            //use ISODateTime to uniquely identify quote to delete
            this.controller.deleteDatumWithValue(quote.fullDateTime);
        });

        return outerEnvelope;
    }
    
}