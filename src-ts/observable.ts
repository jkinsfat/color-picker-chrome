
export interface iObserver {
    update(publication: Array<any>): void;
}

export interface iObservable {
    register(subscriber: iObserver): void;
    notifyAll(): void;
}