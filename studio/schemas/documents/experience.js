export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'sortDate',
      title: 'Sort Date',
      type: 'datetime',
      description: 'Used for sorting — not to be displayed',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    },
    {
      name: 'jobTag',
      title: 'Job Tag',
      type: 'tag',
      options: {
        includeFromRelated: 'jobTag',
      },
    },
    {
      name: 'roleTag',
      title: 'Role Tag',
      type: 'tag',
      options: {
        includeFromRelated: 'roleTag',
      },
    },
    {
      name: 'techTags',
      title: 'Tech Tags',
      type: 'tags',
      options: {
        includeFromRelated: 'techTags',
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  orderings: [
    {
      title: 'SortDate',
      name: 'sortDateDesc',
      by: [{ field: 'sortDate', direction: 'desc' }],
    },
  ],
}
