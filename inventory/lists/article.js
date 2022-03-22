import { createHash } from "crypto";

import { Text, Slug, File, Url, Select, Relationship, DateTimeUtc, Checkbox } from '@keystonejs/fields';
import { Wysiwyg } from '@keystonejs/fields-wysiwyg-tinymce';
import { atTracking, byTracking } from '@keystonejs/list-plugins';

import { userIsAdmin, userIsAdminOrOwner, userIsAuth } from '../lib/list/access';
import { imageAdapter } from '../lib/list/adapters';
import { sendEmail } from '../lib/emails';

export const Article = {
  access: {
    read: true,
    update: userIsAdminOrOwner,
    create: userIsAuth,
    delete: userIsAdmin,
  },
  fields: {
    title: { type: Text, isRequired: true },
    slug: { type: Slug, isUnique: true, from: 'title' },
    heroImage: { type: File, adapter: imageAdapter },
    heroImageCredit: { type: Url },
    image: { type: File, adapter: imageAdapter },
    imageCredit: { type: Url },
    summary: { type: Wysiwyg },
    content: { type: Wysiwyg },
    source: { type: Url },
    isFeatured: { type: Checkbox, isIndexed: true },
    publishStatus: { type: Select, options: 'draft, review, approved, published, archived', isIndexed: true },
    whenPublished: { type: DateTimeUtc },
    submittedBy: { type: Relationship, ref: 'User' },
    authors: { type: Relationship, ref: 'User', many: true }, // author may be different from submitted by. there can be many authors
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
  adminConfig: {
    defaultColumns: 'title, publishStatus, whenPublished'
  },
  
};