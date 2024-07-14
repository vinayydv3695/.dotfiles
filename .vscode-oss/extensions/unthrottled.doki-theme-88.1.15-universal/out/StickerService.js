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
exports.removeStickers = exports.readCSS = exports.hideWaterMark = exports.installWallPaper = exports.installStickers = exports.getBackgroundIndex = exports.getWallpaperIndex = exports.getHideIndex = exports.getStickerIndex = exports.InstallStatus = void 0;
const vscode = __importStar(require("vscode"));
const fs_1 = __importDefault(require("fs"));
const ENV_1 = require("./ENV");
const StickerUpdateService_1 = require("./StickerUpdateService");
const ConfigWatcher_1 = require("./ConfigWatcher");
var InstallStatus;
(function (InstallStatus) {
    InstallStatus[InstallStatus["INSTALLED"] = 0] = "INSTALLED";
    InstallStatus[InstallStatus["NOT_INSTALLED"] = 1] = "NOT_INSTALLED";
    InstallStatus[InstallStatus["FAILURE"] = 2] = "FAILURE";
    InstallStatus[InstallStatus["NETWORK_FAILURE"] = 3] = "NETWORK_FAILURE";
})(InstallStatus = exports.InstallStatus || (exports.InstallStatus = {}));
const stickerComment = "/* Stickers */";
const hideComment = "/* Hide Watermark */";
const wallpaperComment = "/* Background Image */";
const backgroundComment = "/* EmptyEditor Image */";
exports.getStickerIndex = (currentCss) => currentCss.indexOf(stickerComment);
exports.getHideIndex = (currentCss) => currentCss.indexOf(hideComment);
exports.getWallpaperIndex = (currentCss) => currentCss.indexOf(wallpaperComment);
exports.getBackgroundIndex = (currentCss) => currentCss.indexOf(backgroundComment);
function buildWallpaperCss({ wallpaperImageURL: wallpaperURL, backgroundAnchoring, }) {
    return `${wallpaperComment}
  [id="workbench.parts.editor"] .split-view-view .editor-container .editor-instance>.monaco-editor .overflow-guard>.monaco-scrollable-element>.monaco-editor-background{background: none;}


  [id="workbench.parts.editor"] .split-view-view .editor-container .editor-instance>.monaco-editor  .overflow-guard>.monaco-scrollable-element::before,
  .overflow-guard,
  .tab,
  /* settings UI */
  .settings-editor>.settings-body .settings-toc-container,
  /* end settings UI */
  .tabs-container,
  .monaco-pane-view, 
  .composite.title,
  /* welcome window */
  .editor-container,
  button.getting-started-category,
  /* end welcome window */
  div.header, /* extensions header */
  .content,
  .monaco-select-box,
  .pane-header, 
  .minimap-decorations-layer,
  .xterm-cursor-layer,
  .decorationsOverviewRuler,
  .monaco-workbench .part.editor>.content .editor-group-container>.title .tabs-breadcrumbs .breadcrumbs-control,
  .ref-tree, /* find usages */
  .head, /* find usages */
  .monaco-workbench .part.editor>.content .editor-group-container>.title .editor-actions,  
  .welcomePageFocusElement /* welcome screen */
  /*.terminal-outer-container  Terminal outer edge */
  {
    background-image: url('${wallpaperURL}') !important;
    background-position: ${backgroundAnchoring} !important;
    background-attachment: fixed !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }
  
  /*settings UI */
  .monaco-list.list_id_1 .monaco-list-rows,
  .settings-tree-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows,
  .monaco-list.list_id_2:not(.drop-target) .monaco-list-row:hover:not(.selected):not(.focused),
  /* source control diff editor */  
  .lines-content.monaco-editor-background,
  /* output panel */
  .overflow-guard > .margin,
  .overflow-guard > .margin > .margin-view-overlays,
  .monaco-workbench .part.panel > .content .monaco-editor .monaco-editor-background,
  /* debugger panel */
  [id="workbench.panel.repl"] *
   {
    background-color: transparent !important;
  }

  .quick-input-widget
  {
    backdrop-filter: blur(5px) !important;
  }

  .monaco-breadcrumbs {
    background-color: #00000000 !important;
  }

  [id="workbench.view.explorer"] .monaco-list-rows,
  [id="workbench.view.explorer"] .pane-header,
  [id="workbench.view.explorer"] .monaco-pane-view,
  [id="workbench.view.explorer"] .split-view-view,
  [id="workbench.view.explorer"] .monaco-tl-twistie,
  [id="terminal"] .pane-header,
  [id="terminal"] .monaco-pane-view,
  .explorer-folders-view > .monaco-list > .monaco-scrollable-element > .monaco-list-rows,
  .show-file-icons > .monaco-list > .monaco-scrollable-element > .monaco-list-rows,
  .extensions-list > .monaco-list > .monaco-scrollable-element > .monaco-list-rows,
  div.details .header-container .header, /* extension list tree*/
  /* Welcome Page */
  .monaco-workbench .part.editor>.content .gettingStartedContainer .gettingStartedSlideCategories>.gettingStartedCategoriesContainer>.header,
  .monaco-workbench .part.editor>.content .gettingStartedContainer .gettingStartedSlideCategories .getting-started-category
  /* end welcome page */
  {
    background-color: #00000000 !important;
    background-image: none !important;
    border: none !important;
  }

  .monaco-icon-label-container {
    background: none !important;
  }
  `;
}
function buildHideWallpaperOnEmptyEditor() {
    return ` 
  .monaco-workbench .part.editor > .content {
    background-image: none !important;
}
  `;
}
function buildBackgroundCss({ backgroundImageURL: backgroundUrl, backgroundAnchoring, }) {
    return `${backgroundComment}
  .monaco-workbench .part.editor > .content {
    background-image: url('${backgroundUrl}') !important;
    background-position: ${backgroundAnchoring};
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    content:'';
    z-index:9001;
    width:100%;
    height:100%;
    opacity:1;
}
  `;
}
function buildStickerCss({ stickerDataURL: stickerUrl }) {
    const stickerPositioningStyles = vscode.workspace.getConfiguration(ConfigWatcher_1.CONFIG_NAME).get(ConfigWatcher_1.CONFIG_STICKER_CSS) + '';
    const style = "content:'';pointer-events:none;position:absolute;z-index:100;width:100%;height:100%;background-repeat:no-repeat;opacity:1;"
        + stickerPositioningStyles + (stickerPositioningStyles.endsWith(';') ? '' : ';');
    return `
  ${stickerComment}
  body > .monaco-workbench > .monaco-grid-view > .monaco-grid-branch-node > .monaco-split-view2 > .split-view-container::after,
  body > .monaco-workbench > .monaco-grid-view > .monaco-grid-branch-node > .monaco-split-view2 > .monaco-scrollable-element > .split-view-container::after
  {background-image: url('${stickerUrl}');${style}}

  /* Makes sure notification shows on top of sticker */
  .monaco-workbench>.notifications-center,
  .notifications-toasts {
    z-index: 9002 !important;
  }

  /* glass pane to show sticker */
  .notification-toast {
    backdrop-filter: blur(2px) !important;
  }
`;
}
function buildHideWaterMarkCSS() {
    return `
  ${hideComment}
  .monaco-workbench .part.editor.has-watermark>.content.empty .editor-group-container>.editor-group-letterpress,
  .part.editor>.content .editor-group-container .editor-group-watermark>.letterpress,
  .monaco-workbench .part.editor>.content .editor-group-container>.editor-group-watermark>.shortcuts>.watermark-box,
  .monaco-workbench .part.editor>.content.empty>.watermark>.watermark-box 
  {
    display: none !important;
  }
`;
}
function buildCSSWithStickers(dokiStickers) {
    return `${getStickerScrubbedCSS()}${buildStickerCss(dokiStickers)}`;
}
function buildCSSWithWallpaperAndBackground(dokiStickers) {
    const wallpaperScrubbedCSS = getWallpaperScrubbedCSS();
    const backgroundAndWallpaperScrubbedCSS = getBackgroundScrubbedCSS(wallpaperScrubbedCSS);
    const config = ConfigWatcher_1.getConfig();
    const wallPaperCss = config.get(ConfigWatcher_1.CONFIG_WALLPAPER_ENABLED) ? buildWallpaperCss(dokiStickers) : '';
    const backgroundCSS = config.get(ConfigWatcher_1.CONFIG_BACKGROUND_ENABLED) ?
        buildBackgroundCss(dokiStickers) :
        // If the background image isn't set, then the wallpaper will be drawn over it.
        (!!wallPaperCss ? buildHideWallpaperOnEmptyEditor() : '');
    return `${backgroundAndWallpaperScrubbedCSS}${wallPaperCss}${backgroundCSS}`;
}
function buildCSSWithoutWatermark() {
    return `${getWatermarkScrubbedCSS()}${buildHideWaterMarkCSS()}`;
}
function installEditorStyles(styles) {
    fs_1.default.writeFileSync(ENV_1.editorCss, styles, "utf-8");
}
function canWrite() {
    try {
        fs_1.default.accessSync(ENV_1.editorCss, fs_1.default.constants.W_OK);
        return true;
    }
    catch (error) {
        return false;
    }
}
function installStickers(stickerInstallPayload, context) {
    return __awaiter(this, void 0, void 0, function* () {
        return installStyles(stickerInstallPayload, context, (stickersAndWallpaper) => buildCSSWithStickers(stickersAndWallpaper));
    });
}
exports.installStickers = installStickers;
function installWallPaper(stickerInstallPayload, context) {
    return __awaiter(this, void 0, void 0, function* () {
        return installStyles(stickerInstallPayload, context, (stickersAndWallpaper) => buildCSSWithWallpaperAndBackground(stickersAndWallpaper));
    });
}
exports.installWallPaper = installWallPaper;
function hideWaterMark() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!canWrite())
            return InstallStatus.FAILURE;
        installEditorStyles(buildCSSWithoutWatermark());
        return InstallStatus.INSTALLED;
    });
}
exports.hideWaterMark = hideWaterMark;
function installStyles(stickerInstallPayload, context, cssDecorator) {
    return __awaiter(this, void 0, void 0, function* () {
        if (canWrite()) {
            try {
                const stickersAndWallpaper = yield StickerUpdateService_1.forceUpdateSticker(context, stickerInstallPayload);
                const stickerStyles = cssDecorator(stickersAndWallpaper);
                installEditorStyles(stickerStyles);
                return InstallStatus.INSTALLED;
            }
            catch (e) {
                console.error("Unable to install sticker!", e);
                if (e instanceof StickerUpdateService_1.NetworkError) {
                    return InstallStatus.NETWORK_FAILURE;
                }
            }
        }
        return InstallStatus.FAILURE;
    });
}
function getScrubbedCSS() {
    const currentCss = readCSS();
    return indexGetters.reduce((trimmedCss, indexFinderDude) => trimCss(trimmedCss, indexFinderDude(trimmedCss)), currentCss);
}
function readCSS() {
    return fs_1.default.readFileSync(ENV_1.editorCss, "utf-8");
}
exports.readCSS = readCSS;
function readVSCodeCSSAndScrubAsset(getOtherAssets, getAssetToRemoveIndex) {
    const currentVSCodeCss = fs_1.default.readFileSync(ENV_1.editorCss, "utf-8");
    return scrubProvidedCssOfAsset(getOtherAssets, getAssetToRemoveIndex, currentVSCodeCss);
}
function scrubProvidedCssOfAsset(getOtherAssets, getAssetToRemoveIndex, currentCss) {
    const otherAssetIndices = getOtherAssets.map(assetFinder => assetFinder(currentCss));
    const assetToRemoveIndex = getAssetToRemoveIndex(currentCss);
    const otherIndex = otherAssetIndices.reduce((accum, index) => Math.max(accum, index), -1);
    if (otherIndex < 0) {
        return trimCss(currentCss, assetToRemoveIndex);
    }
    else if (assetToRemoveIndex > -1) {
        const smolestGreater = otherAssetIndices
            .filter(otherIndex => assetToRemoveIndex < otherIndex)
            .reduce((accum, index) => Math.min(accum, index), Number.POSITIVE_INFINITY);
        return (currentCss.substring(0, assetToRemoveIndex) +
            (smolestGreater < Number.POSITIVE_INFINITY
                ? "\n" + currentCss.substring(smolestGreater, currentCss.length)
                : ""));
    }
    return currentCss;
}
const indexGetters = [
    exports.getStickerIndex, exports.getWallpaperIndex, exports.getHideIndex, exports.getBackgroundIndex
];
function getWallpaperScrubbedCSS() {
    return readVSCodeCSSAndScrubAsset(indexGetters.filter(getter => getter !== exports.getWallpaperIndex), exports.getWallpaperIndex);
}
function getBackgroundScrubbedCSS(vscodeCSS) {
    return scrubProvidedCssOfAsset(indexGetters.filter(getter => getter !== exports.getBackgroundIndex), exports.getBackgroundIndex, vscodeCSS);
}
function getStickerScrubbedCSS() {
    return readVSCodeCSSAndScrubAsset(indexGetters.filter(getter => getter !== exports.getStickerIndex), exports.getStickerIndex);
}
function getWatermarkScrubbedCSS() {
    return readVSCodeCSSAndScrubAsset(indexGetters.filter(getter => getter !== exports.getHideIndex), exports.getHideIndex);
}
function trimCss(currentCss, index) {
    if (index >= 0) {
        return currentCss.substr(0, index).trim();
    }
    return currentCss;
}
const scrubCSSFile = () => {
    const scrubbedCSS = getScrubbedCSS();
    fs_1.default.writeFileSync(ENV_1.editorCss, scrubbedCSS, "utf-8");
};
// :(
function removeStickers() {
    if (canWrite()) {
        try {
            if (fs_1.default.existsSync(ENV_1.editorCssCopy)) {
                fs_1.default.unlinkSync(ENV_1.editorCssCopy);
                scrubCSSFile();
                return InstallStatus.INSTALLED;
            }
            scrubCSSFile();
            return InstallStatus.NOT_INSTALLED;
        }
        catch (e) {
            console.error("Unable to remove stickers!", e);
            return InstallStatus.FAILURE;
        }
    }
    return InstallStatus.FAILURE;
}
exports.removeStickers = removeStickers;
//# sourceMappingURL=StickerService.js.map