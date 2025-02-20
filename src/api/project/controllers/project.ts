import { Context } from "koa";
import { factories } from "@strapi/strapi";
import {
  getMeta,
  imageUrlToBase64,
  removeUndefinedValues,
} from "../../../utils";

export default factories.createCoreController(
  "api::project.project",
  ({ strapi }) => ({
    async find(ctx: Context) {
      const data = await strapi.entityService.findMany("api::project.project", {
        ...ctx.query,
      });

      const response = imageUrlToBase64(data);

      const meta = getMeta(ctx, data);

      ctx.body = { data: response, meta: removeUndefinedValues(meta) };
    },
  })
);
