import 'server-only'
import { apiVersion, dataset, projectId, token } from '../env'
import { createClient } from 'next-sanity'

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
})

if (!writeClient.config().token) {
  throw new Error('Write token not found.')
}
