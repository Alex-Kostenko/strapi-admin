/// <reference types="koa" />
declare const _default: {
    documentation: {
        getInfos(ctx: import("koa").Context): Promise<void>;
        index(ctx: import("koa").Context, next: import("koa").Next): Promise<any>;
        loginView(ctx: import("koa").Context, next: import("koa").Next): Promise<any>;
        login(ctx: import("koa").Context): Promise<void>;
        regenerateDoc(ctx: import("koa").Context): Promise<import("koa").Context | undefined>;
        deleteDoc(ctx: import("koa").Context): Promise<import("koa").Context | undefined>;
        updateSettings(ctx: import("koa").Context): Promise<any>;
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map