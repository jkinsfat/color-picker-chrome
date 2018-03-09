"use strict";
// alert('hello')
console.log("what is this day");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request == 'record_selection') {
        console.log("hello");
    }
});
//# sourceMappingURL=content.js.map