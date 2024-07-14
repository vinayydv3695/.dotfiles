"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDirectory = exports.editorCssCopy = exports.editorCss = exports.CSS_COPY_FILE_NAME = exports.workbenchDirectory = exports.isWSL = exports.defaultWorkbenchDirectory = exports.SCREENSHOT_ASSETS_URL = exports.WALLPAPER_ASSETS_URL = exports.ACTUAL_BACKGROUND_ASSETS_URL = exports.BACKGROUND_ASSETS_URL = exports.VSCODE_ASSETS_URL = exports.ASSETS_URL = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.ASSETS_URL = `https://doki.assets.unthrottled.io`;
exports.VSCODE_ASSETS_URL = `${exports.ASSETS_URL}/stickers/vscode`;
exports.BACKGROUND_ASSETS_URL = `${exports.ASSETS_URL}/backgrounds/wallpapers`;
exports.ACTUAL_BACKGROUND_ASSETS_URL = `${exports.ASSETS_URL}/backgrounds`;
exports.WALLPAPER_ASSETS_URL = `${exports.ASSETS_URL}/backgrounds/wallpapers/transparent`;
exports.SCREENSHOT_ASSETS_URL = `${exports.ASSETS_URL}/screenshots`;
const main = require.main || { filename: 'yeet' };
exports.defaultWorkbenchDirectory = path_1.default.join(path_1.default.dirname(main.filename), 'vs', 'workbench');
exports.isWSL = () => !fs_1.default.existsSync(exports.defaultWorkbenchDirectory);
const resolveWorkbench = () => {
    if (!exports.isWSL()) {
        return exports.defaultWorkbenchDirectory;
    }
    const usersPath = path_1.default.resolve('/mnt', 'c', 'Users');
    const users = fs_1.default.readdirSync(usersPath);
    return users.map(user => path_1.default.resolve(usersPath, user, 'AppData', 'Local', 'Programs', 'Microsoft VS Code', 'resources', 'app', 'out', 'vs', 'workbench'))
        .filter(path => fs_1.default.existsSync(path))
        .find(Boolean) || exports.defaultWorkbenchDirectory;
};
exports.workbenchDirectory = resolveWorkbench();
const REMOTE_CODE_SERVER_FILE = `web.main`;
const CODE_SERVER_FILE = 'web.api';
const getFileName = () => {
    if (fs_1.default.existsSync(path_1.default.join(exports.workbenchDirectory, `workbench.web.main.css`))) {
        return REMOTE_CODE_SERVER_FILE;
    }
    const hasRegularVSCodeStuff = fs_1.default.existsSync(path_1.default.join(exports.workbenchDirectory, `workbench.desktop.main.css`));
    return hasRegularVSCodeStuff ?
        'desktop.main' : CODE_SERVER_FILE;
};
const fileName = getFileName();
const CSS_FILE_NAME = `workbench.${fileName}.css`;
exports.CSS_COPY_FILE_NAME = `${CSS_FILE_NAME}.copy`;
exports.editorCss = path_1.default.join(exports.workbenchDirectory, CSS_FILE_NAME);
exports.editorCssCopy = path_1.default.join(exports.workbenchDirectory, exports.CSS_COPY_FILE_NAME);
exports.appDirectory = path_1.default.resolve(exports.workbenchDirectory, '..', '..', '..');
//# sourceMappingURL=ENV.js.map