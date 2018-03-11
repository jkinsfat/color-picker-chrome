"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuoteModel = /** @class */ (function () {
    function QuoteModel(store) {
        this.store = store;
    }
    QuoteModel.prototype.put = function (item, callback) {
        var _this = this;
        if (item) {
            this.store.get(function (storage) {
                if (storage.hasOwnProperty('quotes')) {
                    storage.quotes.push(item);
                }
                else {
                    storage['quotes'] = [item];
                }
                _this.store.set(storage, callback);
            });
        }
    };
    QuoteModel.prototype.removeFirstWithValueAt = function (value, key, callback) {
        var _this = this;
        this.store.get(function (storage) {
            var removedDatum = null;
            if (storage.hasOwnProperty('quotes')) {
                for (var quoteIndex in storage.quotes) {
                    if (storage.quotes[quoteIndex][key] === value) {
                        removedDatum = storage.quotes[quoteIndex];
                        storage.quotes.splice(quoteIndex, 1);
                        _this.store.set(storage);
                    }
                }
            }
            if (callback) {
                callback(removedDatum);
            }
        });
    };
    QuoteModel.prototype.getAll = function (callback) {
        this.store.get(function (storage) {
            if (storage.hasOwnProperty('quotes')) {
                callback(storage.quotes);
            }
            else {
                callback([]);
            }
        });
    };
    QuoteModel.prototype.reset = function () {
        this.store.set({ 'quotes': [] });
    };
    return QuoteModel;
}());
exports.QuoteModel = QuoteModel;
//# sourceMappingURL=model.js.map