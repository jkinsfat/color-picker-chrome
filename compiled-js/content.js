"use strict";
// alert('hello')
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request == 'record_selection') {
        console.log("hello");
    }
});
//# sourceMappingURL=content.js.map