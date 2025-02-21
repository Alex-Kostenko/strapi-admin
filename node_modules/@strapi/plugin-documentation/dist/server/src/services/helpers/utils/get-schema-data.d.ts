import type { OpenAPIV3 } from 'openapi-types';
/**
 * @description Determines the format of the data response
 *
 * @param {boolean} isListOfEntities - Checks for a multiple entities
 * @param {object} attributes - The attributes found on a contentType

 * @returns object | array of attributes
 */
declare const _default: (isListOfEntities: boolean, attributes: Record<string, OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject>) => OpenAPIV3.SchemaObject;
export default _default;
//# sourceMappingURL=get-schema-data.d.ts.map