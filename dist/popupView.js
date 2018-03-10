"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = require("./message");
// export class PopupView implements View {
// }
var PopupView = /** @class */ (function () {
    function PopupView(doc) {
        var _this = this;
        this.doc = doc;
        this.numDisplayed = 3;
        this.currentIndexDisplayed = -1;
        this.handleRequest = function (request) {
            if (request.message === message_1.Messages.newData) {
                _this.display(request.payload);
            }
        };
        this.refresh = function () {
            chrome.runtime.sendMessage(new message_1.Message(message_1.Messages.refreshData, []), _this.display);
        };
        this.display = function (quotes) {
            var fragment = _this.doc.createDocumentFragment();
            for (var i = 0; i < quotes.length; i++) {
                var temp = _this.doc.createElement('li');
                temp.innerHTML = quotes[i].quote;
                fragment.appendChild(temp);
            }
            var quoteDiv = _this.doc.getElementById('my-quotes');
            quoteDiv.appendChild(fragment);
        };
    }
    return PopupView;
}());
exports.PopupView = PopupView;
//# sourceMappingURL=popupView.js.map