import { iModel, QuoteModel } from './model';
import { iBackgroundController, BackgroundController } from "./backgroundController";
import { SelectQuoteCMV, iContextMenuView } from "./ContextMenuView";

let model: iModel = new QuoteModel(chrome.storage.sync);
let backgroundController: iBackgroundController = new BackgroundController(model);
console.log(backgroundController);
let quoteSelectCMV: iContextMenuView = new SelectQuoteCMV(backgroundController);


