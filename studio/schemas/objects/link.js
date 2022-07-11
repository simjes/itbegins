export default {
  title: 'URL',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https', 'mailto', 'tel'],
        }),
    },
    {
      title: 'Link content',
      name: 'linkContent',
      type: 'string',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: 'aria-label',
      name: 'linkAriaLabel',
      type: 'string',
    },
    {
      title: 'Open in new tab',
      name: 'blank',
      description: 'Read https://css-tricks.com/use-target_blank/',
      type: 'boolean',
    },
  ],
}
