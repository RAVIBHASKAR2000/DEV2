import { createHash } from "crypto";

import { Text, Checkbox, DateTime, CalendarDay, Slug, File, Url, Virtual, Select, Relationship, Decimal, Integer} from '@keystonejs/fields';
import { Wysiwyg } from '@keystonejs/fields-wysiwyg-tinymce';
import { atTracking, byTracking } from '@keystonejs/list-plugins';

import { userIsAdmin, userIsAuth } from '../lib/list/access';
import { imageAdapter } from '../lib/list/adapters';

const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { submittedBy: user.id };
};

const userIsAdminOrOwner = auth => {
  const isAdmin = userIsAdmin(auth);
  const isOwner = userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

export const Order = {
  access: {
    read: true,
    update: userIsAdminOrOwner,
    create: userIsAuth,
    delete: userIsAdmin,
  },
  fields: {
    title: { type: Text, isRequired: true },
    slug: { type: Slug, isUnique: true, from: 'title' },
    shipping_address: {type: Relationship, ref: 'Address'},
    image: { type: File, adapter: imageAdapter },
    // payment: {type: Relationship, ref: 'Payment'},
    user: {type: Relationship, ref: 'User'},
    order_completed: { type: Checkbox, isIndexed: true },
    date: {type: DateTime},
    items: {type: Relationship, ref: 'OrderItem'}
  },
  hooks: {    
    afterDelete: ({ existingItem }) => {
      if (existingItem.image) {
        fileAdapter.delete(existingItem.image);
      }
    },
  },
  plugins: [atTracking(), byTracking()],
  adminConfig: {
    defaultColumns: 'name, email, isAdmin'
  },
};