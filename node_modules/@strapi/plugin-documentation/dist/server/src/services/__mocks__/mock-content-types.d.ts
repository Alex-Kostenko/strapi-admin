declare const _default: {
    'plugin::upload.file': {
        collectionName: string;
        info: {
            singularName: string;
            pluralName: string;
            displayName: string;
            description: string;
        };
        options: {};
        pluginOptions: {
            'content-manager': {
                visible: boolean;
            };
            'content-type-builder': {
                visible: boolean;
            };
        };
        attributes: {
            name: {
                type: string;
                configurable: boolean;
                required: boolean;
            };
            alternativeText: {
                type: string;
                configurable: boolean;
            };
            caption: {
                type: string;
                configurable: boolean;
            };
            width: {
                type: string;
                configurable: boolean;
            };
            height: {
                type: string;
                configurable: boolean;
            };
            formats: {
                type: string;
                configurable: boolean;
            };
            hash: {
                type: string;
                configurable: boolean;
                required: boolean;
            };
            ext: {
                type: string;
                configurable: boolean;
            };
            mime: {
                type: string;
                configurable: boolean;
                required: boolean;
            };
            size: {
                type: string;
                configurable: boolean;
                required: boolean;
            };
            url: {
                type: string;
                configurable: boolean;
                required: boolean;
            };
            previewUrl: {
                type: string;
                configurable: boolean;
            };
            provider: {
                type: string;
                configurable: boolean;
                required: boolean;
            };
            provider_metadata: {
                type: string;
                configurable: boolean;
            };
            related: {
                type: string;
                relation: string;
                configurable: boolean;
            };
            folder: {
                type: string;
                relation: string;
                target: string;
                inversedBy: string;
                private: boolean;
            };
            folderPath: {
                type: string;
                min: number;
                required: boolean;
                private: boolean;
            };
            createdAt: {
                type: string;
            };
            updatedAt: {
                type: string;
            };
            createdBy: {
                type: string;
                relation: string;
                target: string;
                configurable: boolean;
                writable: boolean;
                visible: boolean;
                useJoinTable: boolean;
                private: boolean;
            };
            updatedBy: {
                type: string;
                relation: string;
                target: string;
                configurable: boolean;
                writable: boolean;
                visible: boolean;
                useJoinTable: boolean;
                private: boolean;
            };
        };
        indexes: {
            name: string;
            columns: string[];
            type: null;
        }[];
        kind: string;
        modelType: string;
        modelName: string;
        uid: string;
        plugin: string;
        globalId: string;
    };
    'plugin::upload.folder': {
        collectionName: string;
        info: {
            singularName: string;
            pluralName: string;
            displayName: string;
        };
        options: {};
        pluginOptions: {
            'content-manager': {
                visible: boolean;
            };
            'content-type-builder': {
                visible: boolean;
            };
        };
        attributes: {
            name: {
                type: string;
                min: number;
                required: boolean;
            };
            pathId: {
                type: string;
                unique: boolean;
                required: boolean;
            };
            parent: {
                type: string;
                relation: string;
                target: string;
                inversedBy: string;
            };
            children: {
                type: string;
                relation: string;
                target: string;
                mappedBy: string;
            };
            files: {
                type: string;
                relation: string;
                target: string;
                mappedBy: string;
            };
            path: {
                type: string;
                min: number;
                required: boolean;
            };
            createdAt: {
                type: string;
            };
            updatedAt: {
                type: string;
            };
            createdBy: {
                type: string;
                relation: string;
                target: string;
                configurable: boolean;
                writable: boolean;
                visible: boolean;
                useJoinTable: boolean;
                private: boolean;
            };
            updatedBy: {
                type: string;
                relation: string;
                target: string;
                configurable: boolean;
                writable: boolean;
                visible: boolean;
                useJoinTable: boolean;
                private: boolean;
            };
        };
        indexes: {
            name: string;
            columns: string[];
            type: string;
        }[];
        kind: string;
        modelType: string;
        modelName: string;
        uid: string;
        plugin: string;
        globalId: string;
    };
    'api::kitchensink.kitchensink': {
        kind: string;
        collectionName: string;
        info: {
            displayName: string;
            singularName: string;
            pluralName: string;
            description: string;
            name: string;
        };
        pluginOptions: {};
        attributes: {
            short_text: {
                type: string;
            };
            long_text: {
                type: string;
            };
            rich_text: {
                type: string;
            };
            integer: {
                type: string;
            };
            biginteger: {
                type: string;
            };
            decimal: {
                type: string;
            };
            float: {
                type: string;
            };
            date: {
                type: string;
            };
            datetime: {
                type: string;
            };
            time: {
                type: string;
            };
            timestamp: {
                type: string;
            };
            boolean: {
                type: string;
            };
            email: {
                type: string;
            };
            password: {
                type: string;
            };
            enumeration: {
                type: string;
                enum: string[];
            };
            single_media: {
                type: string;
                multiple: boolean;
                required: boolean;
                allowedTypes: string[];
            };
            multiple_media: {
                type: string;
                multiple: boolean;
                required: boolean;
                allowedTypes: string[];
            };
            json: {
                type: string;
            };
            single_compo: {
                type: string;
                repeatable: boolean;
                component: string;
            };
            repeatable_compo: {
                type: string;
                repeatable: boolean;
                component: string;
            };
            dynamiczone: {
                type: string;
                components: string[];
            };
            one_way_tag: {
                type: string;
                relation: string;
                target: string;
            };
            one_to_one_tag: {
                type: string;
                relation: string;
                target: string;
                private: boolean;
                inversedBy: string;
            };
            one_to_many_tags: {
                type: string;
                relation: string;
                target: string;
                mappedBy: string;
            };
            many_to_one_tag: {
                type: string;
                relation: string;
                target: string;
                inversedBy: string;
            };
            many_to_many_tags: {
                type: string;
                relation: string;
                target: string;
                inversedBy: string;
            };
            many_way_tags: {
                type: string;
                relation: string;
                target: string;
            };
            morph_to_one: {
                type: string;
                relation: string;
            };
            morph_to_many: {
                type: string;
                relation: string;
            };
            custom_field: {
                type: string;
                customField: string;
            };
            custom_field_with_default_options: {
                type: string;
                regex: string;
                customField: string;
            };
            cats: {
                type: string;
                components: string[];
            };
            createdAt: {
                type: string;
            };
            updatedAt: {
                type: string;
            };
            publishedAt: {
                type: string;
                configurable: boolean;
                writable: boolean;
                visible: boolean;
            };
            createdBy: {
                type: string;
                relation: string;
                target: string;
                configurable: boolean;
                writable: boolean;
                visible: boolean;
                useJoinTable: boolean;
                private: boolean;
            };
            updatedBy: {
                type: string;
                relation: string;
                target: string;
                configurable: boolean;
                writable: boolean;
                visible: boolean;
                useJoinTable: boolean;
                private: boolean;
            };
        };
        modelType: string;
        modelName: string;
        uid: string;
        apiName: string;
        globalId: string;
        actions: {};
        lifecycles: {};
    };
    'api::homepage.homepage': {
        kind: string;
        collectionName: string;
        info: {
            displayName: string;
            singularName: string;
            pluralName: string;
        };
        pluginOptions: {
            i18n: {
                localized: boolean;
            };
        };
        attributes: {
            title: {
                type: string;
                required: boolean;
                pluginOptions: {
                    i18n: {
                        localized: boolean;
                    };
                };
            };
            slug: {
                type: string;
                targetField: string;
                required: boolean;
                pluginOptions: {
                    i18n: {
                        localized: boolean;
                    };
                };
            };
        };
    };
};
export default _default;
//# sourceMappingURL=mock-content-types.d.ts.map