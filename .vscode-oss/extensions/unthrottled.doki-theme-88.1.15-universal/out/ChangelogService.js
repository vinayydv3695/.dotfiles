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
exports.getWebviewIcon = exports.buildWebviewHtml = exports.showChanglog = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const ChangelogHtml_1 = __importDefault(require("./ChangelogHtml"));
const ThemeManager_1 = require("./ThemeManager");
const ENV_1 = require("./ENV");
function showChanglog(context) {
    const welcomPanel = vscode.window.createWebviewPanel('dokiChangeLog', 'Doki Theme Changelog', vscode.ViewColumn.Active, {});
    welcomPanel.iconPath = getWebviewIcon(context);
    welcomPanel.webview.html = buildWebviewHtml(ChangelogHtml_1.default);
}
exports.showChanglog = showChanglog;
function buildWebviewHtml(content) {
    const { sticker } = ThemeManager_1.getCurrentThemeAndSticker();
    const stickerUrl = `${ENV_1.ASSETS_URL}/stickers/jetbrains/v2${sticker.sticker.path}`;
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>The Doki Theme</title>
            <style>
            .sticker {
                position: fixed;
                right: 0;
                bottom: 0;
                z-index: 9001;
            }
            </style>
        </head>
        <body>
            ${content}
            <img class="sticker" src="${stickerUrl}" />
        </body>
        </html>`;
}
exports.buildWebviewHtml = buildWebviewHtml;
function getWebviewIcon(context) {
    return vscode.Uri.file(path.join(context.extensionPath, 'assets', 'Doki-Icon-Smol.png'));
}
exports.getWebviewIcon = getWebviewIcon;
//# sourceMappingURL=ChangelogService.js.map