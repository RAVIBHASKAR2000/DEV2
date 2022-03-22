import { User } from './user';
import { Product } from './product';
import {Article} from './article';
import {Address} from './address';
import {Cart} from './cart';
import {Category} from './category'
import {SavedCard} from './savedCard'
import {Wishlist} from './wishlist'
import {Order} from './order'
import {OrderItem} from './orderItem'
import {Offer} from './offer'
import {ProductVariant} from './productVariant'
import {ProductImage} from './productImages'
import {ProductReview} from './productReview'
import {Money} from './money'
import {Supplier}  from './supplier'
import {ShippingPincode} from './shippingPincodes'

import { ForgottenPasswordToken, ForgottenPasswordSchema } from './forgottenPasswordToken';

export const createList = keystone => {
  keystone.createList('ForgottenPasswordToken', ForgottenPasswordToken);
  keystone.createList('User', User);
  keystone.createList('Product', Product);
  keystone.createList('Article', Article);
  keystone.createList('Address', Address);
  keystone.createList('Cart', Cart);
  keystone.createList('Category', Category);
  keystone.createList('SavedCard', SavedCard);
  keystone.createList('Wishlist', Wishlist);
  keystone.createList('Order', Order);
  keystone.createList('OrderItem', OrderItem);
  keystone.createList('Offer', Offer);
  keystone.createList('ProductVariant', ProductVariant);
  keystone.createList('ProductImage', ProductImage);
  keystone.createList('ProductReview', ProductReview);
  keystone.createList('Money', Money);
  keystone.createList('Supplier', Supplier)
  keystone.createList('ShippingPincode', ShippingPincode)

  keystone.extendGraphQLSchema(ForgottenPasswordSchema);
};
