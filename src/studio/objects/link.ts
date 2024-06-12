import { defineField, defineType } from 'sanity';

export const link = defineType({
  title: 'URL',
  name: 'link',
  type: 'object',
  fields: [
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['https', 'mailto', 'tel'],
        }),
    }),
    defineField({
      title: 'Link content',
      name: 'linkContent',
      type: 'string',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      title: 'aria-label',
      name: 'linkAriaLabel',
      type: 'string',
    }),
    defineField({
      title: 'Open in new tab',
      name: 'blank',
      description: 'Read https://css-tricks.com/use-target_blank/',
      type: 'boolean',
    }),
  ],
});
