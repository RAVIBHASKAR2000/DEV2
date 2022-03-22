import { createHash } from "crypto";

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

export const Offer = {
  access: {
    read: true,
    update: userIsAdminOrOwner,
    create: userIsAuth,
    delete: userIsAdmin,
  },
  fields: {
    title: { type: Text, isRequired: true },
    slug: { type: Slug, isUnique: true, from: 'title' },
    image: { type: File, adapter: imageAdapter },
    summary: { type: Wysiwyg },
    description: { type: Wysiwyg },
    publishStatus: { type: Select, options: 'draft, published', isIndexed: true },
    discountPercent: {type: Decimal},
    offerText: {type: Text},
    validFrom: {type: DateTime},
    validUntil: {type: DateTime},
    price: {type: Decimal},
    isFeatured: {type: Checkbox, isIndexed: true},
    whenPublished: { type: DateTime },
    submittedBy: { type: Relationship, ref: 'User' },
    brand: {type: Text},
    created_at: {type: Checkbox, isIndexed: true},
    priceRange: {type: Text},
    productType: {type: Text}
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