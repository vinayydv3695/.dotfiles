"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanupOrigFiles = exports.restoreChecksum = exports.fixCheckSums = exports.productFile = void 0;
const path_1 = __importDefault(require("path"));
const vscode_1 = __importDefault(require("vscode"));
const fs_1 = __importDefault(require("fs"));
const crypto_1 = __importDefault(require("crypto"));
const ENV_1 = require("./ENV");
const SupportService_1 = require("./SupportService");
exports.productFile = path_1.default.join(ENV_1.appDirectory, "product.json");
const originalProductFile = `${exports.productFile}.orig.${vscode_1.default.version}`;
const outDirectory = path_1.default.resolve(ENV_1.workbenchDirectory, "..", "..");
exports.fixCheckSums = (extensionContext) => {
    try {
        const product = require(exports.productFile);
        const checksumChanged = Object.entries(product.checksums).reduce((didChange, entry) => {
            const [filePath, currentChecksum] = entry;
            const checksum = computeChecksum(path_1.default.join(outDirectory, ...filePath.split("/")));
            if (checksum !== currentChecksum) {
                product.checksums[filePath] = checksum;
                return true;
            }
            return didChange;
        }, false);
        if (checksumChanged) {
            const json = JSON.stringify(product, null, "\t");
            try {
                if (!fs_1.default.existsSync(originalProductFile)) {
                    fs_1.default.renameSync(exports.productFile, originalProductFile);
                }
                fs_1.default.writeFileSync(exports.productFile, json, { encoding: "utf8" });
            }
            catch (err) {
                vscode_1.default.window
                    .showErrorMessage(`Unable to remove [Unsupported] status!`, {
                    title: "Show Help",
                })
                    .then((item) => {
                    if (item) {
                        SupportService_1.showChecksumFixHelp(extensionContext);
                    }
                });
                console.error(err);
            }
        }
    }
    catch (e) {
        console.error(`Unable to fix checksum ${exports.productFile}`, e);
    }
};
exports.restoreChecksum = () => {
    try {
        if (fs_1.default.existsSync(originalProductFile)) {
            fs_1.default.unlinkSync(exports.productFile);
            fs_1.default.renameSync(originalProductFile, exports.productFile);
        }
    }
    catch (err) {
        console.error(err);
    }
};
function computeChecksum(file) {
    const contents = fs_1.default.readFileSync(file);
    return crypto_1.default
        .createHash("md5")
        .update(contents)
        .digest("base64")
        .replace(/=+$/, "");
}
function cleanupOrigFiles() {
    // Remove all old backup files that aren't related to the current version
    // of VSCode anymore.
    const oldOrigFiles = fs_1.default
        .readdirSync(ENV_1.appDirectory)
        .filter((file) => /\.orig\./.test(file))
        .filter((file) => !file.endsWith(vscode_1.default.version));
    for (const file of oldOrigFiles) {
        fs_1.default.unlinkSync(path_1.default.join(ENV_1.appDirectory, file));
    }
}
exports.cleanupOrigFiles = cleanupOrigFiles;
//# sourceMappingURL=CheckSumService.js.map