import { defineField, defineType } from 'sanity';

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'sortDate',
      title: 'Sort Date',
      type: 'datetime',
      description: 'Used for sorting — not to be displayed',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),
    defineField({
      name: 'jobTag',
      title: 'Job Tag',
      type: 'tag',
      options: {
        includeFromRelated: 'jobTag',
      },
    }),
    defineField({
      name: 'roleTag',
      title: 'Role Tag',
      type: 'tag',
      options: {
        includeFromRelated: 'roleTag',
      },
    }),
    defineField({
      name: 'techTags',
      title: 'Tech Tags',
      type: 'tags',
      options: {
        includeFromRelated: 'techTags',
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  orderings: [
    {
      title: 'SortDate',
      name: 'sortDateDesc',
      by: [{ field: 'sortDate', direction: 'desc' }],
    },
  ],
});
