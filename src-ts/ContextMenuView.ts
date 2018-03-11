import { iBackgroundController } from "./backgroundController";

export interface iContextMenuView {
    onClick(info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab): void
}

export class SelectQuoteCMV implements iContextMenuView {
    private controller: iBackgroundController
    constructor(controller: iBackgroundController) {
        this.controller = controller;
        chrome.contextMenus.create(
            {"title": "Record Quote", "contexts": ["selection"], "onclick": this.onClick});   
    }

    onClick = (info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) => {
        this.controller.getAndStoreCurrentlySelectedQuote();
    }
}