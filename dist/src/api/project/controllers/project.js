"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const utils_1 = require("../../../utils");
exports.default = strapi_1.factories.createCoreController("api::project.project", ({ strapi }) => ({
    async find(ctx) {
        const data = await strapi.entityService.findMany("api::project.project", {
            ...ctx.query,
        });
        const response = (0, utils_1.imageUrlToBase64)(data);
        const meta = (0, utils_1.getMeta)(ctx, data);
        ctx.body = { data: response, meta: (0, utils_1.removeUndefinedValues)(meta) };
    },
}));
