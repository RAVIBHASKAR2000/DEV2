import { Text, Checkbox, CalendarDay, Slug, File, Url, Virtual, Select, Relationship, Decimal, Integer, DateTimeUtc } from '@keystonejs/fields';
import { Wysiwyg } from '@keystonejs/fields-wysiwyg-tinymce';
import { atTracking, byTracking } from '@keystonejs/list-plugins';

import { userIsAdmin, userIsAuth } from '../lib/list/access';

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

export const ProductReview = {
  access: {
    read: true,
    update: userIsAdminOrOwner,
    create: userIsAuth,
    delete: userIsAdmin,
  },
  fields: {
    title: { type: Text, isRequired: true },
    product: {type: Relationship, ref: 'Product', isRequired: true},
    user: {type: Relationship, ref: 'User'},
    rating: {type: Integer},
    description: {type: Wysiwyg},
    date: {type: DateTimeUtc},
    published: {type: Select, options: 'draft, published'}
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