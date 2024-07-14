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
exports.NetworkError = exports.attemptToUpdateSticker = exports.forceUpdateSticker = void 0;
const vscode = __importStar(require("vscode"));
const RESTClient_1 = require("./RESTClient");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const url_1 = require("url");
const crypto_1 = __importDefault(require("crypto"));
const ENV_1 = require("./ENV");
const ConfigWatcher_1 = require("./ConfigWatcher");
const DokiTheme_1 = require("./DokiTheme");
function loadImageBase64FromFileProtocol(url) {
    const fileUrl = new url_1.URL(url);
    const imageBuffer = fs_1.default.readFileSync(fileUrl);
    const imageExtensionName = path_1.default.extname(fileUrl.pathname).substr(1);
    return `data:image/${imageExtensionName};base64,${imageBuffer.toString('base64')}`;
}
exports.forceUpdateSticker = (context, stickerInstallPayload) => __awaiter(void 0, void 0, void 0, function* () { return _attemptToUpdateSticker(context, stickerInstallPayload, forceUpdateAsset); });
exports.attemptToUpdateSticker = (context, stickerInstallPayload) => __awaiter(void 0, void 0, void 0, function* () { return _attemptToUpdateSticker(context, stickerInstallPayload, attemptToUpdateAsset); });
const _attemptToUpdateSticker = (context, { sticker: currentSticker, theme }, assetUpdater) => __awaiter(void 0, void 0, void 0, function* () {
    const remoteStickerUrl = `${ENV_1.VSCODE_ASSETS_URL}${stickerPathToUrl(currentSticker)}`;
    const remoteWallpaperUrl = `${ENV_1.WALLPAPER_ASSETS_URL}${wallpaperPathToUrl(currentSticker)}`;
    const backgroundBase = requiresRealBackground(theme) ?
        ENV_1.ACTUAL_BACKGROUND_ASSETS_URL : ENV_1.BACKGROUND_ASSETS_URL;
    const remoteBackgroundUrl = `${backgroundBase}${wallpaperPathToUrl(currentSticker)}`;
    const localStickerPath = resolveLocalStickerPath(currentSticker, context);
    const localWallpaperPath = resolveLocalWallpaperPath(currentSticker, context);
    const localBackgroundPath = resolveLocalBackgroundPath(currentSticker, context);
    yield Promise.all([
        assetUpdater(remoteStickerUrl, localStickerPath, context),
        assetUpdater(remoteWallpaperUrl, localWallpaperPath, context),
        assetUpdater(remoteBackgroundUrl, localBackgroundPath, context),
    ]);
    const config = vscode.workspace.getConfiguration(ConfigWatcher_1.CONFIG_NAME);
    const customSticker = config.get(ConfigWatcher_1.CONFIG_STICKER) + '';
    const customBackground = config.get(ConfigWatcher_1.CONFIG_BACKGROUND) + '';
    const customWallpaper = config.get(ConfigWatcher_1.CONFIG_WALLPAPER) + '';
    return {
        stickerDataURL: createCssDokiAssetUrl(fs_1.default.existsSync(customSticker) ? customSticker : localStickerPath),
        backgroundImageURL: createCssDokiAssetUrl(fs_1.default.existsSync(customBackground) ? customBackground : localBackgroundPath),
        wallpaperImageURL: createCssDokiAssetUrl(fs_1.default.existsSync(customWallpaper) ? customWallpaper : localWallpaperPath),
        backgroundAnchoring: config.get(ConfigWatcher_1.CONFIG_BACKGROUND_ANCHOR) ||
            currentSticker.anchoring,
    };
});
function attemptToUpdateAsset(remoteStickerUrl, localStickerPath, context) {
    return __awaiter(this, void 0, void 0, function* () {
        if (hasCheckedToday(remoteStickerUrl, context)) {
            return;
        }
        yield forceUpdateAsset(remoteStickerUrl, localStickerPath);
    });
}
class NetworkError extends Error {
}
exports.NetworkError = NetworkError;
function forceUpdateAsset(remoteStickerUrl, localStickerPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (yield shouldDownloadNewAsset(remoteStickerUrl, localStickerPath)) {
                yield installAsset(remoteStickerUrl, localStickerPath);
            }
        }
        catch (e) {
            console.error(`Unable to get remote asset ${remoteStickerUrl}!`, e);
            throw new NetworkError();
        }
    });
}
const fetchRemoteChecksum = (remoteAssetUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const checksumUrl = `${remoteAssetUrl}.checksum.txt`;
    console.log(`Fetching resource checksum: ${checksumUrl}`);
    const checkSumInputStream = yield RESTClient_1.performGet(checksumUrl);
    return checkSumInputStream.setEncoding("utf8").read();
});
const resolveLocalStickerPath = (currentSticker, context) => {
    const safeStickerPath = stickerPathToUrl(currentSticker);
    return path_1.default.join(getStoragePath(context), "stickers", safeStickerPath);
};
function getWSLStoragePath() {
    const appDataDirectory = "AppData";
    const userAppDataIndex = ENV_1.workbenchDirectory.indexOf(appDataDirectory);
    if (userAppDataIndex > -1) {
        const windowsGlobalStorageDirectory = path_1.default.resolve(ENV_1.workbenchDirectory.substring(0, userAppDataIndex + appDataDirectory.length), "Roaming", "Code", "User", "globalStorage", "unthrottled.doki-theme");
        try {
            if (!fs_1.default.existsSync(windowsGlobalStorageDirectory)) {
                fs_1.default.mkdirSync(windowsGlobalStorageDirectory, { recursive: true });
            }
            return windowsGlobalStorageDirectory;
        }
        catch (e) {
            console.error("Unable to create roaming directory", e);
        }
    }
    throw Error("Unable to set up WSL asset directory!");
}
function getStoragePath(context) {
    return ENV_1.isWSL() ? getWSLStoragePath() : context.globalStoragePath;
}
const resolveLocalWallpaperPath = (currentSticker, context) => {
    const safeStickerPath = wallpaperPathToUrl(currentSticker);
    return path_1.default.join(getStoragePath(context), "wallpapers", safeStickerPath);
};
const resolveLocalBackgroundPath = (currentSticker, context) => {
    const safeStickerPath = wallpaperPathToUrl(currentSticker);
    return path_1.default.join(getStoragePath(context), "backgrounds", safeStickerPath);
};
const createCssDokiAssetUrl = (localAssetPath) => {
    return loadImageBase64FromFileProtocol(`file://${cleanPathToUrl(localAssetPath)}`);
};
function cleanPathToUrl(stickerPath) {
    const scrubbedUrl = stickerPath.replace(/\\/g, "/");
    const unEncodedUrl = ENV_1.isWSL() ? scrubbedUrl.replace("/mnt/c", "c:") : scrubbedUrl;
    const encodedUrl = encodeURI(unEncodedUrl).replace(/[!'()*]/g, escape);
    return encodedUrl;
}
function stickerPathToUrl(currentSticker) {
    const stickerPath = currentSticker.path;
    return cleanPathToUrl(stickerPath);
}
function wallpaperPathToUrl(currentSticker) {
    const stickerPath = `/${currentSticker.name}`;
    return cleanPathToUrl(stickerPath);
}
function createChecksum(data) {
    return crypto_1.default.createHash("md5").update(data).digest("hex");
}
const calculateFileChecksum = (filePath) => {
    const fileRead = fs_1.default.readFileSync(filePath);
    return createChecksum(fileRead);
};
const fetchLocalChecksum = (localSticker) => __awaiter(void 0, void 0, void 0, function* () {
    return fs_1.default.existsSync(localSticker)
        ? calculateFileChecksum(localSticker)
        : "File not downloaded, bruv.";
});
const shouldDownloadNewAsset = (remoteAssetUrl, localStickerPath) => __awaiter(void 0, void 0, void 0, function* () {
    const remoteChecksum = yield fetchRemoteChecksum(remoteAssetUrl);
    const localChecksum = yield fetchLocalChecksum(localStickerPath);
    return remoteChecksum !== localChecksum;
});
const downloadRemoteAsset = (remoteAssetUrl, localDestination) => __awaiter(void 0, void 0, void 0, function* () {
    const parentDirectory = path_1.default.dirname(localDestination);
    if (!fs_1.default.existsSync(parentDirectory)) {
        fs_1.default.mkdirSync(parentDirectory, { recursive: true });
    }
    console.log(`Downloading remote asset: ${remoteAssetUrl}`);
    const stickerInputStream = yield RESTClient_1.performGet(remoteAssetUrl);
    console.log("Remote asset Downloaded!");
    fs_1.default.writeFileSync(localDestination, stickerInputStream.read());
});
function installAsset(remoteAssetUrl, localAssetPath) {
    return __awaiter(this, void 0, void 0, function* () {
        yield downloadRemoteAsset(remoteAssetUrl, localAssetPath);
    });
}
const DAY_IN_MILLIS = 24 * 60 * 60 * 1000;
function hasCheckedToday(remoteAssetUrl, context) {
    const assetCheckKey = `check.${remoteAssetUrl}`;
    const checkDate = context.globalState.get(assetCheckKey);
    const meow = Date.now();
    if (!checkDate) {
        context.globalState.update(assetCheckKey, meow);
        return false;
    }
    else if (meow - checkDate >= DAY_IN_MILLIS) {
        context.globalState.update(assetCheckKey, meow);
        return false;
    }
    else {
        return true;
    }
}
function requiresRealBackground(theme) {
    return theme.id === DokiTheme_1.ZERO_TWO_OBSIDIAN_ID;
}
//# sourceMappingURL=StickerUpdateService.js.map