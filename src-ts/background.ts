import { Quote } from "./quote";
import { Model, QuoteModel } from './model';
import { Message, Messages } from './message';

let model: Model = new QuoteModel(chrome.storage.sync);

chrome.runtime.onMessage.addListener((
    request: Message,
    sender: chrome.runtime.MessageSender, 
    sendResponse: (response: any) => void
): boolean => {
    if (request.message === Messages.refreshData) {
        model.getAll(sendResponse);
        return true;
    }
    return false;
});

function ContextMenuOnClick(info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) {
    let callback = (quote: Quote) => {
        model.put(quote, undefined);
    }
    getCurrentlySelectedQuote(callback);
}

function getCurrentlySelectedQuote(callback: (quote: Quote) => void): void {
    let message = new Message(Messages.record, []);
    messageCurrentActiveTab(message, callback);
}

function messageCurrentActiveTab(message: Message, responseCallback: (response: any) => void): void {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id!, message, responseCallback);
    });
}

let recordSelection = chrome.contextMenus.create(
    {"title": "Record Quote", "contexts": ["selection"], "onclick": ContextMenuOnClick});

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       if (request.greeting == "hello") {
//         sendResponse({farewell: "goodbye"});
//       }
//     });


