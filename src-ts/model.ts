import { Quote } from "./quote";

export interface Model {
    put(item: any, callback?: () => void): void;
    removeFirstWithValueAt(value: any, key: string, callback?: () => void ): void;
    getAll(callback: (items: Array<any>) => void): void;
    reset(): void;
}

export class QuoteModel implements Model {
    constructor(private store: chrome.storage.StorageArea) {}

    put(item: Quote, callback?: () => void): void {
        this.store.get((storage): void => {
            if(storage.hasOwnProperty('quotes')) {
                storage.quotes.push(item);
            } else {
                storage['quotes'] = [item];
            }
            this.store.set(storage, callback);
        });
    }
    
    removeFirstWithValueAt(value: any, key: string, callback?: (items: Array<Quote>) => void ): void {
        this.store.get((storage): void => {
            let data: Array<any> = [];
            if(storage.hasOwnProperty('quotes')) {
                for (let quoteIndex in storage.quotes) {
                    if (storage.quotes[quoteIndex][key] === value) {
                        storage.quotes.splice(quoteIndex, 1);
                        this.store.set(storage);
                        return;
                    } 
                }
                data = storage['quotes']
            } 
            if (callback) {
                callback(data);
            }       
        });
    }

    getAll(callback: (items: Array<Quote>) => void): void {
        this.store.get(function(storage): void {
            if(storage.hasOwnProperty('quotes')) {
                console.log(storage.quotes);
                console.log(callback);
                callback(storage.quotes);
            } else {
                callback([]);
            }
        });
    }

    reset(): void {
        this.store.set({});
    }
}