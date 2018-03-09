import { Quote } from "./quote";

export interface Model {
    put(item: any, callback: () => void | undefined): void;
    removeFirstWithValueAt(value: any, key: string, callback: () => void | undefined): void;
    getAll(callback: (items: Array<any>) => void): void;
    reset(): void;
}

export class QuoteModel implements Model {
    constructor(private model: chrome.storage.StorageArea) {}

    put(item: Quote, callback: () => void | undefined): void {
        this.model.get((storage): void => {
            if(storage.hasOwnProperty('quotes')) {
                storage.quotes.push(item);
            } else {
                storage['quotes'] = [item];
            }
            this.model.set(storage, callback);
        });
    }
    
    removeFirstWithValueAt(value: any, key: string, callback: (items: Array<Quote>) => void ): void {
        this.model.get((storage): void => {
            if(storage.hasOwnProperty('quotes')) {
                for (let quoteIndex in storage.quotes) {
                    if (storage.quotes[quoteIndex][key] === value) {
                        storage.quotes.splice(quoteIndex, 1);
                        this.model.set(storage);
                        return;
                    } 
                }
            } else {
                //some kind of error, right?
                return; 
            }
        });
    }

    getAll(callback: (items: Array<Quote>) => void): void {
        this.model.get(function(storage): void {
            if(storage.hasOwnProperty('quotes')) {
                callback(storage.quotes);
            } else {
                callback([]);
            }
        });
    }
    reset(): void {
        this.model.set({});
    }
}