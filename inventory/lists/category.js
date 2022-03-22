import { createHash } from "crypto";

import { Text, Slug, File, Url, Select, Relationship, DateTime, Checkbox } from '@keystonejs/fields';
import { Wysiwyg } from '@keystonejs/fields-wysiwyg-tinymce';
import { atTracking, byTracking } from '@keystonejs/list-plugins';

import { userIsAdmin, userIsAdminOrOwner, userIsAuth } from '../lib/list/access';
import { imageAdapter } from '../lib/list/adapters';
import { sendEmail } from '../lib/emails';

export const  Category    = {
  access: {
    read: true,
    update: userIsAdminOrOwner,
    create: userIsAuth,
    delete: userIsAdmin,
  },
  fields: {
    title :{type:Text},
    description: {type: Wysiwyg},
    image: { type: File, adapter: imageAdapter },
    updatedAt: {type: DateTime },
    parent_category: {type: Relationship, ref: 'Category'}
 },
  // hooks
  hooks: {
    afterDelete: ({ existingItem }) => {
      if (existingItem.image) {
        fileAdapter.delete(existingItem.image);
      }
    },
  },
  plugins: [atTracking(), byTracking()],
//   adminConfig: {
//     defaultColumns: 'title,'
//   },
  
};