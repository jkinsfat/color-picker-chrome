"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var message_1 = require("./message");
var model = new model_1.QuoteModel(chrome.storage.sync);
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === message_1.Messages.refreshData) {
        model.getAll(sendResponse);
        return true;
    }
    return false;
});
function ContextMenuOnClick(info, tab) {
    var callback = function (quote) {
        model.put(quote, undefined);
    };
    getCurrentlySelectedQuote(callback);
}
function getCurrentlySelectedQuote(callback) {
    var message = new message_1.Message(message_1.Messages.record, []);
    messageCurrentActiveTab(message, callback);
}
function messageCurrentActiveTab(message, responseCallback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, responseCallback);
    });
}
var recordSelection = chrome.contextMenus.create({ "title": "Record Quote", "contexts": ["selection"], "onclick": ContextMenuOnClick });
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       if (request.greeting == "hello") {
//         sendResponse({farewell: "goodbye"});
//       }
//     });
//# sourceMappingURL=background.js.map