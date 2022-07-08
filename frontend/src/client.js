import sanityClient from '@sanity/client'
import imgageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '',
    dataset: '',
    apiVersion: '',
    useCdn: true,
    token: '',
})