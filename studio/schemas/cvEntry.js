export default {
  title: 'CV Entry',
  name: 'cvEntry',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Start Date',
      name: 'startDate',
      type: 'date',
    },
    {
      title: 'End Date',
      name: 'endDate',
      type: 'date',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'tags',
    },
  ],
}
