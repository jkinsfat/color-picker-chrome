// alert('hello')
import { Quote} from "./messages";


chrome.runtime.onMessage.addListener(
    function(
        request: string,
        sender: chrome.runtime.MessageSender, 
        sendResponse: (response: any) => void
    ): void {
        if (request === 'record_selection') {
            let response: Quote = getCurrentSelectionInfo();
            sendResponse(response);
        }

    }
)

function getCurrentSelectionInfo(): Quote {
    return new Quote(
        window.getSelection().toString(),
        location.href,
        new Date
    );
}

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
// });

