"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
exports.default = (config, { strapi }) => {
    return async (ctx, next) => {
        const allowedPaths = /\/api\/\/*/i;
        if (!ctx.request.path.match(allowedPaths)) {
            console.log("now allowed");
            await next();
            return ctx;
        }
        await next();
        if (ctx.response && ctx.response.body) {
            const response = ctx.response.body;
            ctx.body = {
                data: (0, utils_1.imageUrlToBase64)(response.data),
                meta: (0, utils_1.removeUndefinedValues)((0, utils_1.getMeta)(ctx, response.data)),
            };
        }
    };
};
