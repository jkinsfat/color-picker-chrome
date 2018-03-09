import { Message, QuoteMessage } from "./messages";
// function genericOnClick(info, tab) {
//     console.log("item " + info.menuItemId + " was clicked");
//     console.log("info: " + JSON.stringify(info));
//     console.log("tab: " + JSON.stringify(tab));
// }
  
function alertContentToRecordSelection() {
    let message = 'record_selection';
    let callback: Function = function(quoteInfo: QuoteMessage) {
        console.log(quoteInfo.quote);
    }
    chrome.runtime.sendMessage(message, callback);
}

let recordSelection = chrome.contextMenus.create(
    {"title": "Record Quote", "onclick": alertContentToRecordSelection});