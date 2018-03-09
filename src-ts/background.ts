import { Message, QuoteMessage } from "./messages";
// function genericOnClick(info, tab) {
//     console.log("item " + info.menuItemId + " was clicked");
//     console.log("info: " + JSON.stringify(info));
//     console.log("tab: " + JSON.stringify(tab));
// }
  
function alertContentToRecordSelection() {
    let message = 'record_selection';

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs)
        chrome.tabs.sendMessage(tabs[0].id!, message, function(quoteInfo: QuoteMessage) {
            console.log("received a response");
            console.log(quoteInfo.quote);;
        });
    });
}

let recordSelection = chrome.contextMenus.create(
    {"title": "Record Quote", "onclick": alertContentToRecordSelection});

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       if (request.greeting == "hello") {
//         sendResponse({farewell: "goodbye"});
//       }
//     });


