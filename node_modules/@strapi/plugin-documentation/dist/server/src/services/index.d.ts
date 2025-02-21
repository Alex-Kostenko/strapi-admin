import { type DocumentationService } from './documentation';
import { type OverrideService } from './override';
declare const _default: {
    documentation: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        getDocumentationVersion(): string;
        getFullDocumentationPath(): string;
        getDocumentationVersions(): import("./documentation").Version[];
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
        registeredOverrides: Partial<import("../types").PluginConfig>[];
        excludedFromGeneration: string[];
        excludeFromGeneration(api: string | string[]): void;
        isEnabled(name: string): boolean;
        registerOverride(override: Partial<import("../types").PluginConfig>, opts?: {
            pluginOrigin: string;
            excludeFromGeneration?: string[] | undefined;
        } | undefined): void;
    };
};
export default _default;
export type Services = {
    documentation: DocumentationService;
    override: OverrideService;
};
//# sourceMappingURL=index.d.ts.map