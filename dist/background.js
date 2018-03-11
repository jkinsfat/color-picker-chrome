"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var backgroundController_1 = require("./backgroundController");
var ContextMenuView_1 = require("./ContextMenuView");
var model = new model_1.QuoteModel(chrome.storage.sync);
var backgroundController = new backgroundController_1.BackgroundController(model);
console.log(backgroundController);
var quoteSelectCMV = new ContextMenuView_1.SelectQuoteCMV(backgroundController);
//# sourceMappingURL=background.js.map