"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var popupView_1 = require("./popupView");
var popupView = new popupView_1.PopupView(document);
window.onload = function () {
    popupView.refresh();
};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    popupView.handleRequest(request);
});
//# sourceMappingURL=popup.js.map