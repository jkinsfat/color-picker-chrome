"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function genericOnClick(info, tab) {
//     console.log("item " + info.menuItemId + " was clicked");
//     console.log("info: " + JSON.stringify(info));
//     console.log("tab: " + JSON.stringify(tab));
// }
function getCurrentTabSelection() {
    var message = 'record_selection';
    var callback = function (quoteInfo) {
        console.log(quoteInfo.quote);
    };
    messageCurrentActiveTab(message, callback);
}
function messageCurrentActiveTab(message, responseCallback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, responseCallback);
    });
}
var recordSelection = chrome.contextMenus.create({ "title": "Record Quote", "contexts": ["selection"], "onclick": getCurrentTabSelection });
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