import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({

  name: 'default',

  types: schemaTypes.concat([
    {
      name: "presentation",
      type: "document",
      title: "Presentations",
      fields: [
        {
          name: "title", 
          type: "string", 
          title: "Title",
          validation: Rule => Rule.required()
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: 'title',
            maxLength: 96
          }
        },
        {
          title: 'Poster',
          name: 'poster',
          type: 'image',
        },
        {
          title: 'Published Google Slides URL',
          name: 'slidesUrl',
          type: 'url'
        },
        {
          title: 'Published Google Sites URL',
          name: 'sitesURL',
          type: 'url'
        }
      ]
    }
  ])
})