"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attemptToNotifyUpdates = void 0;
const vscode = __importStar(require("vscode"));
const VSCodeGlobals_1 = require("./VSCodeGlobals");
const WelcomeService_1 = require("./WelcomeService");
const SAVED_VERSION = "doki.theme.version";
const DOKI_THEME_VERSION = "v88.5-1.6.1";
function attemptToNotifyUpdates(context) {
    const savedVersion = VSCodeGlobals_1.VSCodeGlobals.globalState.get(SAVED_VERSION);
    if (savedVersion && savedVersion !== DOKI_THEME_VERSION) {
        VSCodeGlobals_1.VSCodeGlobals.globalState.update(SAVED_VERSION, DOKI_THEME_VERSION);
        vscode.window
            .showInformationMessage(`Doki Theme updated to ${DOKI_THEME_VERSION}. 
            Use "Doki Theme Changelog" command for more info.`, { title: "Show Changelog" })
            .then((item) => {
            if (item) {
                vscode.commands.executeCommand("doki-theme.doki.changelog");
            }
        });
    }
    else if (!savedVersion) {
        VSCodeGlobals_1.VSCodeGlobals.globalState.update(SAVED_VERSION, DOKI_THEME_VERSION);
        WelcomeService_1.attemptToGreetUser(context);
    }
}
exports.attemptToNotifyUpdates = attemptToNotifyUpdates;
//# sourceMappingURL=NotificationService.js.map