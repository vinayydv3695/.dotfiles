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
exports.StatusBarComponent = void 0;
const vscode = __importStar(require("vscode"));
const ConfigWatcher_1 = require("./ConfigWatcher");
const ThemeManager_1 = require("./ThemeManager");
class StatusBar {
    constructor() {
        this._statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, Number.MIN_SAFE_INTEGER // furthest right on the right
        );
        this._statusBarItem.show();
    }
    initialize() {
        const { theme } = ThemeManager_1.getCurrentThemeAndSticker();
        const customName = ConfigWatcher_1.getConfig().get(ConfigWatcher_1.CONFIG_STATUS_BAR_NAME);
        const displayName = customName || theme.displayName;
        this.setText(displayName);
    }
    dispose() {
        this._statusBarItem.dispose();
    }
    setText(text) {
        this._statusBarItem.text = `${text} $(heart)`;
    }
}
exports.StatusBarComponent = new StatusBar();
//# sourceMappingURL=StatusBar.js.map