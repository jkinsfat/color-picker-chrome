"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuoteModel = /** @class */ (function () {
    function QuoteModel(model) {
        this.model = model;
        this.subscribers = [];
    }
    QuoteModel.prototype.put = function (item, callback) {
        var _this = this;
        console.log("putting quote");
        this.model.get(function (storage) {
            if (storage.hasOwnProperty('quotes')) {
                storage.quotes.push(item);
            }
            else {
                storage['quotes'] = [item];
            }
            _this.model.set(storage, callback);
        });
    };
    QuoteModel.prototype.removeFirstWithValueAt = function (value, key, callback) {
        var _this = this;
        this.model.get(function (storage) {
            if (storage.hasOwnProperty('quotes')) {
                for (var quoteIndex in storage.quotes) {
                    if (storage.quotes[quoteIndex][key] === value) {
                        storage.quotes.splice(quoteIndex, 1);
                        _this.model.set(storage);
                        return;
                    }
                }
            }
            else {
                //some kind of error, right?
                return;
            }
        });
    };
    QuoteModel.prototype.getAll = function (callback) {
        this.model.get(function (storage) {
            if (storage.hasOwnProperty('quotes')) {
                console.log(storage.quotes);
                console.log(callback);
                callback(storage.quotes);
            }
            else {
                callback([]);
            }
        });
    };
    QuoteModel.prototype.reset = function () {
        this.model.set({});
    };
    QuoteModel.prototype.register = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    QuoteModel.prototype.notifyAll = function () {
        var _this = this;
        var thenNotifyAll = function (items) {
            _this.subscribers.forEach(function (subscriber) {
                subscriber.update(items);
            });
        };
        this.getAll(thenNotifyAll);
    };
    return QuoteModel;
}());
exports.QuoteModel = QuoteModel;
//# sourceMappingURL=model.js.map