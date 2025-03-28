import { Context, Next } from 'koa';
import { getMeta, imageUrlToBase64, removeUndefinedValues } from '../utils';
import { formatImageResponse } from '../utils/format.image.response';
export default (config: Record<string, unknown>, { strapi }) => {
  return async (ctx: Context, next: Next) => {
    const allowedPaths = /\/api\/\/*/i;

    if (!ctx.request.path.match(allowedPaths)) {
      await next();

      return ctx;
    }
    await next();

    if (ctx.response && ctx.response.body) {
      const response = ctx.response.body as {
        data?: Record<string, any>[];
        meta: Record<string, any>;
      };

      const data = await formatImageResponse(response.data);

      ctx.body = {
        data,
        meta: removeUndefinedValues(getMeta(ctx, response.data)),
      };
    }
  };
};
