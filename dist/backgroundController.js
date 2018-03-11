"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = require("./message");
var BackgroundController = /** @class */ (function () {
    function BackgroundController(model) {
        var _this = this;
        this.model = model;
        this.handleRequest = function (request, sendResponse) {
            if (request.message === message_1.Messages.refreshData) {
                _this.model.getAll(sendResponse);
            }
            else if (request.message === message_1.Messages.deleteDatum) {
                _this.model.removeFirstWithValueAt(request.payload[0], request.payload[1], sendResponse);
            }
            else {
                return false;
            }
            return true;
        };
        this.getAndStoreCurrentlySelectedQuote = function () {
            var message = new message_1.Message(message_1.Messages.record, []);
            var callback = function (quote) {
                _this.model.put(quote, undefined);
            };
            _this.messageCurrentActiveTab(message, callback);
        };
        this.messageCurrentActiveTab = function (message, responseCallback) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, message, responseCallback);
            });
        };
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            _this.handleRequest(request, sendResponse);
            return true;
        });
    }
    return BackgroundController;
}());
exports.BackgroundController = BackgroundController;
//# sourceMappingURL=backgroundController.js.map