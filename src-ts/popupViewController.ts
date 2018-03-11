import { Message, Messages } from "./message";
import { iPopupView } from "./popupView";

export interface iPopupViewController {
    handleRequest(request: Message): void;
    refreshViewData(): void;
    deleteDatumWithValue(datum: string): void;
}

export class PopupViewController {
    constructor(private view: iPopupView) {
        chrome.runtime.onMessage.addListener((
            request: Message,
            sender: chrome.runtime.MessageSender, 
            sendResponse: ((response: any) => void) | undefined
        ): void =>  {
            this.handleRequest(request);
        });
    }

    public handleRequest = (request: Message) => {
        if (request.message === Messages.newData) {
            this.view.display(request.payload);
        }
    }

    public refreshViewData = () => {
        chrome.runtime.sendMessage(
            new Message(Messages.refreshData, []),
            this.view.display
        );
    }
    
    public deleteDatumWithValue = (value: string): void => {
        chrome.runtime.sendMessage(
            new Message(Messages.deleteDatum, [value, "fullDateTime"]), 
            (data: any) => { 
                console.log("just deleted now refreshing?");
                this.refreshViewData();
            }
        );
    }
}