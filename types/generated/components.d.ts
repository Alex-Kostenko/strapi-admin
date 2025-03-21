import type { Schema, Struct } from '@strapi/strapi';

export interface ContentContent extends Struct.ComponentSchema {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true>;
    text: Schema.Attribute.Text;
  };
}

export interface InsightContentInsightContent extends Struct.ComponentSchema {
  collectionName: 'components_insight_content_insight_contents';
  info: {
    displayName: 'Insight Content';
  };
  attributes: {
    content: Schema.Attribute.Component<'content.content', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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

export interface ListWithSubtitleListWithSubTitle
  extends Struct.ComponentSchema {
  collectionName: 'components_list_with_subtitle_list_with_sub_titles';
  info: {
    displayName: 'List With SubTitle';
  };
  attributes: {
    items: Schema.Attribute.Component<'list-item.list-item', true>;
    subTitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface StepListItemStepListItem extends Struct.ComponentSchema {
  collectionName: 'components_step_list_item_step_list_items';
  info: {
    displayName: 'Step List Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StepListStepList extends Struct.ComponentSchema {
  collectionName: 'components_step_list_step_lists';
  info: {
    displayName: 'Step List';
  };
  attributes: {
    items: Schema.Attribute.Component<'step-list-item.step-list-item', true>;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
      'content.content': ContentContent;
      'insight-content.insight-content': InsightContentInsightContent;
      'list-item-with-title.list-item-with-title': ListItemWithTitleListItemWithTitle;
      'list-item-with-year.list-item-with-year': ListItemWithYearListItemWithYear;
      'list-item.list-item': ListItemListItem;
      'list-with-subtitle.list-with-sub-title': ListWithSubtitleListWithSubTitle;
      'list-with-titles.list-with-titles': ListWithTitlesListWithTitles;
      'list-with-years.list-with-years': ListWithYearsListWithYears;
      'list.list': ListList;
      'skill.skill': SkillSkill;
      'stack.stack': StackStack;
      'step-list-item.step-list-item': StepListItemStepListItem;
      'step-list.step-list': StepListStepList;
      'technology.technology': TechnologyTechnology;
      'work-schedule.work-schedule': WorkScheduleWorkSchedule;
    }
  }
}
