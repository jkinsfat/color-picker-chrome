"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var popupView_1 = require("./popupView");
var popupViewController_1 = require("./popupViewController");
var popupView = new popupView_1.QuotePopupView(document);
var popupController = new popupViewController_1.PopupViewController(popupView);
popupView.setController(popupController);
window.onload = function () {
    popupController.refreshViewData();
};
//# sourceMappingURL=popup.js.map