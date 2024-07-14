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
const ThemeManager_1 = require("./ThemeManager");
const DokiTheme_1 = require("./DokiTheme");
const DokiThemeDefinitions_1 = __importDefault(require("./DokiThemeDefinitions"));
const StatusBar_1 = require("./StatusBar");
const VSCodeGlobals_1 = require("./VSCodeGlobals");
const NotificationService_1 = require("./NotificationService");
const ChangelogService_1 = require("./ChangelogService");
const StickerUpdateService_1 = require("./StickerUpdateService");
const ConfigWatcher_1 = require("./ConfigWatcher");
const CheckSumService_1 = require("./CheckSumService");
const AutoInstaller_1 = require("./AutoInstaller");
const getCurrentSticker = (extensionCommand, dokiThemeDefinition) => {
    const stickerType = extensionCommand.endsWith('secondary') ?
        DokiTheme_1.StickerType.SECONDARY : DokiTheme_1.StickerType.DEFAULT;
    const sticker = ThemeManager_1.getSticker(dokiThemeDefinition, stickerType);
    return {
        sticker,
        type: stickerType,
    };
};
function isStickerCommand(extensionCommand) {
    return extensionCommand.indexOf("wallpaper") < 0;
}
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.remove.sticker", () => ThemeManager_1.uninstallImages(context)));
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.doki.changelog", () => ChangelogService_1.showChanglog(context)));
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.remove.watermark", () => ThemeManager_1.activateHideWatermark(context)));
    context.subscriptions.push(vscode.commands.registerCommand("doki-theme.restore.assets", () => AutoInstaller_1.restoreInstallation(context)));
    VSCodeGlobals_1.VSCodeGlobals.globalState = context.globalState;
    StatusBar_1.StatusBarComponent.initialize();
    context.subscriptions.push(StatusBar_1.StatusBarComponent);
    NotificationService_1.attemptToNotifyUpdates(context);
    const { sticker, theme } = ThemeManager_1.getCurrentThemeAndSticker();
    StickerUpdateService_1.attemptToUpdateSticker(context, {
        theme,
        sticker: sticker.sticker,
    })
        .catch(error => {
        console.error("Unable to update sticker for reasons", error);
    });
    DokiThemeDefinitions_1.default.map((dokiThemeDefinition) => dokiThemeDefinition.extensionNames.map((extensionCommand) => ({
        extensionCommand,
        dokiThemeDefinition,
    })))
        .reduce((accum, next) => accum.concat(next), [])
        .map(({ dokiThemeDefinition, extensionCommand }) => vscode.commands.registerCommand(extensionCommand, () => {
        const dokiTheme = new DokiTheme_1.DokiTheme(dokiThemeDefinition.themeDefinition);
        const currentSticker = getCurrentSticker(extensionCommand, dokiThemeDefinition.themeDefinition);
        if (isStickerCommand(extensionCommand)) {
            ThemeManager_1.activateThemeSticker(dokiTheme, currentSticker, context);
        }
        else {
            ThemeManager_1.activateThemeWallpaper(dokiTheme, currentSticker, context);
        }
    }))
        .forEach((disposableHero) => context.subscriptions.push(disposableHero));
    context.subscriptions.push(ConfigWatcher_1.watchConfigChanges(context));
    CheckSumService_1.cleanupOrigFiles();
    AutoInstaller_1.attemptToPerformAutoInstall(context);
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map