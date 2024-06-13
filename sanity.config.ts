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
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.PUBLIC_SANITY_DATASET || '',
  plugins: [
    structureTool(),
    codeInput(),
    visionTool(),
    unsplashImageAsset(),
    tags(),
  ],
  schema: {
    types: schemaTypes,
  },
});

export default config;
