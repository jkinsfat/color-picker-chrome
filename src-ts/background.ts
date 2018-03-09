import { Quote } from "./quote";
import { Model, QuoteModel } from './model';
function genericOnClick(info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
}

let model: Model = new QuoteModel(chrome.storage.sync);

function getCurrentlySelectedQuote(callback: (quote: Quote) => void): void {
    let message = 'record_selection';
    messageCurrentActiveTab(message, callback);
}

function messageCurrentActiveTab(message: string, responseCallback: (response: any) => void): void {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id!, message, responseCallback);
    });
}

let recordSelection = chrome.contextMenus.create(
    {"title": "Record Quote", "contexts": ["selection"], "onclick": genericOnClick});

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       if (request.greeting == "hello") {
//         sendResponse({farewell: "goodbye"});
//       }
//     });


