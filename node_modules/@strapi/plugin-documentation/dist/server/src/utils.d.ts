import type { Core } from '@strapi/types';
import type { Services } from './services';
export declare const getService: <TName extends keyof Services>(name: TName, { strapi }?: {
    strapi: Core.Strapi;
}) => Services[TName];
declare const _default: {
    getService: <TName extends keyof Services>(name: TName, { strapi }?: {
        strapi: Core.Strapi;
    }) => Services[TName];
};
export default _default;
//# sourceMappingURL=utils.d.ts.map