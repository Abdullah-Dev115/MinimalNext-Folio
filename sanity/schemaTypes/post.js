import { Book } from '@mynaui/icons-react'
import { defineField, defineType } from 'sanity'

// Post Content Type
export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: Book,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cover',
      type: 'image',
    }),
    defineField({
      name: 'views',
      type: 'number',
    }),
    defineField({
      name: 'tag',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) =>
        Rule.min(1)
          .max(20)
          .required()
          .unique()
          .error('Please Insert a Tag for the Project'),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' }, // Regular text content
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image Caption',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    }),
  ],
})
