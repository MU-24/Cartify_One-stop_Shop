// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })

import SanityClient from "@sanity/client";

const client = SanityClient({
  projectId: "-----", // replace with your Sanity project ID
  dataset: "production", // replace with your dataset name
  apiVersion: "2024-07-23", // use a specific date or 'v1' for the latest version
  useCdn: false, // `false` if you want fresh data
});

export default client;
