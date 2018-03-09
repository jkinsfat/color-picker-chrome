"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message(message) {
        this.message = message;
    }
    return Message;
}());
exports.Message = Message;
var QuoteMessage = /** @class */ (function () {
    function QuoteMessage(quote, source, accessDate) {
        this.quote = quote;
        this.source = source;
        this.accessDate = accessDate;
    }
    return QuoteMessage;
}());
exports.QuoteMessage = QuoteMessage;
//# sourceMappingURL=messages.js.map