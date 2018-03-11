"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SelectQuoteCMV = /** @class */ (function () {
    function SelectQuoteCMV(controller) {
        var _this = this;
        this.onClick = function (info, tab) {
            _this.controller.getAndStoreCurrentlySelectedQuote();
        };
        this.controller = controller;
        chrome.contextMenus.create({ "title": "Record Quote", "contexts": ["selection"], "onclick": this.onClick });
    }
    return SelectQuoteCMV;
}());
exports.SelectQuoteCMV = SelectQuoteCMV;
//# sourceMappingURL=ContextMenuView.js.map