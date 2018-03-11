export class Quote {
    constructor(
        readonly quote: string,
        readonly source: string,
        readonly accessDate: string,
        readonly fullDateTime: string
    ) {}
}