
import { Select, Relationship, File } from '@keystonejs/fields';
import { atTracking, byTracking } from '@keystonejs/list-plugins';

import { userIsAdmin, userIsAuth } from '../lib/list/access';
import { imageAdapter } from '../lib/list/adapters';

const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  return { submittedBy: user.id };
};

const userIsAdminOrOwner = auth => {
  const isAdmin = userIsAdmin(auth);
  const isOwner = userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

export const ProductImage = {
  access: {
    read: true,
    update: userIsAdminOrOwner,
    create: userIsAuth,
    delete: userIsAdmin,
  },
  fields: {
    image: { type: File, adapter: imageAdapter },
    product: {type: Relationship, ref: 'Product'},
    type: {type: Select, options: 'main, array'}, 
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