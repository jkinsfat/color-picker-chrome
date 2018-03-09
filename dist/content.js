"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// alert('hello')
var messages_1 = require("./messages");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request === 'record_selection') {
        var response = getCurrentSelectionInfo();
        sendResponse(response);
    }
});
function getCurrentSelectionInfo() {
    return new messages_1.QuoteMessage(window.getSelection().toString(), location.href, new Date);
}
// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
// });
//# sourceMappingURL=content.js.map