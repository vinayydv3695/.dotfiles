"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickerType = exports.DokiTheme = exports.DEFAULT_THEME_ID = exports.ZERO_TWO_OBSIDIAN_ID = void 0;
exports.ZERO_TWO_OBSIDIAN_ID = '13adffd9-acbe-47af-8101-fa71269a4c5c';
exports.DEFAULT_THEME_ID = exports.ZERO_TWO_OBSIDIAN_ID;
class DokiTheme {
    constructor(dokiThemeDefinition) {
        this.name = dokiThemeDefinition.information.name;
        this.displayName = dokiThemeDefinition.information.displayName;
        this.id = dokiThemeDefinition.information.id;
    }
}
exports.DokiTheme = DokiTheme;
var StickerType;
(function (StickerType) {
    StickerType["DEFAULT"] = "DEFAULT";
    StickerType["SECONDARY"] = "SECONDARY";
})(StickerType = exports.StickerType || (exports.StickerType = {}));
//# sourceMappingURL=DokiTheme.js.map