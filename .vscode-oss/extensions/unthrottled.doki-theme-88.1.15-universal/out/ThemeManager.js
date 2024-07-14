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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSticker = exports.getCurrentThemeAndSticker = exports.uninstallImages = exports.handleInstallFailure = exports.showInstallNotification = exports.showNetworkErrorMessage = exports.activateThemeAsset = exports.activateHideWatermark = exports.activateThemeWallpaper = exports.activateThemeSticker = exports.attemptToInstallHideWatermark = exports.attemptToInstallWallpaper = exports.attemptToInstallSticker = exports.handleInstallMessage = exports.ACTIVE_STICKER = exports.ACTIVE_THEME = void 0;
const vscode = __importStar(require("vscode"));
const DokiTheme_1 = require("./DokiTheme");
const StickerService_1 = require("./StickerService");
const VSCodeGlobals_1 = require("./VSCodeGlobals");
const StatusBar_1 = require("./StatusBar");
const SupportService_1 = require("./SupportService");
const DokiThemeDefinitions_1 = __importDefault(require("./DokiThemeDefinitions"));
const CheckSumService_1 = require("./CheckSumService");
const AutoInstaller_1 = require("./AutoInstaller");
const ConfigWatcher_1 = require("./ConfigWatcher");
exports.ACTIVE_THEME = "doki.theme.active";
exports.ACTIVE_STICKER = "doki.sticker.active";
const FIRST_TIME_STICKER_INSTALL = "doki.sticker.first.install";
exports.handleInstallMessage = `Quick reload to see changes, please restart VSCode to remove the Unsupported warning.`;
const createCulturedInstall = (themeId) => `doki.cultured.${themeId}`;
const CULTURED_STICKER_INSTALL = createCulturedInstall("ea9a13f6-fa7f-46a4-ba6e-6cefe1f55160_test");
function isFirstTimeInstalling(context) {
    return !context.globalState.get(FIRST_TIME_STICKER_INSTALL);
}
function conditionalInstall(storageKey, actionText, messageBody, installAsset, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield vscode.window.showWarningMessage(messageBody, {
            modal: true,
        }, {
            title: actionText,
            isCloseAffordance: false,
        });
        if (result && result.title === actionText) {
            context.globalState.update(storageKey, true);
            return installAsset();
        }
        else {
            return StickerService_1.InstallStatus.NOT_INSTALLED;
        }
    });
}
function attemptToInstallAsset(context, stickerInstallPayload, installAsset) {
    return __awaiter(this, void 0, void 0, function* () {
        if (isCultured(context, stickerInstallPayload)) {
            const storageKey = CULTURED_STICKER_INSTALL;
            const actionText = "Yes, Please!";
            const messageBody = `You are about to install sexually suggestive content. Are you sure you want to continue? I won't show you this message again in the future if you choose to install.`;
            return conditionalInstall(storageKey, actionText, messageBody, installAsset, context);
        }
        else if (isFirstTimeInstalling(context)) {
            const actionText = "Install Theme Assets";
            const messageBody = `Installing theme assets requires me to corrupt VS-Code by modifying CSS. You will have to use the "Remove Sticker/Background" command to restore VS Code back to supported status before unistalling. I won't show you this message again in the future if you choose to install.`;
            return conditionalInstall(FIRST_TIME_STICKER_INSTALL, actionText, messageBody, installAsset, context);
        }
        else {
            return installAsset();
        }
    });
}
function attemptToInstallSticker(stickerInstallPayload, context) {
    return __awaiter(this, void 0, void 0, function* () {
        return attemptToInstallAsset(context, stickerInstallPayload, () => performStickerInstall(stickerInstallPayload, context));
    });
}
exports.attemptToInstallSticker = attemptToInstallSticker;
function attemptToInstallWallpaper(stickerInstallPayload, context) {
    return __awaiter(this, void 0, void 0, function* () {
        return attemptToInstallAsset(context, stickerInstallPayload, () => performWallpaperInstall(stickerInstallPayload, context));
    });
}
exports.attemptToInstallWallpaper = attemptToInstallWallpaper;
function attemptToInstallHideWatermark(context) {
    return __awaiter(this, void 0, void 0, function* () {
        return attemptToInstallAsset(context, {
            sticker: {
                anchoring: "Facts: ",
                name: "Zero Two",
                path: "Best Girl",
            },
            theme: new DokiTheme_1.DokiTheme(DokiThemeDefinitions_1.default
                .find(theme => theme.themeDefinition.information.id === DokiTheme_1.DEFAULT_THEME_ID)
                .themeDefinition),
        }, () => performHideWatermarkInstall());
    });
}
exports.attemptToInstallHideWatermark = attemptToInstallHideWatermark;
function performStickerInstall(stickerInstallPayload, context) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield StickerService_1.installStickers(stickerInstallPayload, context);
    });
}
function performWallpaperInstall(stickerInstallPayload, context) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield StickerService_1.installWallPaper(stickerInstallPayload, context);
    });
}
function performHideWatermarkInstall() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield StickerService_1.hideWaterMark();
    });
}
function activateThemeSticker(dokiTheme, currentSticker, context) {
    return activateThemeAsset(dokiTheme, currentSticker, context, "Sticker", (sticker) => attemptToInstallSticker(sticker, context), AutoInstaller_1.saveStickerConfig);
}
exports.activateThemeSticker = activateThemeSticker;
function activateThemeWallpaper(dokiTheme, currentSticker, context) {
    return activateThemeAsset(dokiTheme, currentSticker, context, "Wallpaper", (sticker) => attemptToInstallWallpaper(sticker, context), AutoInstaller_1.saveWallpaperConfig);
}
exports.activateThemeWallpaper = activateThemeWallpaper;
function activateHideWatermark(context) {
    return attemptToInstallHideWatermark(context).then(installStatus => {
        if (installStatus === StickerService_1.InstallStatus.INSTALLED) {
            CheckSumService_1.fixCheckSums(context);
            const message = `VSCode Watermark hidden! ${exports.handleInstallMessage}`;
            showInstallNotification(message);
            AutoInstaller_1.saveHiddenWatermarkConfig(context);
        }
        else if (installStatus === StickerService_1.InstallStatus.FAILURE) {
            handleInstallFailure(context, exports.getCurrentThemeAndSticker().theme);
        }
    });
}
exports.activateHideWatermark = activateHideWatermark;
const quickReloadAction = "Quickly Reload Window";
function activateThemeAsset(dokiTheme, currentSticker, context, assetType, installer, configSaver) {
    vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: `Please wait, installing ${dokiTheme.name}'s ${assetType}.`,
        cancellable: false,
    }, () => {
        return installer({
            sticker: currentSticker.sticker,
            theme: dokiTheme,
        }).then((didInstall) => {
            if (didInstall === StickerService_1.InstallStatus.INSTALLED) {
                VSCodeGlobals_1.VSCodeGlobals.globalState.update(exports.ACTIVE_THEME, dokiTheme.id);
                VSCodeGlobals_1.VSCodeGlobals.globalState.update(exports.ACTIVE_STICKER, currentSticker.type);
                if (!ConfigWatcher_1.getConfig().get(ConfigWatcher_1.CONFIG_STATUS_BAR_NAME)) {
                    StatusBar_1.StatusBarComponent.setText(dokiTheme.displayName);
                }
                CheckSumService_1.fixCheckSums(context);
                const message = `${dokiTheme.name}'s ${assetType} installed! ${exports.handleInstallMessage}`;
                showInstallNotification(message);
                configSaver({
                    sticker: currentSticker,
                    themeId: dokiTheme.id
                }, context);
            }
            else if (didInstall === StickerService_1.InstallStatus.FAILURE) {
                handleInstallFailure(context, dokiTheme);
            }
            else if (didInstall === StickerService_1.InstallStatus.NETWORK_FAILURE) {
                showNetworkErrorMessage(dokiTheme);
            }
        });
    });
}
exports.activateThemeAsset = activateThemeAsset;
function showNetworkErrorMessage(dokiTheme) {
    vscode.window.showErrorMessage(`Unable to install ${dokiTheme.name}, please check your network connection.`);
}
exports.showNetworkErrorMessage = showNetworkErrorMessage;
function showInstallNotification(message) {
    vscode.window
        .showInformationMessage(message, { title: quickReloadAction })
        .then((item) => {
        if (item) {
            vscode.commands.executeCommand("workbench.action.reloadWindow");
        }
    });
}
exports.showInstallNotification = showInstallNotification;
function handleInstallFailure(context, dokiTheme) {
    SupportService_1.showStickerInstallationSupportWindow(context);
    vscode.window.showErrorMessage(`Unable to install ${dokiTheme.name}, please see active tab for more information.`);
}
exports.handleInstallFailure = handleInstallFailure;
// :(
function uninstallImages(context) {
    const stickersRemoved = StickerService_1.removeStickers();
    if (stickersRemoved === StickerService_1.InstallStatus.INSTALLED ||
        stickersRemoved === StickerService_1.InstallStatus.NOT_INSTALLED) {
        AutoInstaller_1.clearAssetConfig(context);
        CheckSumService_1.restoreChecksum();
        vscode.window
            .showInformationMessage(`Removed All Images. ${exports.handleInstallMessage}`, { title: quickReloadAction })
            .then((item) => {
            if (item) {
                vscode.commands.executeCommand("workbench.action.reloadWindow");
            }
        });
    }
    else if (stickersRemoved === StickerService_1.InstallStatus.FAILURE) {
        SupportService_1.showStickerRemovalSupportWindow(context);
        vscode.window.showErrorMessage(`Unable to remove stickers/background, please see active tab for more information.`);
    }
}
exports.uninstallImages = uninstallImages;
exports.getCurrentThemeAndSticker = () => {
    const currentThemeId = VSCodeGlobals_1.VSCodeGlobals.globalState.get(exports.ACTIVE_THEME);
    const dokiThemeDefinition = DokiThemeDefinitions_1.default.find((dokiDefinition) => dokiDefinition.themeDefinition.information.id === currentThemeId) ||
        DokiThemeDefinitions_1.default.find(def => def.themeDefinition.information.id === DokiTheme_1.DEFAULT_THEME_ID);
    const currentStickerType = VSCodeGlobals_1.VSCodeGlobals.globalState.get(exports.ACTIVE_STICKER) ||
        DokiTheme_1.StickerType.DEFAULT;
    return {
        theme: new DokiTheme_1.DokiTheme(dokiThemeDefinition.themeDefinition),
        sticker: {
            type: currentStickerType,
            sticker: getSticker(dokiThemeDefinition.themeDefinition, currentStickerType),
        },
    };
};
function getSticker(dokiThemeDefinition, stickerType) {
    const defaultSticker = dokiThemeDefinition.stickers.default;
    return DokiTheme_1.StickerType.SECONDARY === stickerType
        ? dokiThemeDefinition.stickers.secondary || defaultSticker
        : defaultSticker;
}
exports.getSticker = getSticker;
function isCultured(context, stickerInstallPayload) {
    return (stickerInstallPayload.sticker.name.indexOf("rias_onyx_spicy.png") > -1 &&
        !context.globalState.get(CULTURED_STICKER_INSTALL));
}
//# sourceMappingURL=ThemeManager.js.map