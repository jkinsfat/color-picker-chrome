import { PopupView, iPopupView } from "./popupView";
import { Message } from "./message";

let popupView: iPopupView = new PopupView(document);

window.onload = function() {
    popupView.refresh();
}

chrome.runtime.onMessage.addListener(
    function(
        request: Message,
        sender: chrome.runtime.MessageSender, 
        sendResponse: ((response: any) => void) | undefined
    ): void {
        popupView.handleRequest(request);
    }
);


