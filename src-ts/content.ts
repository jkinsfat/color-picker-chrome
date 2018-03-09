// alert('hello')
import { QuoteMessage } from "./messages";


chrome.runtime.onMessage.addListener(
    function(
        request: string,
        sender: chrome.runtime.MessageSender, 
        sendResponse: (response: any) => void
    ): void {
        console.log("received back message: " + request);
        if (request == 'record_selection') {
            let response: QuoteMessage = new QuoteMessage(
                "myQuote",
                "url",
                new Date()
            );
            console.log("sending response");
            sendResponse(response);
        }

    }
)

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });

