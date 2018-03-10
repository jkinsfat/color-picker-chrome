import { Message, Messages } from "./message";
import { Quote } from "./quote";


export interface iPopupView {
    handleRequest(request: Message): void;
    refresh(): void;
    display(data: Array<any>): void;
}

// export class PopupView implements View {
// }

export class PopupView {
    private numDisplayed: number = 3;
    private currentIndexDisplayed: number = -1;

    constructor(readonly doc: Document) {}

    public handleRequest = (request: Message) => {
        if (request.message === Messages.newData) {
            this.display(request.payload);
        }
    }

    public refresh = () => {
        chrome.runtime.sendMessage(
            new Message(Messages.refreshData, []),
            this.display
        );
    }

    private display = (quotes: Array<Quote>) => {
        let fragment: DocumentFragment = this.doc.createDocumentFragment();
        for (let i = 0; i < quotes.length; i++) {
            let temp = this.createQuoteFrag(quotes[i]);
            fragment.appendChild(temp);
        }
        let quoteDiv: HTMLElement | null = this.doc.getElementById('my-quotes');
        quoteDiv!.appendChild(fragment);
    }

    //need to escape quote elements so they are not sensitive to HTML injection;
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

        quoteBodyP.innerHTML = quote.quote;
        sourceP.innerHTML = quote.source;
        dateP.innerHTML = quote.accessDate.toDateString();

        deleteQuoteButton.addEventListener('click', () => {
            this.delete(quote.accessDate.toDateString());
        });

        return outerEnvelope;
    }

    private delete = (date: string): void => {

    }
    //show quotes (most recent)
    //if more than numDisplayed show back button.

//update quotes
    //if more than numDisplayed show back button.


//deleteQuote
    // new Message(Messages.removeData, [quote])
    //chrome.runtime.sendMessage(Message);

//copy to clipboard?
}