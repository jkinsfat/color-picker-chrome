import { Message, Messages } from "./message";
import { Quote } from "./quote";

export interface iTabView {
    handleRequest(request: Message, callback: (quote: any) => void): void;
    getCurrentSelectedQuote(): Quote;
}

export class TabView {
    constructor(readonly window: Window, readonly loc: Location) {}

    handleRequest(request: Message, callback: (quote: any) => void): void {
        if (request.message === Messages.record) {
            let response = this.getCurrentSelectedQuote();
            callback(response);
        }
    }

    getCurrentSelectedQuote(): Quote {
        return new Quote(
            this.window.getSelection().toString(),
            this.loc.href,
            new Date
        );
    }
}
