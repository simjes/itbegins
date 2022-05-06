import PicoSanity from 'picosanity'
import { sanityConfig } from './config'

// Standard client for fetching data
export const sanityClient = new PicoSanity(sanityConfig)

// Authenticated client for fetching draft documents
// export const previewClient = new PicoSanity({
//   ...sanityConfig,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN ?? ``, // TODO: process not available in cloudflare pages
// })

// Helper function to choose the correct client
export const getClient = (usePreview = false) => sanityClient
// usePreview ? previewClient : sanityClient
