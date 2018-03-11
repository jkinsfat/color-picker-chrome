"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = require("./message");
var quote_1 = require("./quote");
var TabView = /** @class */ (function () {
    function TabView(window, loc) {
        this.window = window;
        this.loc = loc;
    }
    TabView.prototype.handleRequest = function (request, callback) {
        if (request.message === message_1.Messages.record) {
            var response = this.getCurrentSelectedQuote();
            console.log(request);
            callback(response);
        }
    };
    TabView.prototype.getCurrentSelectedQuote = function () {
        var now = new Date();
        return new quote_1.Quote(this.window.getSelection().toString(), this.loc.href, now.toDateString(), now.toISOString());
    };
    return TabView;
}());
exports.TabView = TabView;
//# sourceMappingURL=tabView.js.map