"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performGet = void 0;
const https_1 = __importDefault(require("https"));
const stream_1 = require("stream");
exports.performGet = (url) => {
    return new Promise((resolve, reject) => {
        https_1.default.get(url, {
            headers: {
                'user-agent': 'vs-code',
            },
            timeout: 10000,
        }, (res) => {
            const inputStream = new stream_1.Transform();
            res.on('data', (d) => {
                inputStream.push(d);
            });
            res.on('end', () => {
                resolve(inputStream);
            });
        }).on('error', (e) => {
            reject(e);
        }).end();
    });
};
//# sourceMappingURL=RESTClient.js.map