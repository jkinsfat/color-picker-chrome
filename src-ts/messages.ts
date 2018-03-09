export class Message {
    constructor(readonly message:string) {}
}

export class QuoteMessage {
    constructor(
        readonly quote: string,
        readonly source: string,
        readonly accessDate: Date
    ) {}
}