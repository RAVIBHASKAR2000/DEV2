import { createHash } from "crypto";

import { Text, Slug, File, Url, Select, Relationship, DateTimeUtc, Checkbox, Integer } from '@keystonejs/fields';
import { Wysiwyg } from '@keystonejs/fields-wysiwyg-tinymce';
import { atTracking, byTracking } from '@keystonejs/list-plugins';

import { userIsAdmin, userIsAdminOrOwner, userIsAuth } from '../lib/list/access';
import { imageAdapter } from '../lib/list/adapters';
import { sendEmail } from '../lib/emails';

export const  Cart    = {
  access: {
    read: true,
    update: true,
    create: true,
    delete: true,
  },
  fields: {
    // products:{type:Relationship, ref:'CartItems'},
    user:{type:Relationship, ref:'User'},
    address:{type:Relationship, ref:'Address'},
    status:{type:Select, options:'New, Paid, Cancelled'},
    product: {type: Relationship, ref: 'Product'},
    count: {type: Integer}

 },
  // hooks
  hooks: {
    afterDelete: ({ existingItem }) => {
      if (existingItem.user) {
        //fileAdapter.delete(existingItem.image);
      }
    },
  },
  plugins: [atTracking(), byTracking()],
//   adminConfig: {
//     defaultColumns: 'addressType, receiverName, phoneNum'
//   },
  
};