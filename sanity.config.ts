import schemaTypes from './src/studio/schema';
import { codeInput } from '@sanity/code-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { tags } from 'sanity-plugin-tags';
import { structureTool } from 'sanity/structure';

const config = defineConfig({
  name: 'itbegins',
  title: 'IT Begins',
  projectId:
    import.meta.env.PUBLIC_SANITY_PROJECT_ID ||
    process.env.PUBLIC_SANITY_PROJECT_ID ||
    '',
  dataset:
    import.meta.env.PUBLIC_SANITY_DATASET ||
    process.env.PUBLIC_SANITY_DATASET ||
    '',
  plugins: [
    ...(import.meta.env.PROD
      ? [structureTool()]
      : [structureTool(), visionTool()]),
    codeInput(),
    unsplashImageAsset(),
    tags(),
  ],
  schema: {
    types: schemaTypes,
  },
});

export default config;
