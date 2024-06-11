import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sanity({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
    useCdn: false, // See note on using the CDN
    apiVersion: "2024-06-11", // insert the current date to access the latest version of the API
    studioBasePath: '/admin'
  })]
});