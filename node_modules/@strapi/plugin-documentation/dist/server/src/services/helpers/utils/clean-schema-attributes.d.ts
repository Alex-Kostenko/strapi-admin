import type { Struct } from '@strapi/types';
import type { OpenAPIV3 } from 'openapi-types';
interface Options {
    typeMap?: Map<string, boolean>;
    isRequest?: boolean;
    didAddStrapiComponentsToSchemas: (name: string, schema: object) => boolean;
}
/**
 * @description - Converts types found on attributes to OpenAPI acceptable data types
 *
 * @returns Attributes using OpenAPI acceptable data types
 */
declare const cleanSchemaAttributes: (attributes: Struct.SchemaAttributes, { typeMap, isRequest, didAddStrapiComponentsToSchemas }: Options) => Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>;
export default cleanSchemaAttributes;
//# sourceMappingURL=clean-schema-attributes.d.ts.map