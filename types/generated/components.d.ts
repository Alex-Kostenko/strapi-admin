import type { Schema, Struct } from '@strapi/strapi';

export interface ListItemWithTitleListItemWithTitle
  extends Struct.ComponentSchema {
  collectionName: 'components_list_item_with_title_list_item_with_titles';
  info: {
    displayName: 'List Item With Title';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListItemWithYearListItemWithYear
  extends Struct.ComponentSchema {
  collectionName: 'components_list_item_with_year_list_item_with_years';
  info: {
    displayName: 'List item with year';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 2019;
        },
        number
      >;
  };
}

export interface ListItemListItem extends Struct.ComponentSchema {
  collectionName: 'components_list_item_list_items';
  info: {
    description: '';
    displayName: 'ListItem';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ListWithTitlesListWithTitles extends Struct.ComponentSchema {
  collectionName: 'components_list_with_titles_list_with_titles';
  info: {
    displayName: 'List With Titles';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'list-item-with-title.list-item-with-title',
      true
    >;
  };
}

export interface ListWithYearsListWithYears extends Struct.ComponentSchema {
  collectionName: 'components_list_with_years_list_with_years';
  info: {
    displayName: 'List with years';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'list-item-with-year.list-item-with-year',
      true
    >;
  };
}

export interface ListList extends Struct.ComponentSchema {
  collectionName: 'components_list_lists';
  info: {
    description: '';
    displayName: 'List';
  };
  attributes: {
    items: Schema.Attribute.Component<'list-item.list-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SkillSkill extends Struct.ComponentSchema {
  collectionName: 'components_skill_skill_s';
  info: {
    displayName: 'skill ';
    icon: 'cursor';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StackStack extends Struct.ComponentSchema {
  collectionName: 'components_stack_stacks';
  info: {
    displayName: 'Stack';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      [
        'ReactJS',
        'Redux',
        'NextJS',
        'JavaScript',
        'TypeScript',
        'Astro',
        'Figma',
        'NestJS',
        'Node.js',
        'Express.js',
        'PrismaORM',
        'TypeORM',
        'SQL',
        'NoSQL',
        'AWS',
        'Azure',
        'Docker',
        'Kubernetes',
        'Terraform',
        'Jenkins',
        'Shell',
        'Vitest',
        'Jest',
        'Git',
        'GitHub',
        'GitLab',
        'Bitbucket',
        'Jira',
      ]
    >;
  };
}

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

export interface WorkScheduleWorkSchedule extends Struct.ComponentSchema {
  collectionName: 'components_work_schedule_work_schedules';
  info: {
    description: '';
    displayName: 'Work schedule';
    icon: 'archive';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      ['Full-time', 'Part-time', 'Remote', 'Office', 'Hybrid']
    > &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'list-item-with-title.list-item-with-title': ListItemWithTitleListItemWithTitle;
      'list-item-with-year.list-item-with-year': ListItemWithYearListItemWithYear;
      'list-item.list-item': ListItemListItem;
      'list-with-titles.list-with-titles': ListWithTitlesListWithTitles;
      'list-with-years.list-with-years': ListWithYearsListWithYears;
      'list.list': ListList;
      'skill.skill': SkillSkill;
      'stack.stack': StackStack;
      'technology.technology': TechnologyTechnology;
      'work-schedule.work-schedule': WorkScheduleWorkSchedule;
    }
  }
}
