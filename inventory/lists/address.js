import { createHash } from "crypto";

import { Text, Slug, File, Url, Select, Relationship, DateTime, Checkbox } from '@keystonejs/fields';
import { Wysiwyg } from '@keystonejs/fields-wysiwyg-tinymce';
import { atTracking, byTracking } from '@keystonejs/list-plugins';

import { userIsAdmin, userIsAdminOrOwner, userIsAuth } from '../lib/list/access';
import { imageAdapter } from '../lib/list/adapters';
import { sendEmail } from '../lib/emails';

export const Address     = {
  access: {
    read: true,
    update: userIsAdminOrOwner,
    create: userIsAuth,
    delete: userIsAdmin,
  },
  fields: {
    addressType: { type: Select, options:'Home, Work'},
    receiverName: {type: Text},
    mobile: { type: Text, label: "mobile number", min: 9, max: 11 },
    alternatePhoneNum: {type: Text},
    Pincode:{type:Text},
    Locality: {type:Text},
    city : {type: Text},
    district: {type:Text},
    state: {type:Text},
    landmark :{type :Text},

 },
  // hooks
  hooks: {
    afterDelete: ({ existingItem }) => {
      if (existingItem.addressType) {
        //fileAdapter.delete(existingItem.image);
      }
    },
  },
  plugins: [atTracking(), byTracking()],
  adminConfig: {
    defaultColumns: 'addressType, receiverName, phoneNum'
  },
  
};