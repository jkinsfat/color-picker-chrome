"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tabView_1 = require("./tabView");
var tabView = new tabView_1.TabView(window, location);
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    tabView.handleRequest(request, sendResponse);
    return true;
});
// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
// });
//# sourceMappingURL=content.js.map