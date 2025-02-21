/// <reference types="koa" />
import { bootstrap } from './bootstrap';
import { register } from './register';
declare const _default: {
    bootstrap: typeof bootstrap;
    config: {
        default: import("./types").PluginConfig;
    };
    routes: ({
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
    controllers: {
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
    register: typeof register;
    services: {
        documentation: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            getDocumentationVersion(): string;
            getFullDocumentationPath(): string;
            getDocumentationVersions(): import("./services/documentation").Version[];
            getDocumentationAccess(): Promise<{
                restrictedAccess: boolean;
            }>;
            getApiDocumentationPath(api: {
                name: string;
                getter: string;
            }): string;
            deleteDocumentation(version: string): Promise<void>;
            getPluginAndApiInfo(): {
                name: string;
                getter: string;
                ctNames: string[];
            }[];
            generateFullDoc(versionOpt?: string | undefined): Promise<void>;
        };
        override: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            registeredOverrides: Partial<import("./types").PluginConfig>[];
            excludedFromGeneration: string[];
            excludeFromGeneration(api: string | string[]): void;
            isEnabled(name: string): boolean;
            registerOverride(override: Partial<import("./types").PluginConfig>, opts?: {
                pluginOrigin: string;
                excludeFromGeneration?: string[] | undefined;
            } | undefined): void;
        };
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map