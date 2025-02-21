import type Koa from 'koa';
declare const _default: {
    getInfos(ctx: Koa.Context): Promise<void>;
    index(ctx: Koa.Context, next: Koa.Next): Promise<any>;
    loginView(ctx: Koa.Context, next: Koa.Next): Promise<any>;
    login(ctx: Koa.Context): Promise<void>;
    regenerateDoc(ctx: Koa.Context): Promise<Koa.Context | undefined>;
    deleteDoc(ctx: Koa.Context): Promise<Koa.Context | undefined>;
    updateSettings(ctx: Koa.Context): Promise<any>;
};
export default _default;
//# sourceMappingURL=documentation.d.ts.map