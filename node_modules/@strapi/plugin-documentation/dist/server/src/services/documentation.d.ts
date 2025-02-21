import type { Core } from '@strapi/types';
export type Version = {
    version: string;
    generatedDate: string;
    url: string;
};
export type DocumentationService = ReturnType<typeof createService>;
declare const createService: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    getDocumentationVersion(): string;
    getFullDocumentationPath(): string;
    getDocumentationVersions(): Version[];
    /**
     * Returns settings stored in core-store
     */
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
    /**
     * @description - Creates the Swagger json files
     */
    generateFullDoc(versionOpt?: string): Promise<void>;
};
export default createService;
//# sourceMappingURL=documentation.d.ts.map