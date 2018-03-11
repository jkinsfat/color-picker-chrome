"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message(message, payload) {
        this.message = message;
        this.payload = payload;
    }
    return Message;
}());
exports.Message = Message;
var Messages;
(function (Messages) {
    Messages["record"] = "record_selection";
    Messages["newData"] = "popup_data";
    Messages["refreshData"] = "refresh_data";
    Messages["deleteDatum"] = "delete_datum";
})(Messages = exports.Messages || (exports.Messages = {}));
//# sourceMappingURL=message.js.map