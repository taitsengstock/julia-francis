export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'headerText',
      title: 'Header Text',
      type: 'text',
      rows: 3,
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      rows: 3,
    },
  ],
}
