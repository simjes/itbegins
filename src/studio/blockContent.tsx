import type { ReactNode } from 'react';
import { defineArrayMember, defineField, defineType } from 'sanity';

const customRender = ({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) => <span style={{ backgroundColor: color }}>{children}</span>;

const highlightRender = (props: any) =>
  customRender({ ...props, color: 'yellow' });

const mdCodeRender = (props: any) =>
  customRender({ ...props, color: 'hotpink' });

const importantRender = (props: any) =>
  customRender({ ...props, color: 'blue' });

export const blockContent = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          {
            title: 'Code',
            value: 'mdCode',
            icon: () => 'MdCode',
            component: mdCodeRender,
          },
          {
            title: 'Important',
            value: 'important',
            icon: () => 'Important',
            component: importantRender,
          },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          {
            title: 'Highlight',
            value: 'highlight',
            icon: () => 'H',
            component: highlightRender,
          },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      fields: [
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }),
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          validation: (Rule) =>
            Rule.error('You have to fill out the alternative text.').required(),
        }),
      ],
      options: { hotspot: true },
      preview: {
        select: {
          imageUrl: 'asset.url',
          title: 'caption',
        },
      },
    }),
    defineArrayMember({
      type: 'code',
      options: {
        languageAlternatives: [
          { title: 'TSX', value: 'tsx' },
          { title: 'Swift', value: 'swift', mode: 'swift' },
        ],
      },
    }),
    defineArrayMember({
      type: 'codeSandbox',
    }),
  ],
});
