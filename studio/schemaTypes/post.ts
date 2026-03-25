import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Incident Report',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Report Subject',
    }),
    // 1. THE MAIN IMAGE SLOT (For the Dossier Header)
    defineField({
      name: 'mainImage',
      title: 'Evidence Photo',
      type: 'image',
      description: 'The primary visual record for this incident.',
      options: {
        hotspot: true, // Allows you to crop the face/subject in the Studio
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Describe the visual for the blind/accessibility.',
        },
      ],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Registry URL',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'severity',
      type: 'string',
      title: 'Security Level',
      options: {
        list: [
          {title: 'Standard', value: 'standard'},
          {title: 'Elevated', value: 'elevated'},
          {title: 'Maximum', value: 'maximum'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Log Timestamp',
    }),
    // 2. THE LOG BODY (Now allows images inside the text)
    defineField({
      name: 'body',
      type: 'array',
      title: 'Detailed Log',
      of: [
        {type: 'block'},
        {
          type: 'image',
          title: 'In-line Evidence',
          options: {hotspot: true},
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Log Caption',
            },
          ],
        },
      ],
    }),
  ],
})
