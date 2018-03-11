import { QuotePopupView, iPopupView } from "./popupView";
import { Message } from "./message";
import { iPopupViewController, PopupViewController } from "./popupViewController";

let popupView: iPopupView = new QuotePopupView(document);
let popupController: iPopupViewController = new PopupViewController(popupView);
popupView.setController(popupController);

window.onload = function() {
    popupController.refreshViewData();
}


