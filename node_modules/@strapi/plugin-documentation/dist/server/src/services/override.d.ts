import type { Core } from '@strapi/types';
import type { PluginConfig } from '../types';
export type OverrideService = ReturnType<typeof createService>;
declare const createService: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    registeredOverrides: Partial<PluginConfig>[];
    excludedFromGeneration: string[];
    /**
     *
     * @param {(string | string[])} api - The name of the api or and array of apis to exclude from generation
     */
    excludeFromGeneration(api: string | string[]): void;
    isEnabled(name: string): boolean;
    registerOverride(override: Partial<PluginConfig>, opts?: {
        pluginOrigin: string;
        excludeFromGeneration?: string[];
    }): void;
};
export default createService;
//# sourceMappingURL=override.d.ts.map