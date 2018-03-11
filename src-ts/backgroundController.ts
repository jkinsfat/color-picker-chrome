import { Messages, Message } from "./message";
import { iModel } from "./model";
import { Quote } from "./quote";

export interface iBackgroundController {
    handleRequest(request: Message, sendResponse: (response: any) => void): boolean
    getAndStoreCurrentlySelectedQuote(): void
    messageCurrentActiveTab(message: Message, responseCallback: (response: any) => void): void
}

export class BackgroundController {
    constructor(private model: iModel) {
        chrome.runtime.onMessage.addListener((
            request: Message,
            sender: chrome.runtime.MessageSender, 
            sendResponse: (response: any) => void
        ): boolean => {
            this.handleRequest(request, sendResponse);
            return true;
        });
    }

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

    getAndStoreCurrentlySelectedQuote = (): void => {
        let message = new Message(Messages.record, []);
        let callback = (quote: Quote) => {
            this.model.put(quote, undefined);
        }
        this.messageCurrentActiveTab(message, callback);
    }

    messageCurrentActiveTab = (message: Message, responseCallback: (response: any) => void): void => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id!, message, responseCallback);
        });
    }
}