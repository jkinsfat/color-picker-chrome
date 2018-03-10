// alert('hello')
import { Quote } from "./quote";
import { Message, Messages } from "./message";
import { TabView, iTabView } from "./tabView";

let tabView: iTabView = new TabView(window, location);

chrome.runtime.onMessage.addListener(
    function(
        request: Message,
        sender: chrome.runtime.MessageSender, 
        sendResponse: (response: any) => void
    ): boolean {
        tabView.handleRequest(request, sendResponse);
        return true;
    }
);

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
// });

