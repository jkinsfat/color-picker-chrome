// alert('hello')

chrome.runtime.onMessage.addListener(
    function(
        request: string,
        sender: chrome.runtime.MessageSender, 
        sendResponse: (response: any) => void
    ): void {
        if (request == 'record_selection') {
            console.log("hello");
        }
    }
)