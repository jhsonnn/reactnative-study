import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schema} from './schema'

export default defineConfig({
  name: 'default',
  title: 'Delivery App',

  projectId: '63n97e5v',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema,
  },
})
