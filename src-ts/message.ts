export class Message {
    constructor(readonly message: string, readonly payload: Array<any>) {}
}

export enum Messages {
    record = 'record_selection',
    newData = 'popup_data',
    refreshData = 'refresh_data'
}