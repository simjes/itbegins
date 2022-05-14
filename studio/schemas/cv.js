export default {
  name: 'cv',
  title: 'CV',
  type: 'document',
  fields: [
    {
      name: 'summary',
      title: 'Summary',
      type: 'blockContent',
    },
    {
      name: 'businessTags',
      title: 'Business Tags',
      type: 'tags',
    },
    {
      name: 'techTags',
      title: 'Tech Tags',
      type: 'tags',
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'cvEntry' } }],
    },
  ],
}
