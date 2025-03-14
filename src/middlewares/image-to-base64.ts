import { Context, Next } from "koa";
import { getMeta, imageUrlToBase64, removeUndefinedValues } from "../utils";
export default (config: Record<string, unknown>, { strapi }) => {
  return async (ctx: Context, next: Next) => {
    const allowedPaths = /\/api\/\/*/i;

    if (!ctx.request.path.match(allowedPaths)) {
      console.log("now allowed");

      await next();

      return ctx;
    }
    await next();

    if (ctx.response && ctx.response.body) {
      const response = ctx.response.body as {
        data?: Record<string, any>[];
        meta: Record<string, any>;
      };

      ctx.body = {
        data: imageUrlToBase64(response.data),
        meta: removeUndefinedValues(getMeta(ctx, response.data)),
      };
    }
  };
};
