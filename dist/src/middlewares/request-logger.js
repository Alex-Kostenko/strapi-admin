module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
        // Log the request details
        strapi.log.info(`Incoming request: ${ctx.method} ${ctx.url}`);
        strapi.log.info(`Headers: ${JSON.stringify(ctx.headers)}`);
        if (ctx.method !== "GET") {
            strapi.log.info(`Body: ${JSON.stringify(ctx.request.body)}`);
        }
        await next(); // Pass control to the next middleware
        // Log the response status after processing
        strapi.log.info(`Response status: ${ctx.status}`);
    };
};
