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
function imageUrlToBase64(data) {
    if (Array.isArray(data)) {
        return data.map(imageUrlToBase64);
    }
    else if (typeof data === "object" && data !== null) {
        const newData = { ...data };
        for (const key in newData) {
            if (typeof newData[key] === "object" && newData[key] !== null) {
                if ("url" in newData[key] && typeof newData[key].url === "string") {
                    const filePath = path_1.default.join(__dirname, "../../../public", newData[key].url);
                    try {
                        const base64 = fs_1.default.readFileSync(filePath, { encoding: "base64" });
                        newData[key] = {
                            ...newData[key],
                            base64: `data:image/${getFileExtension(newData[key].url)};base64,${base64}`,
                        };
                    }
                    catch (error) {
                        console.error(`Error reading file at ${filePath}:`, error);
                    }
                }
                else if (Array.isArray(newData[key])) {
                    newData[key] = newData[key].map((item) => {
                        if (typeof item === "object" && item !== null && "url" in item) {
                            const filePath = path_1.default.join(__dirname, "../../../public", item.url);
                            try {
                                const base64 = fs_1.default.readFileSync(filePath, {
                                    encoding: "base64",
                                });
                                return (item = {
                                    ...item,
                                    base64: `data:image/${getFileExtension(item.url)};base64,${base64}`,
                                });
                            }
                            catch (error) {
                                console.error(`Error reading file at ${filePath}:`, error);
                            }
                        }
                        return imageUrlToBase64(item);
                    });
                }
                else {
                    newData[key] = imageUrlToBase64(newData[key]);
                }
            }
        }
        return newData;
    }
    return data;
}
exports.imageUrlToBase64 = imageUrlToBase64;
function getMeta(ctx, data) {
    if (!data)
        return {};
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
