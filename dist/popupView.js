"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Must add a controller to enable delete functionality
var QuotePopupView = /** @class */ (function () {
    function QuotePopupView(doc) {
        var _this = this;
        this.doc = doc;
        this.display = function (quotes) {
            var quoteDiv = _this.doc.getElementById('my-quotes');
            quoteDiv.innerHTML = "";
            if (quotes.length > 0) {
                var fragment = _this.doc.createDocumentFragment();
                for (var i = 0; i < quotes.length; i++) {
                    var temp = _this.createQuoteFrag(quotes[i]);
                    fragment.appendChild(temp);
                }
                quoteDiv.appendChild(fragment);
            }
            else {
                var noQuotes = _this.doc.createElement('li');
                noQuotes.appendChild(_this.doc.createTextNode('No Quotes Saved'));
                quoteDiv.appendChild(noQuotes);
            }
        };
        //Creates HTML structure to display a single quote
        this.createQuoteFrag = function (quote) {
            var outerEnvelope = _this.doc.createElement('li'), quoteBodyDiv = _this.doc.createElement('div'), quoteBodyP = _this.doc.createElement('p'), sourceDiv = _this.doc.createElement('cite'), sourceP = _this.doc.createElement('p'), dateDiv = _this.doc.createElement('div'), dateP = _this.doc.createElement('p'), deleteQuoteButton = _this.doc.createElement('button');
            outerEnvelope.appendChild(quoteBodyDiv);
            outerEnvelope.appendChild(sourceDiv);
            outerEnvelope.appendChild(dateDiv);
            quoteBodyDiv.appendChild(quoteBodyP);
            sourceDiv.appendChild(sourceP);
            dateDiv.appendChild(dateP);
            dateDiv.appendChild(deleteQuoteButton);
            quoteBodyP.appendChild(_this.doc.createTextNode(quote.quote));
            sourceP.appendChild(_this.doc.createTextNode(quote.source));
            dateP.appendChild(_this.doc.createTextNode(quote.accessDate));
            deleteQuoteButton.appendChild(_this.doc.createTextNode('Delete'));
            deleteQuoteButton.addEventListener('click', function () {
                //use ISODateTime to uniquely identify quote to delete
                _this.controller.deleteDatumWithValue(quote.fullDateTime);
            });
            return outerEnvelope;
        };
    }
    QuotePopupView.prototype.setController = function (controller) {
        this.controller = controller;
    };
    return QuotePopupView;
}());
exports.QuotePopupView = QuotePopupView;
//# sourceMappingURL=popupView.js.map