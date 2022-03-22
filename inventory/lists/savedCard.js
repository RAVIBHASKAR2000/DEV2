import { createHash } from "crypto";

import { Text, Slug, File, Url, Select, Relationship, DateTimeUtc, Checkbox } from '@keystonejs/fields';
import { Wysiwyg } from '@keystonejs/fields-wysiwyg-tinymce';
import { atTracking, byTracking } from '@keystonejs/list-plugins';

import { userIsAdmin, userIsAdminOrOwner, userIsAuth } from '../lib/list/access';
import { imageAdapter } from '../lib/list/adapters';
import { sendEmail } from '../lib/emails';

export const  SavedCard    = {
  access: {
    read: true,
    update: userIsAdminOrOwner,
    create: userIsAuth,
    delete: userIsAdmin,
  },
  fields: {
   cardHolderName :{type:Text},
   cardNum : {type: Text},
   cardExpirydate:{type :Text},
   user: {type: Relationship, ref:'User'}

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