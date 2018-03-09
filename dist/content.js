"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// alert('hello')
var messages_1 = require("./messages");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("received back message: " + request);
    if (request == 'record_selection') {
        var response = new messages_1.QuoteMessage("myQuote", "url", new Date());
        console.log("sending response");
        sendResponse(response);
    }
});
// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
//# sourceMappingURL=content.js.map