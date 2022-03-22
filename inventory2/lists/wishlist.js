import { createHash } from "crypto";

import { Text, Slug, File, Url, Select, Relationship, DateTimeUtc, Checkbox,DateTime, Integer } from '@keystonejs/fields';
import { Wysiwyg } from '@keystonejs/fields-wysiwyg-tinymce';
import { atTracking, byTracking } from '@keystonejs/list-plugins';

import { userIsAdmin, userIsAdminOrOwner, userIsAuth } from '../lib/list/access';
import { imageAdapter } from '../lib/list/adapters';
import { sendEmail } from '../lib/emails';

export const  Wishlist   = {
  access: {
    read: true,
    update: userIsAdminOrOwner,
    create: userIsAuth,
    delete: userIsAdmin,
  },
  fields: {
    product: {type:Relationship, ref:'Product'},
    noOfItems: {type: Integer},


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