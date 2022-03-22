import { createHash } from "crypto";

import { Text, Decimal } from '@keystonejs/fields';
import { atTracking, byTracking } from '@keystonejs/list-plugins';

import { userIsAdmin, userIsAdminOrOwner, userIsAuth } from '../lib/list/access';
import { imageAdapter } from '../lib/list/adapters';
import { sendEmail } from '../lib/emails';

export const  Money    = {
  access: {
    read: true,
    update: true,
    create: true,
    delete: true,
  },
  fields: {
    // products:{type:Relationship, ref:'CartItems'},
    amount : {type: Decimal},
    currency: {type: Text, defaultValue: 'INR'}
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