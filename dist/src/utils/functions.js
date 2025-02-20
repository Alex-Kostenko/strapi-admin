"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeta = exports.imageUrlToBase64 = exports.removeUndefinedValues = exports.getFileExtension = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function removeUndefinedValues(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, value]) => value !== undefined));
}
exports.removeUndefinedValues = removeUndefinedValues;
function getFileExtension(filename) {
    const ext = filename.split(".").pop();
    return ext ? ext : null;
}
exports.getFileExtension = getFileExtension;
function imageUrlToBase64(dataArray) {
    return dataArray.map((obj) => {
        if (obj.image && obj.image.url) {
            const filePath = path_1.default.join(__dirname, "../../../public", obj.image.url);
            try {
                const base64 = fs_1.default.readFileSync(filePath, { encoding: "base64" });
                obj.image.base64 = `data:image/${getFileExtension(obj.image.url)};base64,${base64}`;
            }
            catch (error) {
                console.error(`Error reading file at ${filePath}:`, error);
            }
        }
        return obj;
    });
}
exports.imageUrlToBase64 = imageUrlToBase64;
function getMeta(ctx, data) {
    const total = data.length;
    const pagination = ctx.query.pagination;
    return {
        ...pagination,
        start: (pagination === null || pagination === void 0 ? void 0 : pagination.start) !== undefined
            ? pagination === null || pagination === void 0 ? void 0 : pagination.start
            : (pagination === null || pagination === void 0 ? void 0 : pagination.limit) === "max"
                ? 0
                : undefined,
        limit: (pagination === null || pagination === void 0 ? void 0 : pagination.limit) === "max" ? 100 : undefined,
        total,
    };
}
exports.getMeta = getMeta;
