"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function genericOnClick(info, tab) {
//     console.log("item " + info.menuItemId + " was clicked");
//     console.log("info: " + JSON.stringify(info));
//     console.log("tab: " + JSON.stringify(tab));
// }
function alertContentToRecordSelection() {
    var message = 'record_selection';
    var callback = function (quoteInfo) {
        console.log(quoteInfo.quote);
    };
    chrome.runtime.sendMessage(message, callback);
}
console.log("back");
var recordSelection = chrome.contextMenus.create({ "title": "Record Quote", "onclick": alertContentToRecordSelection });
//# sourceMappingURL=background.js.map