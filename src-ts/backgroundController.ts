import { Messages, Message } from "./message";
import { iModel } from "./model";
import { Quote } from "./quote";

export class BackgroundController {
    constructor(private model: iModel) {}

    handleRequest = (request: Message, sendResponse: (response: any) => void): boolean => {
        if (request.message === Messages.refreshData) {
            this.model.getAll(sendResponse);
        } else if (request.message === Messages.deleteDatum) {
            this.model.removeFirstWithValueAt(request.payload[0], request.payload[1], sendResponse);
        } else {
            return false;
        }
        return true;
    }

    getCurrentlySelectedQuote = (callback: (quote: Quote) => void): void {
        let message = new Message(Messages.record, []);
        messageCurrentActiveTab(message, callback);
    }

    messageCurrentActiveTab = (message: Message, responseCallback: (response: any) => void): void {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id!, message, responseCallback);
        });
    }
}