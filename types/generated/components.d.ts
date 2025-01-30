import type { Schema, Struct } from '@strapi/strapi';

export interface TechnologyTechnology extends Struct.ComponentSchema {
  collectionName: 'components_technology_technologies';
  info: {
    displayName: 'Technology';
    icon: 'apps';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'technology.technology': TechnologyTechnology;
    }
  }
}
