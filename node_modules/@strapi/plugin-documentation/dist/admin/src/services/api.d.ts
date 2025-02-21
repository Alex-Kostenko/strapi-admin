import { DocumentInfos } from '../types';
type SettingsInput = {
    restrictedAccess: boolean;
    password: string;
};
export declare const useGetInfoQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@strapi/admin/strapi-admin").QueryArguments, unknown, import("@strapi/admin/strapi-admin").BaseQueryError, {}, {}>, "DocumentInfo", DocumentInfos, "adminApi">>, useDeleteVersionMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<{
    version: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@strapi/admin/strapi-admin").QueryArguments, unknown, import("@strapi/admin/strapi-admin").BaseQueryError, {}, {}>, "DocumentInfo", void, "adminApi">>, useUpdateSettingsMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<{
    body: SettingsInput;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@strapi/admin/strapi-admin").QueryArguments, unknown, import("@strapi/admin/strapi-admin").BaseQueryError, {}, {}>, "DocumentInfo", void, "adminApi">>, useRegenerateDocMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<{
    version: string;
}, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@strapi/admin/strapi-admin").QueryArguments, unknown, import("@strapi/admin/strapi-admin").BaseQueryError, {}, {}>, "DocumentInfo", void, "adminApi">>;
export {};
