/// <reference types="koa" />
declare const _default: ({
    method: string;
    path: string;
    handler: string;
    config: {
        auth: boolean;
        middlewares: ((ctx: import("koa").Context, next: import("koa").Next) => Promise<any>)[];
        policies?: undefined;
    };
} | {
    method: string;
    path: string;
    handler: string;
    config: {
        auth: boolean;
        middlewares?: undefined;
        policies?: undefined;
    };
} | {
    method: string;
    path: string;
    handler: string;
    config: {
        policies: {
            name: string;
            config: {
                actions: string[];
            };
        }[];
        auth?: undefined;
        middlewares?: undefined;
    };
})[];
export default _default;
//# sourceMappingURL=index.d.ts.map