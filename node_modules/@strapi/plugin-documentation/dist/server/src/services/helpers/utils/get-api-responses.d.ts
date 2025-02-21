import type { OpenAPIV3 } from 'openapi-types';
interface Options {
    uniqueName: string;
    route: {
        method: string;
    };
    isListOfEntities?: boolean;
    isLocalizationPath?: boolean;
}
/**
 * @description - Builds the Swagger response object for a given api
 */
declare const getApiResponse: ({ uniqueName, route, isListOfEntities, }: Options) => OpenAPIV3.ResponsesObject;
export default getApiResponse;
//# sourceMappingURL=get-api-responses.d.ts.map