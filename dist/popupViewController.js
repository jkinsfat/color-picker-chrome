"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = require("./message");
var PopupViewController = /** @class */ (function () {
    function PopupViewController(view) {
        var _this = this;
        this.view = view;
        this.handleRequest = function (request) {
            if (request.message === message_1.Messages.newData) {
                _this.view.display(request.payload);
            }
        };
        this.refreshViewData = function () {
            chrome.runtime.sendMessage(new message_1.Message(message_1.Messages.refreshData, []), _this.view.display);
        };
        this.deleteDatumWithValue = function (value) {
            chrome.runtime.sendMessage(new message_1.Message(message_1.Messages.deleteDatum, [value, "fullDateTime"]), function (data) {
                console.log("just deleted now refreshing?");
                _this.refreshViewData();
            });
        };
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            _this.handleRequest(request);
        });
    }
    return PopupViewController;
}());
exports.PopupViewController = PopupViewController;
//# sourceMappingURL=popupViewController.js.map