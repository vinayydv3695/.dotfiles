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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const DokiThemeDefinitions_1 = __importDefault(require("./DokiThemeDefinitions"));
const VSCodeGlobals_1 = require("./VSCodeGlobals");
const showNonOp = () => vscode.window
    .showInformationMessage(`This feature does not work on the web version of VSCode 🥲`, { title: "That does not work." });
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.remove.sticker", () => showNonOp()));
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.doki.changelog", () => showNonOp()));
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.remove.watermark", () => showNonOp()));
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.restore.assets", () => showNonOp()));
    VSCodeGlobals_1.VSCodeGlobals.globalState = context.globalState;
    DokiThemeDefinitions_1.default.map((dokiThemeDefinition) => dokiThemeDefinition.extensionNames.map((extensionCommand) => ({
        extensionCommand,
        dokiThemeDefinition,
    })))
        .reduce((accum, next) => accum.concat(next), [])
        .map(({ extensionCommand }) => vscode.commands.registerCommand(extensionCommand, () => {
        showNonOp();
    }))
        .forEach((disposableHero) => context.subscriptions.push(disposableHero));
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=web-extension.js.map