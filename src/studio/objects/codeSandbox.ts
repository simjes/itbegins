import { defineField, defineType } from 'sanity';

export const codeSandbox = defineType({
  type: 'object',
  name: 'codeSandbox',
  title: 'Code Sandbox embed',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      description: 'The Code Sandbox url',
    }),
  ],
});
