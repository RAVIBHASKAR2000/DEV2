
import { Text, Checkbox, DateTime, CalendarDay, Slug, File, Url, Virtual, Select, Relationship, Decimal } from '@keystonejs/fields';
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

export const Product = {
  access: {
    read: true,
    update: userIsAdminOrOwner,
    create: userIsAuth,
    delete: userIsAdmin,
  },
  fields: {
    title: { type: Text, isRequired: true },
    category: {type: Relationship, ref: 'Category'},
    slug: { type: Slug, isUnique: true, from: 'title' },
    image: { type: File, adapter: imageAdapter },
    price: {type: Decimal},
    discount: {type: Number},
    price_after_discount: {type: Decimal},
    summary: { type: Wysiwyg },
    description: { type: Wysiwyg },
    publishStatus: { type: Select, options: 'draft, published', isIndexed: true },
    whenPublished: { type: DateTime },
    submittedBy: { type: Relationship, ref: 'User' },
    isFeatured: { type: Checkbox, isIndexed: true },
    brand: {type: Text},
    created_at: {type: DateTime},
    price_range: {type: Text},
    product_type: {type: Text}
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