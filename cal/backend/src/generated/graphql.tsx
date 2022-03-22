import { gql } from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Attendee = {
  __typename?: 'Attendee';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  booking?: Maybe<Booking>;
};

export type AttendeeCreateInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  booking?: Maybe<BookingRelateToOneInput>;
};

export type AttendeeOrderByInput = {
  id?: Maybe<OrderDirection>;
  email?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  timeZone?: Maybe<OrderDirection>;
};

export type AttendeeRelateToOneInput = {
  create?: Maybe<AttendeeCreateInput>;
  connect?: Maybe<AttendeeWhereUniqueInput>;
  disconnect?: Maybe<AttendeeWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type AttendeeUpdateInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  booking?: Maybe<BookingRelateToOneInput>;
};

export type AttendeeWhereInput = {
  AND?: Maybe<Array<AttendeeWhereInput>>;
  OR?: Maybe<Array<AttendeeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  timeZone?: Maybe<Scalars['String']>;
  timeZone_not?: Maybe<Scalars['String']>;
  timeZone_lt?: Maybe<Scalars['String']>;
  timeZone_lte?: Maybe<Scalars['String']>;
  timeZone_gt?: Maybe<Scalars['String']>;
  timeZone_gte?: Maybe<Scalars['String']>;
  timeZone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  timeZone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  booking?: Maybe<BookingWhereInput>;
  booking_is_null?: Maybe<Scalars['Boolean']>;
};

export type AttendeeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type AttendeesCreateInput = {
  data?: Maybe<AttendeeCreateInput>;
};

export type AttendeesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<AttendeeUpdateInput>;
};

export type AuthenticatedItem = User;

export type AvailabilitiesCreateInput = {
  data?: Maybe<AvailabilityCreateInput>;
};

export type AvailabilitiesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<AvailabilityUpdateInput>;
};

export type Availability = {
  __typename?: 'Availability';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  eventType?: Maybe<EventType>;
  startTime?: Maybe<Scalars['Int']>;
  endTime?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
};

export type AvailabilityCreateInput = {
  label?: Maybe<Scalars['String']>;
  user?: Maybe<UserRelateToOneInput>;
  eventType?: Maybe<EventTypeRelateToOneInput>;
  startTime?: Maybe<Scalars['Int']>;
  endTime?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
};

export type AvailabilityOrderByInput = {
  id?: Maybe<OrderDirection>;
  label?: Maybe<OrderDirection>;
  startTime?: Maybe<OrderDirection>;
  endTime?: Maybe<OrderDirection>;
  date?: Maybe<OrderDirection>;
};

export type AvailabilityRelateToOneInput = {
  create?: Maybe<AvailabilityCreateInput>;
  connect?: Maybe<AvailabilityWhereUniqueInput>;
  disconnect?: Maybe<AvailabilityWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type AvailabilityUpdateInput = {
  label?: Maybe<Scalars['String']>;
  user?: Maybe<UserRelateToOneInput>;
  eventType?: Maybe<EventTypeRelateToOneInput>;
  startTime?: Maybe<Scalars['Int']>;
  endTime?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
};

export type AvailabilityWhereInput = {
  AND?: Maybe<Array<AvailabilityWhereInput>>;
  OR?: Maybe<Array<AvailabilityWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  label?: Maybe<Scalars['String']>;
  label_not?: Maybe<Scalars['String']>;
  label_contains?: Maybe<Scalars['String']>;
  label_not_contains?: Maybe<Scalars['String']>;
  label_starts_with?: Maybe<Scalars['String']>;
  label_not_starts_with?: Maybe<Scalars['String']>;
  label_ends_with?: Maybe<Scalars['String']>;
  label_not_ends_with?: Maybe<Scalars['String']>;
  label_i?: Maybe<Scalars['String']>;
  label_not_i?: Maybe<Scalars['String']>;
  label_contains_i?: Maybe<Scalars['String']>;
  label_not_contains_i?: Maybe<Scalars['String']>;
  label_starts_with_i?: Maybe<Scalars['String']>;
  label_not_starts_with_i?: Maybe<Scalars['String']>;
  label_ends_with_i?: Maybe<Scalars['String']>;
  label_not_ends_with_i?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  label_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
  eventType?: Maybe<EventTypeWhereInput>;
  eventType_is_null?: Maybe<Scalars['Boolean']>;
  startTime?: Maybe<Scalars['Int']>;
  startTime_not?: Maybe<Scalars['Int']>;
  startTime_lt?: Maybe<Scalars['Int']>;
  startTime_lte?: Maybe<Scalars['Int']>;
  startTime_gt?: Maybe<Scalars['Int']>;
  startTime_gte?: Maybe<Scalars['Int']>;
  startTime_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  startTime_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  endTime?: Maybe<Scalars['Int']>;
  endTime_not?: Maybe<Scalars['Int']>;
  endTime_lt?: Maybe<Scalars['Int']>;
  endTime_lte?: Maybe<Scalars['Int']>;
  endTime_gt?: Maybe<Scalars['Int']>;
  endTime_gte?: Maybe<Scalars['Int']>;
  endTime_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  endTime_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  date?: Maybe<Scalars['String']>;
  date_not?: Maybe<Scalars['String']>;
  date_lt?: Maybe<Scalars['String']>;
  date_lte?: Maybe<Scalars['String']>;
  date_gt?: Maybe<Scalars['String']>;
  date_gte?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AvailabilityWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Booking = {
  __typename?: 'Booking';
  id: Scalars['ID'];
  uid?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  references?: Maybe<BookingRef>;
  eventType?: Maybe<EventType>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  attendees?: Maybe<Attendee>;
  location?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  rejected?: Maybe<Scalars['Boolean']>;
};

export type BookingCreateInput = {
  uid?: Maybe<Scalars['String']>;
  user?: Maybe<UserRelateToOneInput>;
  references?: Maybe<BookingRefRelateToOneInput>;
  eventType?: Maybe<EventTypeRelateToOneInput>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  attendees?: Maybe<AttendeeRelateToOneInput>;
  location?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  rejected?: Maybe<Scalars['Boolean']>;
};

export type BookingOrderByInput = {
  id?: Maybe<OrderDirection>;
  uid?: Maybe<OrderDirection>;
  title?: Maybe<OrderDirection>;
  description?: Maybe<OrderDirection>;
  startTime?: Maybe<OrderDirection>;
  endTime?: Maybe<OrderDirection>;
  location?: Maybe<OrderDirection>;
  createdAt?: Maybe<OrderDirection>;
  updatedAt?: Maybe<OrderDirection>;
  confirmed?: Maybe<OrderDirection>;
  rejected?: Maybe<OrderDirection>;
};

export type BookingRef = {
  __typename?: 'BookingRef';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  booking?: Maybe<Booking>;
};

export type BookingRefCreateInput = {
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  booking?: Maybe<BookingRelateToOneInput>;
};

export type BookingRefOrderByInput = {
  id?: Maybe<OrderDirection>;
  type?: Maybe<OrderDirection>;
  uid?: Maybe<OrderDirection>;
};

export type BookingRefRelateToOneInput = {
  create?: Maybe<BookingRefCreateInput>;
  connect?: Maybe<BookingRefWhereUniqueInput>;
  disconnect?: Maybe<BookingRefWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type BookingRefUpdateInput = {
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  booking?: Maybe<BookingRelateToOneInput>;
};

export type BookingRefWhereInput = {
  AND?: Maybe<Array<BookingRefWhereInput>>;
  OR?: Maybe<Array<BookingRefWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  type_i?: Maybe<Scalars['String']>;
  type_not_i?: Maybe<Scalars['String']>;
  type_contains_i?: Maybe<Scalars['String']>;
  type_not_contains_i?: Maybe<Scalars['String']>;
  type_starts_with_i?: Maybe<Scalars['String']>;
  type_not_starts_with_i?: Maybe<Scalars['String']>;
  type_ends_with_i?: Maybe<Scalars['String']>;
  type_not_ends_with_i?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid?: Maybe<Scalars['String']>;
  uid_not?: Maybe<Scalars['String']>;
  uid_contains?: Maybe<Scalars['String']>;
  uid_not_contains?: Maybe<Scalars['String']>;
  uid_starts_with?: Maybe<Scalars['String']>;
  uid_not_starts_with?: Maybe<Scalars['String']>;
  uid_ends_with?: Maybe<Scalars['String']>;
  uid_not_ends_with?: Maybe<Scalars['String']>;
  uid_i?: Maybe<Scalars['String']>;
  uid_not_i?: Maybe<Scalars['String']>;
  uid_contains_i?: Maybe<Scalars['String']>;
  uid_not_contains_i?: Maybe<Scalars['String']>;
  uid_starts_with_i?: Maybe<Scalars['String']>;
  uid_not_starts_with_i?: Maybe<Scalars['String']>;
  uid_ends_with_i?: Maybe<Scalars['String']>;
  uid_not_ends_with_i?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  booking?: Maybe<BookingWhereInput>;
  booking_is_null?: Maybe<Scalars['Boolean']>;
};

export type BookingRefWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BookingRefsCreateInput = {
  data?: Maybe<BookingRefCreateInput>;
};

export type BookingRefsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BookingRefUpdateInput>;
};

export type BookingRelateToOneInput = {
  create?: Maybe<BookingCreateInput>;
  connect?: Maybe<BookingWhereUniqueInput>;
  disconnect?: Maybe<BookingWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type BookingUpdateInput = {
  uid?: Maybe<Scalars['String']>;
  user?: Maybe<UserRelateToOneInput>;
  references?: Maybe<BookingRefRelateToOneInput>;
  eventType?: Maybe<EventTypeRelateToOneInput>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  attendees?: Maybe<AttendeeRelateToOneInput>;
  location?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  rejected?: Maybe<Scalars['Boolean']>;
};

export type BookingWhereInput = {
  AND?: Maybe<Array<BookingWhereInput>>;
  OR?: Maybe<Array<BookingWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  uid?: Maybe<Scalars['String']>;
  uid_not?: Maybe<Scalars['String']>;
  uid_contains?: Maybe<Scalars['String']>;
  uid_not_contains?: Maybe<Scalars['String']>;
  uid_starts_with?: Maybe<Scalars['String']>;
  uid_not_starts_with?: Maybe<Scalars['String']>;
  uid_ends_with?: Maybe<Scalars['String']>;
  uid_not_ends_with?: Maybe<Scalars['String']>;
  uid_i?: Maybe<Scalars['String']>;
  uid_not_i?: Maybe<Scalars['String']>;
  uid_contains_i?: Maybe<Scalars['String']>;
  uid_not_contains_i?: Maybe<Scalars['String']>;
  uid_starts_with_i?: Maybe<Scalars['String']>;
  uid_not_starts_with_i?: Maybe<Scalars['String']>;
  uid_ends_with_i?: Maybe<Scalars['String']>;
  uid_not_ends_with_i?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
  references?: Maybe<BookingRefWhereInput>;
  references_is_null?: Maybe<Scalars['Boolean']>;
  eventType?: Maybe<EventTypeWhereInput>;
  eventType_is_null?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_i?: Maybe<Scalars['String']>;
  title_not_i?: Maybe<Scalars['String']>;
  title_contains_i?: Maybe<Scalars['String']>;
  title_not_contains_i?: Maybe<Scalars['String']>;
  title_starts_with_i?: Maybe<Scalars['String']>;
  title_not_starts_with_i?: Maybe<Scalars['String']>;
  title_ends_with_i?: Maybe<Scalars['String']>;
  title_not_ends_with_i?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  startTime?: Maybe<Scalars['String']>;
  startTime_not?: Maybe<Scalars['String']>;
  startTime_lt?: Maybe<Scalars['String']>;
  startTime_lte?: Maybe<Scalars['String']>;
  startTime_gt?: Maybe<Scalars['String']>;
  startTime_gte?: Maybe<Scalars['String']>;
  startTime_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  startTime_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  endTime?: Maybe<Scalars['String']>;
  endTime_not?: Maybe<Scalars['String']>;
  endTime_lt?: Maybe<Scalars['String']>;
  endTime_lte?: Maybe<Scalars['String']>;
  endTime_gt?: Maybe<Scalars['String']>;
  endTime_gte?: Maybe<Scalars['String']>;
  endTime_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  endTime_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  attendees?: Maybe<AttendeeWhereInput>;
  attendees_is_null?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  location_not?: Maybe<Scalars['String']>;
  location_contains?: Maybe<Scalars['String']>;
  location_not_contains?: Maybe<Scalars['String']>;
  location_starts_with?: Maybe<Scalars['String']>;
  location_not_starts_with?: Maybe<Scalars['String']>;
  location_ends_with?: Maybe<Scalars['String']>;
  location_not_ends_with?: Maybe<Scalars['String']>;
  location_i?: Maybe<Scalars['String']>;
  location_not_i?: Maybe<Scalars['String']>;
  location_contains_i?: Maybe<Scalars['String']>;
  location_not_contains_i?: Maybe<Scalars['String']>;
  location_starts_with_i?: Maybe<Scalars['String']>;
  location_not_starts_with_i?: Maybe<Scalars['String']>;
  location_ends_with_i?: Maybe<Scalars['String']>;
  location_not_ends_with_i?: Maybe<Scalars['String']>;
  location_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  location_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  confirmed?: Maybe<Scalars['Boolean']>;
  confirmed_not?: Maybe<Scalars['Boolean']>;
  rejected?: Maybe<Scalars['Boolean']>;
  rejected_not?: Maybe<Scalars['Boolean']>;
};

export type BookingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  uid?: Maybe<Scalars['String']>;
};

export type BookingsCreateInput = {
  data?: Maybe<BookingCreateInput>;
};

export type BookingsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BookingUpdateInput>;
};

export type CreateInitialUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Credential = {
  __typename?: 'Credential';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['JSON']>;
  user?: Maybe<User>;
};

export type CredentialCreateInput = {
  type?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['JSON']>;
  user?: Maybe<UserRelateToOneInput>;
};

export type CredentialOrderByInput = {
  id?: Maybe<OrderDirection>;
  type?: Maybe<OrderDirection>;
};

export type CredentialUpdateInput = {
  type?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['JSON']>;
  user?: Maybe<UserRelateToOneInput>;
};

export type CredentialWhereInput = {
  AND?: Maybe<Array<CredentialWhereInput>>;
  OR?: Maybe<Array<CredentialWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  type_i?: Maybe<Scalars['String']>;
  type_not_i?: Maybe<Scalars['String']>;
  type_contains_i?: Maybe<Scalars['String']>;
  type_not_contains_i?: Maybe<Scalars['String']>;
  type_starts_with_i?: Maybe<Scalars['String']>;
  type_not_starts_with_i?: Maybe<Scalars['String']>;
  type_ends_with_i?: Maybe<Scalars['String']>;
  type_not_ends_with_i?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
};

export type CredentialWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CredentialsCreateInput = {
  data?: Maybe<CredentialCreateInput>;
};

export type CredentialsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<CredentialUpdateInput>;
};

export type EventType = {
  __typename?: 'EventType';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  locations?: Maybe<Scalars['JSON']>;
  length?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
  bookings?: Maybe<Booking>;
  availability?: Maybe<Availability>;
  eventName?: Maybe<Scalars['String']>;
  customInputs?: Maybe<EventTypeCustomInput>;
  timeZone?: Maybe<Scalars['String']>;
  periodType?: Maybe<Scalars['String']>;
  periodStartDate?: Maybe<Scalars['String']>;
  periodEndDate?: Maybe<Scalars['String']>;
  periodDays?: Maybe<Scalars['Int']>;
  periodCountCalendarDays?: Maybe<Scalars['Boolean']>;
  requiresConfirmation?: Maybe<Scalars['Boolean']>;
  minimumBookingNotice?: Maybe<Scalars['Int']>;
};

export type EventTypeCreateInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  locations?: Maybe<Scalars['JSON']>;
  length?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserRelateToOneInput>;
  bookings?: Maybe<BookingRelateToOneInput>;
  availability?: Maybe<AvailabilityRelateToOneInput>;
  eventName?: Maybe<Scalars['String']>;
  customInputs?: Maybe<EventTypeCustomInputRelateToOneInput>;
  timeZone?: Maybe<Scalars['String']>;
  periodType?: Maybe<Scalars['String']>;
  periodStartDate?: Maybe<Scalars['String']>;
  periodEndDate?: Maybe<Scalars['String']>;
  periodDays?: Maybe<Scalars['Int']>;
  periodCountCalendarDays?: Maybe<Scalars['Boolean']>;
  requiresConfirmation?: Maybe<Scalars['Boolean']>;
  minimumBookingNotice?: Maybe<Scalars['Int']>;
};

export type EventTypeCustomInput = {
  __typename?: 'EventTypeCustomInput';
  id: Scalars['ID'];
  eventType?: Maybe<EventType>;
  label?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type EventTypeCustomInputCreateInput = {
  eventType?: Maybe<EventTypeRelateToOneInput>;
  label?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type EventTypeCustomInputOrderByInput = {
  id?: Maybe<OrderDirection>;
  label?: Maybe<OrderDirection>;
  required?: Maybe<OrderDirection>;
  placeholder?: Maybe<OrderDirection>;
};

export type EventTypeCustomInputRelateToOneInput = {
  create?: Maybe<EventTypeCustomInputCreateInput>;
  connect?: Maybe<EventTypeCustomInputWhereUniqueInput>;
  disconnect?: Maybe<EventTypeCustomInputWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type EventTypeCustomInputUpdateInput = {
  eventType?: Maybe<EventTypeRelateToOneInput>;
  label?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type EventTypeCustomInputWhereInput = {
  AND?: Maybe<Array<EventTypeCustomInputWhereInput>>;
  OR?: Maybe<Array<EventTypeCustomInputWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  eventType?: Maybe<EventTypeWhereInput>;
  eventType_is_null?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  label_not?: Maybe<Scalars['String']>;
  label_contains?: Maybe<Scalars['String']>;
  label_not_contains?: Maybe<Scalars['String']>;
  label_starts_with?: Maybe<Scalars['String']>;
  label_not_starts_with?: Maybe<Scalars['String']>;
  label_ends_with?: Maybe<Scalars['String']>;
  label_not_ends_with?: Maybe<Scalars['String']>;
  label_i?: Maybe<Scalars['String']>;
  label_not_i?: Maybe<Scalars['String']>;
  label_contains_i?: Maybe<Scalars['String']>;
  label_not_contains_i?: Maybe<Scalars['String']>;
  label_starts_with_i?: Maybe<Scalars['String']>;
  label_not_starts_with_i?: Maybe<Scalars['String']>;
  label_ends_with_i?: Maybe<Scalars['String']>;
  label_not_ends_with_i?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  label_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  required?: Maybe<Scalars['Boolean']>;
  required_not?: Maybe<Scalars['Boolean']>;
  placeholder?: Maybe<Scalars['String']>;
  placeholder_not?: Maybe<Scalars['String']>;
  placeholder_contains?: Maybe<Scalars['String']>;
  placeholder_not_contains?: Maybe<Scalars['String']>;
  placeholder_starts_with?: Maybe<Scalars['String']>;
  placeholder_not_starts_with?: Maybe<Scalars['String']>;
  placeholder_ends_with?: Maybe<Scalars['String']>;
  placeholder_not_ends_with?: Maybe<Scalars['String']>;
  placeholder_i?: Maybe<Scalars['String']>;
  placeholder_not_i?: Maybe<Scalars['String']>;
  placeholder_contains_i?: Maybe<Scalars['String']>;
  placeholder_not_contains_i?: Maybe<Scalars['String']>;
  placeholder_starts_with_i?: Maybe<Scalars['String']>;
  placeholder_not_starts_with_i?: Maybe<Scalars['String']>;
  placeholder_ends_with_i?: Maybe<Scalars['String']>;
  placeholder_not_ends_with_i?: Maybe<Scalars['String']>;
  placeholder_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  placeholder_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EventTypeCustomInputWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type EventTypeCustomInputsCreateInput = {
  data?: Maybe<EventTypeCustomInputCreateInput>;
};

export type EventTypeCustomInputsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<EventTypeCustomInputUpdateInput>;
};

export type EventTypeOrderByInput = {
  id?: Maybe<OrderDirection>;
  title?: Maybe<OrderDirection>;
  slug?: Maybe<OrderDirection>;
  description?: Maybe<OrderDirection>;
  length?: Maybe<OrderDirection>;
  hidden?: Maybe<OrderDirection>;
  eventName?: Maybe<OrderDirection>;
  timeZone?: Maybe<OrderDirection>;
  periodType?: Maybe<OrderDirection>;
  periodStartDate?: Maybe<OrderDirection>;
  periodEndDate?: Maybe<OrderDirection>;
  periodDays?: Maybe<OrderDirection>;
  periodCountCalendarDays?: Maybe<OrderDirection>;
  requiresConfirmation?: Maybe<OrderDirection>;
  minimumBookingNotice?: Maybe<OrderDirection>;
};

export type EventTypeRelateToOneInput = {
  create?: Maybe<EventTypeCreateInput>;
  connect?: Maybe<EventTypeWhereUniqueInput>;
  disconnect?: Maybe<EventTypeWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type EventTypeUpdateInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  locations?: Maybe<Scalars['JSON']>;
  length?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserRelateToOneInput>;
  bookings?: Maybe<BookingRelateToOneInput>;
  availability?: Maybe<AvailabilityRelateToOneInput>;
  eventName?: Maybe<Scalars['String']>;
  customInputs?: Maybe<EventTypeCustomInputRelateToOneInput>;
  timeZone?: Maybe<Scalars['String']>;
  periodType?: Maybe<Scalars['String']>;
  periodStartDate?: Maybe<Scalars['String']>;
  periodEndDate?: Maybe<Scalars['String']>;
  periodDays?: Maybe<Scalars['Int']>;
  periodCountCalendarDays?: Maybe<Scalars['Boolean']>;
  requiresConfirmation?: Maybe<Scalars['Boolean']>;
  minimumBookingNotice?: Maybe<Scalars['Int']>;
};

export type EventTypeWhereInput = {
  AND?: Maybe<Array<EventTypeWhereInput>>;
  OR?: Maybe<Array<EventTypeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_i?: Maybe<Scalars['String']>;
  title_not_i?: Maybe<Scalars['String']>;
  title_contains_i?: Maybe<Scalars['String']>;
  title_not_contains_i?: Maybe<Scalars['String']>;
  title_starts_with_i?: Maybe<Scalars['String']>;
  title_not_starts_with_i?: Maybe<Scalars['String']>;
  title_ends_with_i?: Maybe<Scalars['String']>;
  title_not_ends_with_i?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_i?: Maybe<Scalars['String']>;
  slug_not_i?: Maybe<Scalars['String']>;
  slug_contains_i?: Maybe<Scalars['String']>;
  slug_not_contains_i?: Maybe<Scalars['String']>;
  slug_starts_with_i?: Maybe<Scalars['String']>;
  slug_not_starts_with_i?: Maybe<Scalars['String']>;
  slug_ends_with_i?: Maybe<Scalars['String']>;
  slug_not_ends_with_i?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  length?: Maybe<Scalars['Int']>;
  length_not?: Maybe<Scalars['Int']>;
  length_lt?: Maybe<Scalars['Int']>;
  length_lte?: Maybe<Scalars['Int']>;
  length_gt?: Maybe<Scalars['Int']>;
  length_gte?: Maybe<Scalars['Int']>;
  length_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  length_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  hidden?: Maybe<Scalars['Boolean']>;
  hidden_not?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
  bookings?: Maybe<BookingWhereInput>;
  bookings_is_null?: Maybe<Scalars['Boolean']>;
  availability?: Maybe<AvailabilityWhereInput>;
  availability_is_null?: Maybe<Scalars['Boolean']>;
  eventName?: Maybe<Scalars['String']>;
  eventName_not?: Maybe<Scalars['String']>;
  eventName_contains?: Maybe<Scalars['String']>;
  eventName_not_contains?: Maybe<Scalars['String']>;
  eventName_starts_with?: Maybe<Scalars['String']>;
  eventName_not_starts_with?: Maybe<Scalars['String']>;
  eventName_ends_with?: Maybe<Scalars['String']>;
  eventName_not_ends_with?: Maybe<Scalars['String']>;
  eventName_i?: Maybe<Scalars['String']>;
  eventName_not_i?: Maybe<Scalars['String']>;
  eventName_contains_i?: Maybe<Scalars['String']>;
  eventName_not_contains_i?: Maybe<Scalars['String']>;
  eventName_starts_with_i?: Maybe<Scalars['String']>;
  eventName_not_starts_with_i?: Maybe<Scalars['String']>;
  eventName_ends_with_i?: Maybe<Scalars['String']>;
  eventName_not_ends_with_i?: Maybe<Scalars['String']>;
  eventName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  customInputs?: Maybe<EventTypeCustomInputWhereInput>;
  customInputs_is_null?: Maybe<Scalars['Boolean']>;
  timeZone?: Maybe<Scalars['String']>;
  timeZone_not?: Maybe<Scalars['String']>;
  timeZone_contains?: Maybe<Scalars['String']>;
  timeZone_not_contains?: Maybe<Scalars['String']>;
  timeZone_starts_with?: Maybe<Scalars['String']>;
  timeZone_not_starts_with?: Maybe<Scalars['String']>;
  timeZone_ends_with?: Maybe<Scalars['String']>;
  timeZone_not_ends_with?: Maybe<Scalars['String']>;
  timeZone_i?: Maybe<Scalars['String']>;
  timeZone_not_i?: Maybe<Scalars['String']>;
  timeZone_contains_i?: Maybe<Scalars['String']>;
  timeZone_not_contains_i?: Maybe<Scalars['String']>;
  timeZone_starts_with_i?: Maybe<Scalars['String']>;
  timeZone_not_starts_with_i?: Maybe<Scalars['String']>;
  timeZone_ends_with_i?: Maybe<Scalars['String']>;
  timeZone_not_ends_with_i?: Maybe<Scalars['String']>;
  timeZone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  timeZone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  periodType?: Maybe<Scalars['String']>;
  periodType_not?: Maybe<Scalars['String']>;
  periodType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  periodType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  periodStartDate?: Maybe<Scalars['String']>;
  periodStartDate_not?: Maybe<Scalars['String']>;
  periodStartDate_lt?: Maybe<Scalars['String']>;
  periodStartDate_lte?: Maybe<Scalars['String']>;
  periodStartDate_gt?: Maybe<Scalars['String']>;
  periodStartDate_gte?: Maybe<Scalars['String']>;
  periodStartDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  periodStartDate_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  periodEndDate?: Maybe<Scalars['String']>;
  periodEndDate_not?: Maybe<Scalars['String']>;
  periodEndDate_lt?: Maybe<Scalars['String']>;
  periodEndDate_lte?: Maybe<Scalars['String']>;
  periodEndDate_gt?: Maybe<Scalars['String']>;
  periodEndDate_gte?: Maybe<Scalars['String']>;
  periodEndDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  periodEndDate_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  periodDays?: Maybe<Scalars['Int']>;
  periodDays_not?: Maybe<Scalars['Int']>;
  periodDays_lt?: Maybe<Scalars['Int']>;
  periodDays_lte?: Maybe<Scalars['Int']>;
  periodDays_gt?: Maybe<Scalars['Int']>;
  periodDays_gte?: Maybe<Scalars['Int']>;
  periodDays_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  periodDays_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  periodCountCalendarDays?: Maybe<Scalars['Boolean']>;
  periodCountCalendarDays_not?: Maybe<Scalars['Boolean']>;
  requiresConfirmation?: Maybe<Scalars['Boolean']>;
  requiresConfirmation_not?: Maybe<Scalars['Boolean']>;
  minimumBookingNotice?: Maybe<Scalars['Int']>;
  minimumBookingNotice_not?: Maybe<Scalars['Int']>;
  minimumBookingNotice_lt?: Maybe<Scalars['Int']>;
  minimumBookingNotice_lte?: Maybe<Scalars['Int']>;
  minimumBookingNotice_gt?: Maybe<Scalars['Int']>;
  minimumBookingNotice_gte?: Maybe<Scalars['Int']>;
  minimumBookingNotice_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  minimumBookingNotice_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type EventTypeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type EventTypesCreateInput = {
  data?: Maybe<EventTypeCreateInput>;
};

export type EventTypesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<EventTypeUpdateInput>;
};


export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSignout: Scalars['Boolean'];
  enableSessionItem: Scalars['Boolean'];
  lists: Array<KeystoneAdminUiListMeta>;
  list?: Maybe<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  path: Scalars['String'];
  label: Scalars['String'];
  isOrderable: Scalars['Boolean'];
  fieldMeta?: Maybe<Scalars['JSON']>;
  viewsIndex: Scalars['Int'];
  customViewsIndex?: Maybe<Scalars['Int']>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  search?: Maybe<QueryMode>;
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  key: Scalars['String'];
  itemQueryName: Scalars['String'];
  listQueryName: Scalars['String'];
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  path: Scalars['String'];
  label: Scalars['String'];
  singular: Scalars['String'];
  plural: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  initialColumns: Array<Scalars['String']>;
  pageSize: Scalars['Int'];
  labelField: Scalars['String'];
  fields: Array<KeystoneAdminUiFieldMeta>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  field: Scalars['String'];
  direction: KeystoneAdminUiSortDirection;
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Meeting = {
  __typename?: 'Meeting';
  id: Scalars['ID'];
  meetingtype?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  guestName?: Maybe<Scalars['String']>;
  guestEmail?: Maybe<Scalars['String']>;
  meetingDesc?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type MeetingCreateInput = {
  meetingtype?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  guestName?: Maybe<Scalars['String']>;
  guestEmail?: Maybe<Scalars['String']>;
  meetingDesc?: Maybe<Scalars['String']>;
  user?: Maybe<UserRelateToOneInput>;
};

export type MeetingOrderByInput = {
  id?: Maybe<OrderDirection>;
  meetingtype?: Maybe<OrderDirection>;
  date?: Maybe<OrderDirection>;
  guestName?: Maybe<OrderDirection>;
  guestEmail?: Maybe<OrderDirection>;
  meetingDesc?: Maybe<OrderDirection>;
};

export type MeetingRelateToManyInput = {
  create?: Maybe<Array<Maybe<MeetingCreateInput>>>;
  connect?: Maybe<Array<Maybe<MeetingWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<MeetingWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type MeetingUpdateInput = {
  meetingtype?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  guestName?: Maybe<Scalars['String']>;
  guestEmail?: Maybe<Scalars['String']>;
  meetingDesc?: Maybe<Scalars['String']>;
  user?: Maybe<UserRelateToOneInput>;
};

export type MeetingWhereInput = {
  AND?: Maybe<Array<MeetingWhereInput>>;
  OR?: Maybe<Array<MeetingWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  meetingtype?: Maybe<Scalars['Int']>;
  meetingtype_not?: Maybe<Scalars['Int']>;
  meetingtype_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  meetingtype_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  date?: Maybe<Scalars['String']>;
  date_not?: Maybe<Scalars['String']>;
  date_lt?: Maybe<Scalars['String']>;
  date_lte?: Maybe<Scalars['String']>;
  date_gt?: Maybe<Scalars['String']>;
  date_gte?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  guestName?: Maybe<Scalars['String']>;
  guestName_not?: Maybe<Scalars['String']>;
  guestName_contains?: Maybe<Scalars['String']>;
  guestName_not_contains?: Maybe<Scalars['String']>;
  guestName_starts_with?: Maybe<Scalars['String']>;
  guestName_not_starts_with?: Maybe<Scalars['String']>;
  guestName_ends_with?: Maybe<Scalars['String']>;
  guestName_not_ends_with?: Maybe<Scalars['String']>;
  guestName_i?: Maybe<Scalars['String']>;
  guestName_not_i?: Maybe<Scalars['String']>;
  guestName_contains_i?: Maybe<Scalars['String']>;
  guestName_not_contains_i?: Maybe<Scalars['String']>;
  guestName_starts_with_i?: Maybe<Scalars['String']>;
  guestName_not_starts_with_i?: Maybe<Scalars['String']>;
  guestName_ends_with_i?: Maybe<Scalars['String']>;
  guestName_not_ends_with_i?: Maybe<Scalars['String']>;
  guestName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  guestName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  guestEmail?: Maybe<Scalars['String']>;
  guestEmail_not?: Maybe<Scalars['String']>;
  guestEmail_contains?: Maybe<Scalars['String']>;
  guestEmail_not_contains?: Maybe<Scalars['String']>;
  guestEmail_starts_with?: Maybe<Scalars['String']>;
  guestEmail_not_starts_with?: Maybe<Scalars['String']>;
  guestEmail_ends_with?: Maybe<Scalars['String']>;
  guestEmail_not_ends_with?: Maybe<Scalars['String']>;
  guestEmail_i?: Maybe<Scalars['String']>;
  guestEmail_not_i?: Maybe<Scalars['String']>;
  guestEmail_contains_i?: Maybe<Scalars['String']>;
  guestEmail_not_contains_i?: Maybe<Scalars['String']>;
  guestEmail_starts_with_i?: Maybe<Scalars['String']>;
  guestEmail_not_starts_with_i?: Maybe<Scalars['String']>;
  guestEmail_ends_with_i?: Maybe<Scalars['String']>;
  guestEmail_not_ends_with_i?: Maybe<Scalars['String']>;
  guestEmail_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  guestEmail_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  meetingDesc?: Maybe<Scalars['String']>;
  meetingDesc_not?: Maybe<Scalars['String']>;
  meetingDesc_contains?: Maybe<Scalars['String']>;
  meetingDesc_not_contains?: Maybe<Scalars['String']>;
  meetingDesc_starts_with?: Maybe<Scalars['String']>;
  meetingDesc_not_starts_with?: Maybe<Scalars['String']>;
  meetingDesc_ends_with?: Maybe<Scalars['String']>;
  meetingDesc_not_ends_with?: Maybe<Scalars['String']>;
  meetingDesc_i?: Maybe<Scalars['String']>;
  meetingDesc_not_i?: Maybe<Scalars['String']>;
  meetingDesc_contains_i?: Maybe<Scalars['String']>;
  meetingDesc_not_contains_i?: Maybe<Scalars['String']>;
  meetingDesc_starts_with_i?: Maybe<Scalars['String']>;
  meetingDesc_not_starts_with_i?: Maybe<Scalars['String']>;
  meetingDesc_ends_with_i?: Maybe<Scalars['String']>;
  meetingDesc_not_ends_with_i?: Maybe<Scalars['String']>;
  meetingDesc_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  meetingDesc_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
};

export type MeetingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type MeetingsCreateInput = {
  data?: Maybe<MeetingCreateInput>;
};

export type MeetingsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<MeetingUpdateInput>;
};

export type Membership = {
  __typename?: 'Membership';
  id: Scalars['ID'];
  accepted?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['String']>;
  team?: Maybe<Team>;
  user?: Maybe<User>;
};

export type MembershipCreateInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['String']>;
  team?: Maybe<TeamRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
};

export type MembershipOrderByInput = {
  id?: Maybe<OrderDirection>;
  accepted?: Maybe<OrderDirection>;
  role?: Maybe<OrderDirection>;
};

export type MembershipRelateToOneInput = {
  create?: Maybe<MembershipCreateInput>;
  connect?: Maybe<MembershipWhereUniqueInput>;
  disconnect?: Maybe<MembershipWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type MembershipUpdateInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['String']>;
  team?: Maybe<TeamRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
};

export type MembershipWhereInput = {
  AND?: Maybe<Array<MembershipWhereInput>>;
  OR?: Maybe<Array<MembershipWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  accepted?: Maybe<Scalars['Boolean']>;
  accepted_not?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['String']>;
  role_not?: Maybe<Scalars['String']>;
  role_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  role_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  team?: Maybe<TeamWhereInput>;
  team_is_null?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
};

export type MembershipWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type MembershipsCreateInput = {
  data?: Maybe<MembershipCreateInput>;
};

export type MembershipsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<MembershipUpdateInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  createMeeting?: Maybe<Meeting>;
  createMeetings?: Maybe<Array<Maybe<Meeting>>>;
  updateMeeting?: Maybe<Meeting>;
  updateMeetings?: Maybe<Array<Maybe<Meeting>>>;
  deleteMeeting?: Maybe<Meeting>;
  deleteMeetings?: Maybe<Array<Maybe<Meeting>>>;
  createEventType?: Maybe<EventType>;
  createEventTypes?: Maybe<Array<Maybe<EventType>>>;
  updateEventType?: Maybe<EventType>;
  updateEventTypes?: Maybe<Array<Maybe<EventType>>>;
  deleteEventType?: Maybe<EventType>;
  deleteEventTypes?: Maybe<Array<Maybe<EventType>>>;
  createCredential?: Maybe<Credential>;
  createCredentials?: Maybe<Array<Maybe<Credential>>>;
  updateCredential?: Maybe<Credential>;
  updateCredentials?: Maybe<Array<Maybe<Credential>>>;
  deleteCredential?: Maybe<Credential>;
  deleteCredentials?: Maybe<Array<Maybe<Credential>>>;
  createTeam?: Maybe<Team>;
  createTeams?: Maybe<Array<Maybe<Team>>>;
  updateTeam?: Maybe<Team>;
  updateTeams?: Maybe<Array<Maybe<Team>>>;
  deleteTeam?: Maybe<Team>;
  deleteTeams?: Maybe<Array<Maybe<Team>>>;
  createMembership?: Maybe<Membership>;
  createMemberships?: Maybe<Array<Maybe<Membership>>>;
  updateMembership?: Maybe<Membership>;
  updateMemberships?: Maybe<Array<Maybe<Membership>>>;
  deleteMembership?: Maybe<Membership>;
  deleteMemberships?: Maybe<Array<Maybe<Membership>>>;
  createverificationRequest?: Maybe<VerificationRequest>;
  createVerificationRequests?: Maybe<Array<Maybe<VerificationRequest>>>;
  updateverificationRequest?: Maybe<VerificationRequest>;
  updateVerificationRequests?: Maybe<Array<Maybe<VerificationRequest>>>;
  deleteverificationRequest?: Maybe<VerificationRequest>;
  deleteVerificationRequests?: Maybe<Array<Maybe<VerificationRequest>>>;
  createBookingRef?: Maybe<BookingRef>;
  createBookingRefs?: Maybe<Array<Maybe<BookingRef>>>;
  updateBookingRef?: Maybe<BookingRef>;
  updateBookingRefs?: Maybe<Array<Maybe<BookingRef>>>;
  deleteBookingRef?: Maybe<BookingRef>;
  deleteBookingRefs?: Maybe<Array<Maybe<BookingRef>>>;
  createAttendee?: Maybe<Attendee>;
  createAttendees?: Maybe<Array<Maybe<Attendee>>>;
  updateAttendee?: Maybe<Attendee>;
  updateAttendees?: Maybe<Array<Maybe<Attendee>>>;
  deleteAttendee?: Maybe<Attendee>;
  deleteAttendees?: Maybe<Array<Maybe<Attendee>>>;
  createBooking?: Maybe<Booking>;
  createBookings?: Maybe<Array<Maybe<Booking>>>;
  updateBooking?: Maybe<Booking>;
  updateBookings?: Maybe<Array<Maybe<Booking>>>;
  deleteBooking?: Maybe<Booking>;
  deleteBookings?: Maybe<Array<Maybe<Booking>>>;
  createAvailability?: Maybe<Availability>;
  createAvailabilities?: Maybe<Array<Maybe<Availability>>>;
  updateAvailability?: Maybe<Availability>;
  updateAvailabilities?: Maybe<Array<Maybe<Availability>>>;
  deleteAvailability?: Maybe<Availability>;
  deleteAvailabilities?: Maybe<Array<Maybe<Availability>>>;
  createSelectedCalender?: Maybe<SelectedCalender>;
  createSelectedCalenders?: Maybe<Array<Maybe<SelectedCalender>>>;
  updateSelectedCalender?: Maybe<SelectedCalender>;
  updateSelectedCalenders?: Maybe<Array<Maybe<SelectedCalender>>>;
  deleteSelectedCalender?: Maybe<SelectedCalender>;
  deleteSelectedCalenders?: Maybe<Array<Maybe<SelectedCalender>>>;
  createResetPasswordRequest?: Maybe<ResetPasswordRequest>;
  createResetPasswordRequests?: Maybe<Array<Maybe<ResetPasswordRequest>>>;
  updateResetPasswordRequest?: Maybe<ResetPasswordRequest>;
  updateResetPasswordRequests?: Maybe<Array<Maybe<ResetPasswordRequest>>>;
  deleteResetPasswordRequest?: Maybe<ResetPasswordRequest>;
  deleteResetPasswordRequests?: Maybe<Array<Maybe<ResetPasswordRequest>>>;
  createRemainderMail?: Maybe<RemainderMail>;
  createRemainderMails?: Maybe<Array<Maybe<RemainderMail>>>;
  updateRemainderMail?: Maybe<RemainderMail>;
  updateRemainderMails?: Maybe<Array<Maybe<RemainderMail>>>;
  deleteRemainderMail?: Maybe<RemainderMail>;
  deleteRemainderMails?: Maybe<Array<Maybe<RemainderMail>>>;
  createEventTypeCustomInput?: Maybe<EventTypeCustomInput>;
  createEventTypeCustomInputs?: Maybe<Array<Maybe<EventTypeCustomInput>>>;
  updateEventTypeCustomInput?: Maybe<EventTypeCustomInput>;
  updateEventTypeCustomInputs?: Maybe<Array<Maybe<EventTypeCustomInput>>>;
  deleteEventTypeCustomInput?: Maybe<EventTypeCustomInput>;
  deleteEventTypeCustomInputs?: Maybe<Array<Maybe<EventTypeCustomInput>>>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  endSession: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};


export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateMeetingArgs = {
  data?: Maybe<MeetingCreateInput>;
};


export type MutationCreateMeetingsArgs = {
  data?: Maybe<Array<Maybe<MeetingsCreateInput>>>;
};


export type MutationUpdateMeetingArgs = {
  id: Scalars['ID'];
  data?: Maybe<MeetingUpdateInput>;
};


export type MutationUpdateMeetingsArgs = {
  data?: Maybe<Array<Maybe<MeetingsUpdateInput>>>;
};


export type MutationDeleteMeetingArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMeetingsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateEventTypeArgs = {
  data?: Maybe<EventTypeCreateInput>;
};


export type MutationCreateEventTypesArgs = {
  data?: Maybe<Array<Maybe<EventTypesCreateInput>>>;
};


export type MutationUpdateEventTypeArgs = {
  id: Scalars['ID'];
  data?: Maybe<EventTypeUpdateInput>;
};


export type MutationUpdateEventTypesArgs = {
  data?: Maybe<Array<Maybe<EventTypesUpdateInput>>>;
};


export type MutationDeleteEventTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEventTypesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateCredentialArgs = {
  data?: Maybe<CredentialCreateInput>;
};


export type MutationCreateCredentialsArgs = {
  data?: Maybe<Array<Maybe<CredentialsCreateInput>>>;
};


export type MutationUpdateCredentialArgs = {
  id: Scalars['ID'];
  data?: Maybe<CredentialUpdateInput>;
};


export type MutationUpdateCredentialsArgs = {
  data?: Maybe<Array<Maybe<CredentialsUpdateInput>>>;
};


export type MutationDeleteCredentialArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCredentialsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateTeamArgs = {
  data?: Maybe<TeamCreateInput>;
};


export type MutationCreateTeamsArgs = {
  data?: Maybe<Array<Maybe<TeamsCreateInput>>>;
};


export type MutationUpdateTeamArgs = {
  id: Scalars['ID'];
  data?: Maybe<TeamUpdateInput>;
};


export type MutationUpdateTeamsArgs = {
  data?: Maybe<Array<Maybe<TeamsUpdateInput>>>;
};


export type MutationDeleteTeamArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTeamsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateMembershipArgs = {
  data?: Maybe<MembershipCreateInput>;
};


export type MutationCreateMembershipsArgs = {
  data?: Maybe<Array<Maybe<MembershipsCreateInput>>>;
};


export type MutationUpdateMembershipArgs = {
  id: Scalars['ID'];
  data?: Maybe<MembershipUpdateInput>;
};


export type MutationUpdateMembershipsArgs = {
  data?: Maybe<Array<Maybe<MembershipsUpdateInput>>>;
};


export type MutationDeleteMembershipArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMembershipsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateverificationRequestArgs = {
  data?: Maybe<VerificationRequestCreateInput>;
};


export type MutationCreateVerificationRequestsArgs = {
  data?: Maybe<Array<Maybe<VerificationRequestsCreateInput>>>;
};


export type MutationUpdateverificationRequestArgs = {
  id: Scalars['ID'];
  data?: Maybe<VerificationRequestUpdateInput>;
};


export type MutationUpdateVerificationRequestsArgs = {
  data?: Maybe<Array<Maybe<VerificationRequestsUpdateInput>>>;
};


export type MutationDeleteverificationRequestArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVerificationRequestsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBookingRefArgs = {
  data?: Maybe<BookingRefCreateInput>;
};


export type MutationCreateBookingRefsArgs = {
  data?: Maybe<Array<Maybe<BookingRefsCreateInput>>>;
};


export type MutationUpdateBookingRefArgs = {
  id: Scalars['ID'];
  data?: Maybe<BookingRefUpdateInput>;
};


export type MutationUpdateBookingRefsArgs = {
  data?: Maybe<Array<Maybe<BookingRefsUpdateInput>>>;
};


export type MutationDeleteBookingRefArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBookingRefsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateAttendeeArgs = {
  data?: Maybe<AttendeeCreateInput>;
};


export type MutationCreateAttendeesArgs = {
  data?: Maybe<Array<Maybe<AttendeesCreateInput>>>;
};


export type MutationUpdateAttendeeArgs = {
  id: Scalars['ID'];
  data?: Maybe<AttendeeUpdateInput>;
};


export type MutationUpdateAttendeesArgs = {
  data?: Maybe<Array<Maybe<AttendeesUpdateInput>>>;
};


export type MutationDeleteAttendeeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAttendeesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBookingArgs = {
  data?: Maybe<BookingCreateInput>;
};


export type MutationCreateBookingsArgs = {
  data?: Maybe<Array<Maybe<BookingsCreateInput>>>;
};


export type MutationUpdateBookingArgs = {
  id: Scalars['ID'];
  data?: Maybe<BookingUpdateInput>;
};


export type MutationUpdateBookingsArgs = {
  data?: Maybe<Array<Maybe<BookingsUpdateInput>>>;
};


export type MutationDeleteBookingArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBookingsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateAvailabilityArgs = {
  data?: Maybe<AvailabilityCreateInput>;
};


export type MutationCreateAvailabilitiesArgs = {
  data?: Maybe<Array<Maybe<AvailabilitiesCreateInput>>>;
};


export type MutationUpdateAvailabilityArgs = {
  id: Scalars['ID'];
  data?: Maybe<AvailabilityUpdateInput>;
};


export type MutationUpdateAvailabilitiesArgs = {
  data?: Maybe<Array<Maybe<AvailabilitiesUpdateInput>>>;
};


export type MutationDeleteAvailabilityArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAvailabilitiesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateSelectedCalenderArgs = {
  data?: Maybe<SelectedCalenderCreateInput>;
};


export type MutationCreateSelectedCalendersArgs = {
  data?: Maybe<Array<Maybe<SelectedCalendersCreateInput>>>;
};


export type MutationUpdateSelectedCalenderArgs = {
  id: Scalars['ID'];
  data?: Maybe<SelectedCalenderUpdateInput>;
};


export type MutationUpdateSelectedCalendersArgs = {
  data?: Maybe<Array<Maybe<SelectedCalendersUpdateInput>>>;
};


export type MutationDeleteSelectedCalenderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSelectedCalendersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateResetPasswordRequestArgs = {
  data?: Maybe<ResetPasswordRequestCreateInput>;
};


export type MutationCreateResetPasswordRequestsArgs = {
  data?: Maybe<Array<Maybe<ResetPasswordRequestsCreateInput>>>;
};


export type MutationUpdateResetPasswordRequestArgs = {
  id: Scalars['ID'];
  data?: Maybe<ResetPasswordRequestUpdateInput>;
};


export type MutationUpdateResetPasswordRequestsArgs = {
  data?: Maybe<Array<Maybe<ResetPasswordRequestsUpdateInput>>>;
};


export type MutationDeleteResetPasswordRequestArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteResetPasswordRequestsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateRemainderMailArgs = {
  data?: Maybe<RemainderMailCreateInput>;
};


export type MutationCreateRemainderMailsArgs = {
  data?: Maybe<Array<Maybe<RemainderMailsCreateInput>>>;
};


export type MutationUpdateRemainderMailArgs = {
  id: Scalars['ID'];
  data?: Maybe<RemainderMailUpdateInput>;
};


export type MutationUpdateRemainderMailsArgs = {
  data?: Maybe<Array<Maybe<RemainderMailsUpdateInput>>>;
};


export type MutationDeleteRemainderMailArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRemainderMailsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateEventTypeCustomInputArgs = {
  data?: Maybe<EventTypeCustomInputCreateInput>;
};


export type MutationCreateEventTypeCustomInputsArgs = {
  data?: Maybe<Array<Maybe<EventTypeCustomInputsCreateInput>>>;
};


export type MutationUpdateEventTypeCustomInputArgs = {
  id: Scalars['ID'];
  data?: Maybe<EventTypeCustomInputUpdateInput>;
};


export type MutationUpdateEventTypeCustomInputsArgs = {
  data?: Maybe<Array<Maybe<EventTypeCustomInputsUpdateInput>>>;
};


export type MutationDeleteEventTypeCustomInputArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEventTypeCustomInputsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  SecretNotSet = 'SECRET_NOT_SET',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<User>>;
  User?: Maybe<User>;
  /** @deprecated This query will be removed in a future version. Please use usersCount instead. */
  _allUsersMeta?: Maybe<_QueryMeta>;
  usersCount?: Maybe<Scalars['Int']>;
  allMeetings?: Maybe<Array<Meeting>>;
  Meeting?: Maybe<Meeting>;
  /** @deprecated This query will be removed in a future version. Please use meetingsCount instead. */
  _allMeetingsMeta?: Maybe<_QueryMeta>;
  meetingsCount?: Maybe<Scalars['Int']>;
  allEventTypes?: Maybe<Array<EventType>>;
  EventType?: Maybe<EventType>;
  /** @deprecated This query will be removed in a future version. Please use eventTypesCount instead. */
  _allEventTypesMeta?: Maybe<_QueryMeta>;
  eventTypesCount?: Maybe<Scalars['Int']>;
  allCredentials?: Maybe<Array<Credential>>;
  Credential?: Maybe<Credential>;
  /** @deprecated This query will be removed in a future version. Please use credentialsCount instead. */
  _allCredentialsMeta?: Maybe<_QueryMeta>;
  credentialsCount?: Maybe<Scalars['Int']>;
  allTeams?: Maybe<Array<Team>>;
  Team?: Maybe<Team>;
  /** @deprecated This query will be removed in a future version. Please use teamsCount instead. */
  _allTeamsMeta?: Maybe<_QueryMeta>;
  teamsCount?: Maybe<Scalars['Int']>;
  allMemberships?: Maybe<Array<Membership>>;
  Membership?: Maybe<Membership>;
  /** @deprecated This query will be removed in a future version. Please use membershipsCount instead. */
  _allMembershipsMeta?: Maybe<_QueryMeta>;
  membershipsCount?: Maybe<Scalars['Int']>;
  allVerificationRequests?: Maybe<Array<VerificationRequest>>;
  verificationRequest?: Maybe<VerificationRequest>;
  /** @deprecated This query will be removed in a future version. Please use verificationRequestsCount instead. */
  _allVerificationRequestsMeta?: Maybe<_QueryMeta>;
  verificationRequestsCount?: Maybe<Scalars['Int']>;
  allBookingRefs?: Maybe<Array<BookingRef>>;
  BookingRef?: Maybe<BookingRef>;
  /** @deprecated This query will be removed in a future version. Please use bookingRefsCount instead. */
  _allBookingRefsMeta?: Maybe<_QueryMeta>;
  bookingRefsCount?: Maybe<Scalars['Int']>;
  allAttendees?: Maybe<Array<Attendee>>;
  Attendee?: Maybe<Attendee>;
  /** @deprecated This query will be removed in a future version. Please use attendeesCount instead. */
  _allAttendeesMeta?: Maybe<_QueryMeta>;
  attendeesCount?: Maybe<Scalars['Int']>;
  allBookings?: Maybe<Array<Booking>>;
  Booking?: Maybe<Booking>;
  /** @deprecated This query will be removed in a future version. Please use bookingsCount instead. */
  _allBookingsMeta?: Maybe<_QueryMeta>;
  bookingsCount?: Maybe<Scalars['Int']>;
  allAvailabilities?: Maybe<Array<Availability>>;
  Availability?: Maybe<Availability>;
  /** @deprecated This query will be removed in a future version. Please use availabilitiesCount instead. */
  _allAvailabilitiesMeta?: Maybe<_QueryMeta>;
  availabilitiesCount?: Maybe<Scalars['Int']>;
  allSelectedCalenders?: Maybe<Array<SelectedCalender>>;
  SelectedCalender?: Maybe<SelectedCalender>;
  /** @deprecated This query will be removed in a future version. Please use selectedCalendersCount instead. */
  _allSelectedCalendersMeta?: Maybe<_QueryMeta>;
  selectedCalendersCount?: Maybe<Scalars['Int']>;
  allResetPasswordRequests?: Maybe<Array<ResetPasswordRequest>>;
  ResetPasswordRequest?: Maybe<ResetPasswordRequest>;
  /** @deprecated This query will be removed in a future version. Please use resetPasswordRequestsCount instead. */
  _allResetPasswordRequestsMeta?: Maybe<_QueryMeta>;
  resetPasswordRequestsCount?: Maybe<Scalars['Int']>;
  allRemainderMails?: Maybe<Array<RemainderMail>>;
  RemainderMail?: Maybe<RemainderMail>;
  /** @deprecated This query will be removed in a future version. Please use remainderMailsCount instead. */
  _allRemainderMailsMeta?: Maybe<_QueryMeta>;
  remainderMailsCount?: Maybe<Scalars['Int']>;
  allEventTypeCustomInputs?: Maybe<Array<EventTypeCustomInput>>;
  EventTypeCustomInput?: Maybe<EventTypeCustomInput>;
  /** @deprecated This query will be removed in a future version. Please use eventTypeCustomInputsCount instead. */
  _allEventTypeCustomInputsMeta?: Maybe<_QueryMeta>;
  eventTypeCustomInputsCount?: Maybe<Scalars['Int']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
};


export type QueryAllUsersArgs = {
  where?: UserWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Array<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllUsersMetaArgs = {
  where?: UserWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Array<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryAllMeetingsArgs = {
  where?: MeetingWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortMeetingsBy>>;
  orderBy?: Array<MeetingOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryMeetingArgs = {
  where: MeetingWhereUniqueInput;
};


export type Query_AllMeetingsMetaArgs = {
  where?: MeetingWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortMeetingsBy>>;
  orderBy?: Array<MeetingOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryMeetingsCountArgs = {
  where?: MeetingWhereInput;
};


export type QueryAllEventTypesArgs = {
  where?: EventTypeWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortEventTypesBy>>;
  orderBy?: Array<EventTypeOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryEventTypeArgs = {
  where: EventTypeWhereUniqueInput;
};


export type Query_AllEventTypesMetaArgs = {
  where?: EventTypeWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortEventTypesBy>>;
  orderBy?: Array<EventTypeOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryEventTypesCountArgs = {
  where?: EventTypeWhereInput;
};


export type QueryAllCredentialsArgs = {
  where?: CredentialWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCredentialsBy>>;
  orderBy?: Array<CredentialOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryCredentialArgs = {
  where: CredentialWhereUniqueInput;
};


export type Query_AllCredentialsMetaArgs = {
  where?: CredentialWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCredentialsBy>>;
  orderBy?: Array<CredentialOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryCredentialsCountArgs = {
  where?: CredentialWhereInput;
};


export type QueryAllTeamsArgs = {
  where?: TeamWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTeamsBy>>;
  orderBy?: Array<TeamOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type Query_AllTeamsMetaArgs = {
  where?: TeamWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTeamsBy>>;
  orderBy?: Array<TeamOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryTeamsCountArgs = {
  where?: TeamWhereInput;
};


export type QueryAllMembershipsArgs = {
  where?: MembershipWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortMembershipsBy>>;
  orderBy?: Array<MembershipOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryMembershipArgs = {
  where: MembershipWhereUniqueInput;
};


export type Query_AllMembershipsMetaArgs = {
  where?: MembershipWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortMembershipsBy>>;
  orderBy?: Array<MembershipOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryMembershipsCountArgs = {
  where?: MembershipWhereInput;
};


export type QueryAllVerificationRequestsArgs = {
  where?: VerificationRequestWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortVerificationRequestsBy>>;
  orderBy?: Array<VerificationRequestOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryVerificationRequestArgs = {
  where: VerificationRequestWhereUniqueInput;
};


export type Query_AllVerificationRequestsMetaArgs = {
  where?: VerificationRequestWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortVerificationRequestsBy>>;
  orderBy?: Array<VerificationRequestOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryVerificationRequestsCountArgs = {
  where?: VerificationRequestWhereInput;
};


export type QueryAllBookingRefsArgs = {
  where?: BookingRefWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBookingRefsBy>>;
  orderBy?: Array<BookingRefOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryBookingRefArgs = {
  where: BookingRefWhereUniqueInput;
};


export type Query_AllBookingRefsMetaArgs = {
  where?: BookingRefWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBookingRefsBy>>;
  orderBy?: Array<BookingRefOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryBookingRefsCountArgs = {
  where?: BookingRefWhereInput;
};


export type QueryAllAttendeesArgs = {
  where?: AttendeeWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortAttendeesBy>>;
  orderBy?: Array<AttendeeOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryAttendeeArgs = {
  where: AttendeeWhereUniqueInput;
};


export type Query_AllAttendeesMetaArgs = {
  where?: AttendeeWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortAttendeesBy>>;
  orderBy?: Array<AttendeeOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryAttendeesCountArgs = {
  where?: AttendeeWhereInput;
};


export type QueryAllBookingsArgs = {
  where?: BookingWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBookingsBy>>;
  orderBy?: Array<BookingOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryBookingArgs = {
  where: BookingWhereUniqueInput;
};


export type Query_AllBookingsMetaArgs = {
  where?: BookingWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBookingsBy>>;
  orderBy?: Array<BookingOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryBookingsCountArgs = {
  where?: BookingWhereInput;
};


export type QueryAllAvailabilitiesArgs = {
  where?: AvailabilityWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortAvailabilitiesBy>>;
  orderBy?: Array<AvailabilityOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryAvailabilityArgs = {
  where: AvailabilityWhereUniqueInput;
};


export type Query_AllAvailabilitiesMetaArgs = {
  where?: AvailabilityWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortAvailabilitiesBy>>;
  orderBy?: Array<AvailabilityOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryAvailabilitiesCountArgs = {
  where?: AvailabilityWhereInput;
};


export type QueryAllSelectedCalendersArgs = {
  where?: SelectedCalenderWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortSelectedCalendersBy>>;
  orderBy?: Array<SelectedCalenderOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QuerySelectedCalenderArgs = {
  where: SelectedCalenderWhereUniqueInput;
};


export type Query_AllSelectedCalendersMetaArgs = {
  where?: SelectedCalenderWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortSelectedCalendersBy>>;
  orderBy?: Array<SelectedCalenderOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QuerySelectedCalendersCountArgs = {
  where?: SelectedCalenderWhereInput;
};


export type QueryAllResetPasswordRequestsArgs = {
  where?: ResetPasswordRequestWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortResetPasswordRequestsBy>>;
  orderBy?: Array<ResetPasswordRequestOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryResetPasswordRequestArgs = {
  where: ResetPasswordRequestWhereUniqueInput;
};


export type Query_AllResetPasswordRequestsMetaArgs = {
  where?: ResetPasswordRequestWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortResetPasswordRequestsBy>>;
  orderBy?: Array<ResetPasswordRequestOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryResetPasswordRequestsCountArgs = {
  where?: ResetPasswordRequestWhereInput;
};


export type QueryAllRemainderMailsArgs = {
  where?: RemainderMailWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRemainderMailsBy>>;
  orderBy?: Array<RemainderMailOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryRemainderMailArgs = {
  where: RemainderMailWhereUniqueInput;
};


export type Query_AllRemainderMailsMetaArgs = {
  where?: RemainderMailWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRemainderMailsBy>>;
  orderBy?: Array<RemainderMailOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryRemainderMailsCountArgs = {
  where?: RemainderMailWhereInput;
};


export type QueryAllEventTypeCustomInputsArgs = {
  where?: EventTypeCustomInputWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortEventTypeCustomInputsBy>>;
  orderBy?: Array<EventTypeCustomInputOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryEventTypeCustomInputArgs = {
  where: EventTypeCustomInputWhereUniqueInput;
};


export type Query_AllEventTypeCustomInputsMetaArgs = {
  where?: EventTypeCustomInputWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortEventTypeCustomInputsBy>>;
  orderBy?: Array<EventTypeCustomInputOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryEventTypeCustomInputsCountArgs = {
  where?: EventTypeCustomInputWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RemainderMail = {
  __typename?: 'RemainderMail';
  id: Scalars['ID'];
  referenceId?: Maybe<Scalars['Int']>;
  reminderType?: Maybe<Scalars['Int']>;
  elapsedMinutes?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
};

export type RemainderMailCreateInput = {
  referenceId?: Maybe<Scalars['Int']>;
  reminderType?: Maybe<Scalars['Int']>;
  elapsedMinutes?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
};

export type RemainderMailOrderByInput = {
  id?: Maybe<OrderDirection>;
  referenceId?: Maybe<OrderDirection>;
  reminderType?: Maybe<OrderDirection>;
  elapsedMinutes?: Maybe<OrderDirection>;
  createdAt?: Maybe<OrderDirection>;
};

export type RemainderMailUpdateInput = {
  referenceId?: Maybe<Scalars['Int']>;
  reminderType?: Maybe<Scalars['Int']>;
  elapsedMinutes?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
};

export type RemainderMailWhereInput = {
  AND?: Maybe<Array<RemainderMailWhereInput>>;
  OR?: Maybe<Array<RemainderMailWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  referenceId?: Maybe<Scalars['Int']>;
  referenceId_not?: Maybe<Scalars['Int']>;
  referenceId_lt?: Maybe<Scalars['Int']>;
  referenceId_lte?: Maybe<Scalars['Int']>;
  referenceId_gt?: Maybe<Scalars['Int']>;
  referenceId_gte?: Maybe<Scalars['Int']>;
  referenceId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  referenceId_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  reminderType?: Maybe<Scalars['Int']>;
  reminderType_not?: Maybe<Scalars['Int']>;
  reminderType_lt?: Maybe<Scalars['Int']>;
  reminderType_lte?: Maybe<Scalars['Int']>;
  reminderType_gt?: Maybe<Scalars['Int']>;
  reminderType_gte?: Maybe<Scalars['Int']>;
  reminderType_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  reminderType_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  elapsedMinutes?: Maybe<Scalars['Int']>;
  elapsedMinutes_not?: Maybe<Scalars['Int']>;
  elapsedMinutes_lt?: Maybe<Scalars['Int']>;
  elapsedMinutes_lte?: Maybe<Scalars['Int']>;
  elapsedMinutes_gt?: Maybe<Scalars['Int']>;
  elapsedMinutes_gte?: Maybe<Scalars['Int']>;
  elapsedMinutes_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  elapsedMinutes_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RemainderMailWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type RemainderMailsCreateInput = {
  data?: Maybe<RemainderMailCreateInput>;
};

export type RemainderMailsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<RemainderMailUpdateInput>;
};

export type ResetPasswordRequest = {
  __typename?: 'ResetPasswordRequest';
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['String']>;
};

export type ResetPasswordRequestCreateInput = {
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['String']>;
};

export type ResetPasswordRequestOrderByInput = {
  id?: Maybe<OrderDirection>;
  createdAt?: Maybe<OrderDirection>;
  updatedAt?: Maybe<OrderDirection>;
  email?: Maybe<OrderDirection>;
  expires?: Maybe<OrderDirection>;
};

export type ResetPasswordRequestUpdateInput = {
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['String']>;
};

export type ResetPasswordRequestWhereInput = {
  AND?: Maybe<Array<ResetPasswordRequestWhereInput>>;
  OR?: Maybe<Array<ResetPasswordRequestWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  expires?: Maybe<Scalars['String']>;
  expires_not?: Maybe<Scalars['String']>;
  expires_lt?: Maybe<Scalars['String']>;
  expires_lte?: Maybe<Scalars['String']>;
  expires_gt?: Maybe<Scalars['String']>;
  expires_gte?: Maybe<Scalars['String']>;
  expires_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  expires_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResetPasswordRequestWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ResetPasswordRequestsCreateInput = {
  data?: Maybe<ResetPasswordRequestCreateInput>;
};

export type ResetPasswordRequestsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ResetPasswordRequestUpdateInput>;
};

export type SelectedCalender = {
  __typename?: 'SelectedCalender';
  id: Scalars['ID'];
  user?: Maybe<User>;
  integration?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
};

export type SelectedCalenderCreateInput = {
  user?: Maybe<UserRelateToOneInput>;
  integration?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
};

export type SelectedCalenderOrderByInput = {
  id?: Maybe<OrderDirection>;
  integration?: Maybe<OrderDirection>;
  externalId?: Maybe<OrderDirection>;
};

export type SelectedCalenderUpdateInput = {
  user?: Maybe<UserRelateToOneInput>;
  integration?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
};

export type SelectedCalenderWhereInput = {
  AND?: Maybe<Array<SelectedCalenderWhereInput>>;
  OR?: Maybe<Array<SelectedCalenderWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
  integration?: Maybe<Scalars['String']>;
  integration_not?: Maybe<Scalars['String']>;
  integration_contains?: Maybe<Scalars['String']>;
  integration_not_contains?: Maybe<Scalars['String']>;
  integration_starts_with?: Maybe<Scalars['String']>;
  integration_not_starts_with?: Maybe<Scalars['String']>;
  integration_ends_with?: Maybe<Scalars['String']>;
  integration_not_ends_with?: Maybe<Scalars['String']>;
  integration_i?: Maybe<Scalars['String']>;
  integration_not_i?: Maybe<Scalars['String']>;
  integration_contains_i?: Maybe<Scalars['String']>;
  integration_not_contains_i?: Maybe<Scalars['String']>;
  integration_starts_with_i?: Maybe<Scalars['String']>;
  integration_not_starts_with_i?: Maybe<Scalars['String']>;
  integration_ends_with_i?: Maybe<Scalars['String']>;
  integration_not_ends_with_i?: Maybe<Scalars['String']>;
  integration_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  integration_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  externalId?: Maybe<Scalars['String']>;
  externalId_not?: Maybe<Scalars['String']>;
  externalId_contains?: Maybe<Scalars['String']>;
  externalId_not_contains?: Maybe<Scalars['String']>;
  externalId_starts_with?: Maybe<Scalars['String']>;
  externalId_not_starts_with?: Maybe<Scalars['String']>;
  externalId_ends_with?: Maybe<Scalars['String']>;
  externalId_not_ends_with?: Maybe<Scalars['String']>;
  externalId_i?: Maybe<Scalars['String']>;
  externalId_not_i?: Maybe<Scalars['String']>;
  externalId_contains_i?: Maybe<Scalars['String']>;
  externalId_not_contains_i?: Maybe<Scalars['String']>;
  externalId_starts_with_i?: Maybe<Scalars['String']>;
  externalId_not_starts_with_i?: Maybe<Scalars['String']>;
  externalId_ends_with_i?: Maybe<Scalars['String']>;
  externalId_not_ends_with_i?: Maybe<Scalars['String']>;
  externalId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  externalId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SelectedCalenderWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type SelectedCalendersCreateInput = {
  data?: Maybe<SelectedCalenderCreateInput>;
};

export type SelectedCalendersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<SelectedCalenderUpdateInput>;
};

export enum SortAttendeesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TimeZoneAsc = 'timeZone_ASC',
  TimeZoneDesc = 'timeZone_DESC'
}

export enum SortAvailabilitiesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC'
}

export enum SortBookingRefsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UidAsc = 'uid_ASC',
  UidDesc = 'uid_DESC'
}

export enum SortBookingsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UidAsc = 'uid_ASC',
  UidDesc = 'uid_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ConfirmedAsc = 'confirmed_ASC',
  ConfirmedDesc = 'confirmed_DESC',
  RejectedAsc = 'rejected_ASC',
  RejectedDesc = 'rejected_DESC'
}

export enum SortCredentialsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum SortEventTypeCustomInputsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  PlaceholderAsc = 'placeholder_ASC',
  PlaceholderDesc = 'placeholder_DESC'
}

export enum SortEventTypesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  LengthAsc = 'length_ASC',
  LengthDesc = 'length_DESC',
  HiddenAsc = 'hidden_ASC',
  HiddenDesc = 'hidden_DESC',
  EventNameAsc = 'eventName_ASC',
  EventNameDesc = 'eventName_DESC',
  TimeZoneAsc = 'timeZone_ASC',
  TimeZoneDesc = 'timeZone_DESC',
  PeriodTypeAsc = 'periodType_ASC',
  PeriodTypeDesc = 'periodType_DESC',
  PeriodStartDateAsc = 'periodStartDate_ASC',
  PeriodStartDateDesc = 'periodStartDate_DESC',
  PeriodEndDateAsc = 'periodEndDate_ASC',
  PeriodEndDateDesc = 'periodEndDate_DESC',
  PeriodDaysAsc = 'periodDays_ASC',
  PeriodDaysDesc = 'periodDays_DESC',
  PeriodCountCalendarDaysAsc = 'periodCountCalendarDays_ASC',
  PeriodCountCalendarDaysDesc = 'periodCountCalendarDays_DESC',
  RequiresConfirmationAsc = 'requiresConfirmation_ASC',
  RequiresConfirmationDesc = 'requiresConfirmation_DESC',
  MinimumBookingNoticeAsc = 'minimumBookingNotice_ASC',
  MinimumBookingNoticeDesc = 'minimumBookingNotice_DESC'
}

export enum SortMeetingsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MeetingtypeAsc = 'meetingtype_ASC',
  MeetingtypeDesc = 'meetingtype_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  GuestNameAsc = 'guestName_ASC',
  GuestNameDesc = 'guestName_DESC',
  GuestEmailAsc = 'guestEmail_ASC',
  GuestEmailDesc = 'guestEmail_DESC',
  MeetingDescAsc = 'meetingDesc_ASC',
  MeetingDescDesc = 'meetingDesc_DESC'
}

export enum SortMembershipsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AcceptedAsc = 'accepted_ASC',
  AcceptedDesc = 'accepted_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC'
}

export enum SortRemainderMailsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ReferenceIdAsc = 'referenceId_ASC',
  ReferenceIdDesc = 'referenceId_DESC',
  ReminderTypeAsc = 'reminderType_ASC',
  ReminderTypeDesc = 'reminderType_DESC',
  ElapsedMinutesAsc = 'elapsedMinutes_ASC',
  ElapsedMinutesDesc = 'elapsedMinutes_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC'
}

export enum SortResetPasswordRequestsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ExpiresAsc = 'expires_ASC',
  ExpiresDesc = 'expires_DESC'
}

export enum SortSelectedCalendersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntegrationAsc = 'integration_ASC',
  IntegrationDesc = 'integration_DESC',
  ExternalIdAsc = 'externalId_ASC',
  ExternalIdDesc = 'externalId_DESC'
}

export enum SortTeamsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

export enum SortUsersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC'
}

export enum SortVerificationRequestsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentifierAsc = 'identifier_ASC',
  IdentifierDesc = 'identifier_DESC',
  TokenAsc = 'token_ASC',
  TokenDesc = 'token_DESC',
  ExpiresAsc = 'expires_ASC',
  ExpiresDesc = 'expires_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  members?: Maybe<Membership>;
};

export type TeamCreateInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  members?: Maybe<MembershipRelateToOneInput>;
};

export type TeamOrderByInput = {
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  slug?: Maybe<OrderDirection>;
};

export type TeamRelateToOneInput = {
  create?: Maybe<TeamCreateInput>;
  connect?: Maybe<TeamWhereUniqueInput>;
  disconnect?: Maybe<TeamWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type TeamUpdateInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  members?: Maybe<MembershipRelateToOneInput>;
};

export type TeamWhereInput = {
  AND?: Maybe<Array<TeamWhereInput>>;
  OR?: Maybe<Array<TeamWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_i?: Maybe<Scalars['String']>;
  slug_not_i?: Maybe<Scalars['String']>;
  slug_contains_i?: Maybe<Scalars['String']>;
  slug_not_contains_i?: Maybe<Scalars['String']>;
  slug_starts_with_i?: Maybe<Scalars['String']>;
  slug_not_starts_with_i?: Maybe<Scalars['String']>;
  slug_ends_with_i?: Maybe<Scalars['String']>;
  slug_not_ends_with_i?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  members?: Maybe<MembershipWhereInput>;
  members_is_null?: Maybe<Scalars['Boolean']>;
};

export type TeamWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type TeamsCreateInput = {
  data?: Maybe<TeamCreateInput>;
};

export type TeamsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<TeamUpdateInput>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  language?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  meetings?: Maybe<Array<Meeting>>;
  /** @deprecated This query will be removed in a future version. Please use meetingsCount instead. */
  _meetingsMeta?: Maybe<_QueryMeta>;
  meetingsCount?: Maybe<Scalars['Int']>;
};


export type UserMeetingsArgs = {
  where?: MeetingWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortMeetingsBy>>;
  orderBy?: Array<MeetingOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type User_MeetingsMetaArgs = {
  where?: MeetingWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortMeetingsBy>>;
  orderBy?: Array<MeetingOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type UserMeetingsCountArgs = {
  where?: MeetingWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordSuccess | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  sessionToken: Scalars['String'];
  item: User;
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  meetings?: Maybe<MeetingRelateToManyInput>;
};

export type UserOrderByInput = {
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  email?: Maybe<OrderDirection>;
  language?: Maybe<OrderDirection>;
  country?: Maybe<OrderDirection>;
  timezone?: Maybe<OrderDirection>;
};

export type UserRelateToOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  meetings?: Maybe<MeetingRelateToManyInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  language_not?: Maybe<Scalars['String']>;
  language_contains?: Maybe<Scalars['String']>;
  language_not_contains?: Maybe<Scalars['String']>;
  language_starts_with?: Maybe<Scalars['String']>;
  language_not_starts_with?: Maybe<Scalars['String']>;
  language_ends_with?: Maybe<Scalars['String']>;
  language_not_ends_with?: Maybe<Scalars['String']>;
  language_i?: Maybe<Scalars['String']>;
  language_not_i?: Maybe<Scalars['String']>;
  language_contains_i?: Maybe<Scalars['String']>;
  language_not_contains_i?: Maybe<Scalars['String']>;
  language_starts_with_i?: Maybe<Scalars['String']>;
  language_not_starts_with_i?: Maybe<Scalars['String']>;
  language_ends_with_i?: Maybe<Scalars['String']>;
  language_not_ends_with_i?: Maybe<Scalars['String']>;
  language_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  language_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  country?: Maybe<Scalars['String']>;
  country_not?: Maybe<Scalars['String']>;
  country_contains?: Maybe<Scalars['String']>;
  country_not_contains?: Maybe<Scalars['String']>;
  country_starts_with?: Maybe<Scalars['String']>;
  country_not_starts_with?: Maybe<Scalars['String']>;
  country_ends_with?: Maybe<Scalars['String']>;
  country_not_ends_with?: Maybe<Scalars['String']>;
  country_i?: Maybe<Scalars['String']>;
  country_not_i?: Maybe<Scalars['String']>;
  country_contains_i?: Maybe<Scalars['String']>;
  country_not_contains_i?: Maybe<Scalars['String']>;
  country_starts_with_i?: Maybe<Scalars['String']>;
  country_not_starts_with_i?: Maybe<Scalars['String']>;
  country_ends_with_i?: Maybe<Scalars['String']>;
  country_not_ends_with_i?: Maybe<Scalars['String']>;
  country_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  timezone?: Maybe<Scalars['String']>;
  timezone_not?: Maybe<Scalars['String']>;
  timezone_contains?: Maybe<Scalars['String']>;
  timezone_not_contains?: Maybe<Scalars['String']>;
  timezone_starts_with?: Maybe<Scalars['String']>;
  timezone_not_starts_with?: Maybe<Scalars['String']>;
  timezone_ends_with?: Maybe<Scalars['String']>;
  timezone_not_ends_with?: Maybe<Scalars['String']>;
  timezone_i?: Maybe<Scalars['String']>;
  timezone_not_i?: Maybe<Scalars['String']>;
  timezone_contains_i?: Maybe<Scalars['String']>;
  timezone_not_contains_i?: Maybe<Scalars['String']>;
  timezone_starts_with_i?: Maybe<Scalars['String']>;
  timezone_not_starts_with_i?: Maybe<Scalars['String']>;
  timezone_ends_with_i?: Maybe<Scalars['String']>;
  timezone_not_ends_with_i?: Maybe<Scalars['String']>;
  timezone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  timezone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  meetings_every?: Maybe<MeetingWhereInput>;
  meetings_some?: Maybe<MeetingWhereInput>;
  meetings_none?: Maybe<MeetingWhereInput>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type VerificationRequestsCreateInput = {
  data?: Maybe<VerificationRequestCreateInput>;
};

export type VerificationRequestsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<VerificationRequestUpdateInput>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type VerificationRequest = {
  __typename?: 'verificationRequest';
  id: Scalars['ID'];
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type VerificationRequestCreateInput = {
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type VerificationRequestOrderByInput = {
  id?: Maybe<OrderDirection>;
  identifier?: Maybe<OrderDirection>;
  token?: Maybe<OrderDirection>;
  expires?: Maybe<OrderDirection>;
  createdAt?: Maybe<OrderDirection>;
  updatedAt?: Maybe<OrderDirection>;
};

export type VerificationRequestUpdateInput = {
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type VerificationRequestWhereInput = {
  AND?: Maybe<Array<VerificationRequestWhereInput>>;
  OR?: Maybe<Array<VerificationRequestWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  identifier?: Maybe<Scalars['String']>;
  identifier_not?: Maybe<Scalars['String']>;
  identifier_contains?: Maybe<Scalars['String']>;
  identifier_not_contains?: Maybe<Scalars['String']>;
  identifier_starts_with?: Maybe<Scalars['String']>;
  identifier_not_starts_with?: Maybe<Scalars['String']>;
  identifier_ends_with?: Maybe<Scalars['String']>;
  identifier_not_ends_with?: Maybe<Scalars['String']>;
  identifier_i?: Maybe<Scalars['String']>;
  identifier_not_i?: Maybe<Scalars['String']>;
  identifier_contains_i?: Maybe<Scalars['String']>;
  identifier_not_contains_i?: Maybe<Scalars['String']>;
  identifier_starts_with_i?: Maybe<Scalars['String']>;
  identifier_not_starts_with_i?: Maybe<Scalars['String']>;
  identifier_ends_with_i?: Maybe<Scalars['String']>;
  identifier_not_ends_with_i?: Maybe<Scalars['String']>;
  identifier_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  identifier_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  token_i?: Maybe<Scalars['String']>;
  token_not_i?: Maybe<Scalars['String']>;
  token_contains_i?: Maybe<Scalars['String']>;
  token_not_contains_i?: Maybe<Scalars['String']>;
  token_starts_with_i?: Maybe<Scalars['String']>;
  token_not_starts_with_i?: Maybe<Scalars['String']>;
  token_ends_with_i?: Maybe<Scalars['String']>;
  token_not_ends_with_i?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  token_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  expires?: Maybe<Scalars['String']>;
  expires_not?: Maybe<Scalars['String']>;
  expires_lt?: Maybe<Scalars['String']>;
  expires_lte?: Maybe<Scalars['String']>;
  expires_gt?: Maybe<Scalars['String']>;
  expires_gte?: Maybe<Scalars['String']>;
  expires_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  expires_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type VerificationRequestWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['String']>;
};

export type AttendeeKeySpecifier = ('id' | 'email' | 'name' | 'timeZone' | 'booking' | AttendeeKeySpecifier)[];
export type AttendeeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	timeZone?: FieldPolicy<any> | FieldReadFunction<any>,
	booking?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AvailabilityKeySpecifier = ('id' | 'label' | 'user' | 'eventType' | 'startTime' | 'endTime' | 'date' | AvailabilityKeySpecifier)[];
export type AvailabilityFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	eventType?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BookingKeySpecifier = ('id' | 'uid' | 'user' | 'references' | 'eventType' | 'title' | 'description' | 'startTime' | 'endTime' | 'attendees' | 'location' | 'createdAt' | 'updatedAt' | 'confirmed' | 'rejected' | BookingKeySpecifier)[];
export type BookingFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>,
	eventType?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	attendees?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmed?: FieldPolicy<any> | FieldReadFunction<any>,
	rejected?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BookingRefKeySpecifier = ('id' | 'type' | 'uid' | 'booking' | BookingRefKeySpecifier)[];
export type BookingRefFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	booking?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CredentialKeySpecifier = ('id' | 'type' | 'key' | 'user' | CredentialKeySpecifier)[];
export type CredentialFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventTypeKeySpecifier = ('id' | 'title' | 'slug' | 'description' | 'locations' | 'length' | 'hidden' | 'user' | 'bookings' | 'availability' | 'eventName' | 'customInputs' | 'timeZone' | 'periodType' | 'periodStartDate' | 'periodEndDate' | 'periodDays' | 'periodCountCalendarDays' | 'requiresConfirmation' | 'minimumBookingNotice' | EventTypeKeySpecifier)[];
export type EventTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>,
	length?: FieldPolicy<any> | FieldReadFunction<any>,
	hidden?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	bookings?: FieldPolicy<any> | FieldReadFunction<any>,
	availability?: FieldPolicy<any> | FieldReadFunction<any>,
	eventName?: FieldPolicy<any> | FieldReadFunction<any>,
	customInputs?: FieldPolicy<any> | FieldReadFunction<any>,
	timeZone?: FieldPolicy<any> | FieldReadFunction<any>,
	periodType?: FieldPolicy<any> | FieldReadFunction<any>,
	periodStartDate?: FieldPolicy<any> | FieldReadFunction<any>,
	periodEndDate?: FieldPolicy<any> | FieldReadFunction<any>,
	periodDays?: FieldPolicy<any> | FieldReadFunction<any>,
	periodCountCalendarDays?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresConfirmation?: FieldPolicy<any> | FieldReadFunction<any>,
	minimumBookingNotice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventTypeCustomInputKeySpecifier = ('id' | 'eventType' | 'label' | 'required' | 'placeholder' | EventTypeCustomInputKeySpecifier)[];
export type EventTypeCustomInputFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	eventType?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	placeholder?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminMetaKeySpecifier = ('enableSignout' | 'enableSessionItem' | 'lists' | 'list' | KeystoneAdminMetaKeySpecifier)[];
export type KeystoneAdminMetaFieldPolicy = {
	enableSignout?: FieldPolicy<any> | FieldReadFunction<any>,
	enableSessionItem?: FieldPolicy<any> | FieldReadFunction<any>,
	lists?: FieldPolicy<any> | FieldReadFunction<any>,
	list?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaKeySpecifier = ('path' | 'label' | 'isOrderable' | 'fieldMeta' | 'viewsIndex' | 'customViewsIndex' | 'createView' | 'listView' | 'itemView' | 'search' | KeystoneAdminUIFieldMetaKeySpecifier)[];
export type KeystoneAdminUIFieldMetaFieldPolicy = {
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	isOrderable?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	viewsIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	customViewsIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	createView?: FieldPolicy<any> | FieldReadFunction<any>,
	listView?: FieldPolicy<any> | FieldReadFunction<any>,
	itemView?: FieldPolicy<any> | FieldReadFunction<any>,
	search?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaCreateViewKeySpecifier = ('fieldMode' | KeystoneAdminUIFieldMetaCreateViewKeySpecifier)[];
export type KeystoneAdminUIFieldMetaCreateViewFieldPolicy = {
	fieldMode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaItemViewKeySpecifier = ('fieldMode' | KeystoneAdminUIFieldMetaItemViewKeySpecifier)[];
export type KeystoneAdminUIFieldMetaItemViewFieldPolicy = {
	fieldMode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaListViewKeySpecifier = ('fieldMode' | KeystoneAdminUIFieldMetaListViewKeySpecifier)[];
export type KeystoneAdminUIFieldMetaListViewFieldPolicy = {
	fieldMode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIListMetaKeySpecifier = ('key' | 'itemQueryName' | 'listQueryName' | 'hideCreate' | 'hideDelete' | 'path' | 'label' | 'singular' | 'plural' | 'description' | 'initialColumns' | 'pageSize' | 'labelField' | 'fields' | 'initialSort' | 'isHidden' | KeystoneAdminUIListMetaKeySpecifier)[];
export type KeystoneAdminUIListMetaFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	itemQueryName?: FieldPolicy<any> | FieldReadFunction<any>,
	listQueryName?: FieldPolicy<any> | FieldReadFunction<any>,
	hideCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	hideDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	singular?: FieldPolicy<any> | FieldReadFunction<any>,
	plural?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	initialColumns?: FieldPolicy<any> | FieldReadFunction<any>,
	pageSize?: FieldPolicy<any> | FieldReadFunction<any>,
	labelField?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	initialSort?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUISortKeySpecifier = ('field' | 'direction' | KeystoneAdminUISortKeySpecifier)[];
export type KeystoneAdminUISortFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	direction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneMetaKeySpecifier = ('adminMeta' | KeystoneMetaKeySpecifier)[];
export type KeystoneMetaFieldPolicy = {
	adminMeta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MeetingKeySpecifier = ('id' | 'meetingtype' | 'date' | 'guestName' | 'guestEmail' | 'meetingDesc' | 'user' | MeetingKeySpecifier)[];
export type MeetingFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	meetingtype?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	guestName?: FieldPolicy<any> | FieldReadFunction<any>,
	guestEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	meetingDesc?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MembershipKeySpecifier = ('id' | 'accepted' | 'role' | 'team' | 'user' | MembershipKeySpecifier)[];
export type MembershipFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	accepted?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createUser' | 'createUsers' | 'updateUser' | 'updateUsers' | 'deleteUser' | 'deleteUsers' | 'createMeeting' | 'createMeetings' | 'updateMeeting' | 'updateMeetings' | 'deleteMeeting' | 'deleteMeetings' | 'createEventType' | 'createEventTypes' | 'updateEventType' | 'updateEventTypes' | 'deleteEventType' | 'deleteEventTypes' | 'createCredential' | 'createCredentials' | 'updateCredential' | 'updateCredentials' | 'deleteCredential' | 'deleteCredentials' | 'createTeam' | 'createTeams' | 'updateTeam' | 'updateTeams' | 'deleteTeam' | 'deleteTeams' | 'createMembership' | 'createMemberships' | 'updateMembership' | 'updateMemberships' | 'deleteMembership' | 'deleteMemberships' | 'createverificationRequest' | 'createVerificationRequests' | 'updateverificationRequest' | 'updateVerificationRequests' | 'deleteverificationRequest' | 'deleteVerificationRequests' | 'createBookingRef' | 'createBookingRefs' | 'updateBookingRef' | 'updateBookingRefs' | 'deleteBookingRef' | 'deleteBookingRefs' | 'createAttendee' | 'createAttendees' | 'updateAttendee' | 'updateAttendees' | 'deleteAttendee' | 'deleteAttendees' | 'createBooking' | 'createBookings' | 'updateBooking' | 'updateBookings' | 'deleteBooking' | 'deleteBookings' | 'createAvailability' | 'createAvailabilities' | 'updateAvailability' | 'updateAvailabilities' | 'deleteAvailability' | 'deleteAvailabilities' | 'createSelectedCalender' | 'createSelectedCalenders' | 'updateSelectedCalender' | 'updateSelectedCalenders' | 'deleteSelectedCalender' | 'deleteSelectedCalenders' | 'createResetPasswordRequest' | 'createResetPasswordRequests' | 'updateResetPasswordRequest' | 'updateResetPasswordRequests' | 'deleteResetPasswordRequest' | 'deleteResetPasswordRequests' | 'createRemainderMail' | 'createRemainderMails' | 'updateRemainderMail' | 'updateRemainderMails' | 'deleteRemainderMail' | 'deleteRemainderMails' | 'createEventTypeCustomInput' | 'createEventTypeCustomInputs' | 'updateEventTypeCustomInput' | 'updateEventTypeCustomInputs' | 'deleteEventTypeCustomInput' | 'deleteEventTypeCustomInputs' | 'authenticateUserWithPassword' | 'createInitialUser' | 'endSession' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	createMeeting?: FieldPolicy<any> | FieldReadFunction<any>,
	createMeetings?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMeeting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMeetings?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMeeting?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMeetings?: FieldPolicy<any> | FieldReadFunction<any>,
	createEventType?: FieldPolicy<any> | FieldReadFunction<any>,
	createEventTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEventType?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEventTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEventType?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEventTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	createCredential?: FieldPolicy<any> | FieldReadFunction<any>,
	createCredentials?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCredential?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCredentials?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCredential?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCredentials?: FieldPolicy<any> | FieldReadFunction<any>,
	createTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	createTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	createMembership?: FieldPolicy<any> | FieldReadFunction<any>,
	createMemberships?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMembership?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMemberships?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMembership?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMemberships?: FieldPolicy<any> | FieldReadFunction<any>,
	createverificationRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	createVerificationRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	updateverificationRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	updateVerificationRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteverificationRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteVerificationRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	createBookingRef?: FieldPolicy<any> | FieldReadFunction<any>,
	createBookingRefs?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBookingRef?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBookingRefs?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBookingRef?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBookingRefs?: FieldPolicy<any> | FieldReadFunction<any>,
	createAttendee?: FieldPolicy<any> | FieldReadFunction<any>,
	createAttendees?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAttendee?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAttendees?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAttendee?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAttendees?: FieldPolicy<any> | FieldReadFunction<any>,
	createBooking?: FieldPolicy<any> | FieldReadFunction<any>,
	createBookings?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBooking?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBookings?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBooking?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBookings?: FieldPolicy<any> | FieldReadFunction<any>,
	createAvailability?: FieldPolicy<any> | FieldReadFunction<any>,
	createAvailabilities?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAvailability?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAvailabilities?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAvailability?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAvailabilities?: FieldPolicy<any> | FieldReadFunction<any>,
	createSelectedCalender?: FieldPolicy<any> | FieldReadFunction<any>,
	createSelectedCalenders?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSelectedCalender?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSelectedCalenders?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSelectedCalender?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSelectedCalenders?: FieldPolicy<any> | FieldReadFunction<any>,
	createResetPasswordRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	createResetPasswordRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	updateResetPasswordRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	updateResetPasswordRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteResetPasswordRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteResetPasswordRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	createRemainderMail?: FieldPolicy<any> | FieldReadFunction<any>,
	createRemainderMails?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRemainderMail?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRemainderMails?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRemainderMail?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRemainderMails?: FieldPolicy<any> | FieldReadFunction<any>,
	createEventTypeCustomInput?: FieldPolicy<any> | FieldReadFunction<any>,
	createEventTypeCustomInputs?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEventTypeCustomInput?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEventTypeCustomInputs?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEventTypeCustomInput?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEventTypeCustomInputs?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticateUserWithPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	createInitialUser?: FieldPolicy<any> | FieldReadFunction<any>,
	endSession?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PasswordStateKeySpecifier = ('isSet' | PasswordStateKeySpecifier)[];
export type PasswordStateFieldPolicy = {
	isSet?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('allUsers' | 'User' | '_allUsersMeta' | 'usersCount' | 'allMeetings' | 'Meeting' | '_allMeetingsMeta' | 'meetingsCount' | 'allEventTypes' | 'EventType' | '_allEventTypesMeta' | 'eventTypesCount' | 'allCredentials' | 'Credential' | '_allCredentialsMeta' | 'credentialsCount' | 'allTeams' | 'Team' | '_allTeamsMeta' | 'teamsCount' | 'allMemberships' | 'Membership' | '_allMembershipsMeta' | 'membershipsCount' | 'allVerificationRequests' | 'verificationRequest' | '_allVerificationRequestsMeta' | 'verificationRequestsCount' | 'allBookingRefs' | 'BookingRef' | '_allBookingRefsMeta' | 'bookingRefsCount' | 'allAttendees' | 'Attendee' | '_allAttendeesMeta' | 'attendeesCount' | 'allBookings' | 'Booking' | '_allBookingsMeta' | 'bookingsCount' | 'allAvailabilities' | 'Availability' | '_allAvailabilitiesMeta' | 'availabilitiesCount' | 'allSelectedCalenders' | 'SelectedCalender' | '_allSelectedCalendersMeta' | 'selectedCalendersCount' | 'allResetPasswordRequests' | 'ResetPasswordRequest' | '_allResetPasswordRequestsMeta' | 'resetPasswordRequestsCount' | 'allRemainderMails' | 'RemainderMail' | '_allRemainderMailsMeta' | 'remainderMailsCount' | 'allEventTypeCustomInputs' | 'EventTypeCustomInput' | '_allEventTypeCustomInputsMeta' | 'eventTypeCustomInputsCount' | 'authenticatedItem' | 'keystone' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	allUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	_allUsersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	usersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allMeetings?: FieldPolicy<any> | FieldReadFunction<any>,
	Meeting?: FieldPolicy<any> | FieldReadFunction<any>,
	_allMeetingsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meetingsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allEventTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	EventType?: FieldPolicy<any> | FieldReadFunction<any>,
	_allEventTypesMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	eventTypesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allCredentials?: FieldPolicy<any> | FieldReadFunction<any>,
	Credential?: FieldPolicy<any> | FieldReadFunction<any>,
	_allCredentialsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	credentialsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	Team?: FieldPolicy<any> | FieldReadFunction<any>,
	_allTeamsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	teamsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allMemberships?: FieldPolicy<any> | FieldReadFunction<any>,
	Membership?: FieldPolicy<any> | FieldReadFunction<any>,
	_allMembershipsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	membershipsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allVerificationRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	verificationRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	_allVerificationRequestsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	verificationRequestsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allBookingRefs?: FieldPolicy<any> | FieldReadFunction<any>,
	BookingRef?: FieldPolicy<any> | FieldReadFunction<any>,
	_allBookingRefsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	bookingRefsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allAttendees?: FieldPolicy<any> | FieldReadFunction<any>,
	Attendee?: FieldPolicy<any> | FieldReadFunction<any>,
	_allAttendeesMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	attendeesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allBookings?: FieldPolicy<any> | FieldReadFunction<any>,
	Booking?: FieldPolicy<any> | FieldReadFunction<any>,
	_allBookingsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	bookingsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allAvailabilities?: FieldPolicy<any> | FieldReadFunction<any>,
	Availability?: FieldPolicy<any> | FieldReadFunction<any>,
	_allAvailabilitiesMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	availabilitiesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allSelectedCalenders?: FieldPolicy<any> | FieldReadFunction<any>,
	SelectedCalender?: FieldPolicy<any> | FieldReadFunction<any>,
	_allSelectedCalendersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	selectedCalendersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allResetPasswordRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	ResetPasswordRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	_allResetPasswordRequestsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPasswordRequestsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allRemainderMails?: FieldPolicy<any> | FieldReadFunction<any>,
	RemainderMail?: FieldPolicy<any> | FieldReadFunction<any>,
	_allRemainderMailsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	remainderMailsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	allEventTypeCustomInputs?: FieldPolicy<any> | FieldReadFunction<any>,
	EventTypeCustomInput?: FieldPolicy<any> | FieldReadFunction<any>,
	_allEventTypeCustomInputsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	eventTypeCustomInputsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticatedItem?: FieldPolicy<any> | FieldReadFunction<any>,
	keystone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemainderMailKeySpecifier = ('id' | 'referenceId' | 'reminderType' | 'elapsedMinutes' | 'createdAt' | RemainderMailKeySpecifier)[];
export type RemainderMailFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceId?: FieldPolicy<any> | FieldReadFunction<any>,
	reminderType?: FieldPolicy<any> | FieldReadFunction<any>,
	elapsedMinutes?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordRequestKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'email' | 'expires' | ResetPasswordRequestKeySpecifier)[];
export type ResetPasswordRequestFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	expires?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedCalenderKeySpecifier = ('id' | 'user' | 'integration' | 'externalId' | SelectedCalenderKeySpecifier)[];
export type SelectedCalenderFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	integration?: FieldPolicy<any> | FieldReadFunction<any>,
	externalId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamKeySpecifier = ('id' | 'name' | 'slug' | 'members' | TeamKeySpecifier)[];
export type TeamFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | 'name' | 'email' | 'password' | 'language' | 'country' | 'timezone' | 'meetings' | '_meetingsMeta' | 'meetingsCount' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	timezone?: FieldPolicy<any> | FieldReadFunction<any>,
	meetings?: FieldPolicy<any> | FieldReadFunction<any>,
	_meetingsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meetingsCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthenticationWithPasswordFailureKeySpecifier = ('code' | 'message' | UserAuthenticationWithPasswordFailureKeySpecifier)[];
export type UserAuthenticationWithPasswordFailureFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthenticationWithPasswordSuccessKeySpecifier = ('sessionToken' | 'item' | UserAuthenticationWithPasswordSuccessKeySpecifier)[];
export type UserAuthenticationWithPasswordSuccessFieldPolicy = {
	sessionToken?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _QueryMetaKeySpecifier = ('count' | _QueryMetaKeySpecifier)[];
export type _QueryMetaFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type verificationRequestKeySpecifier = ('id' | 'identifier' | 'token' | 'expires' | 'createdAt' | 'updatedAt' | verificationRequestKeySpecifier)[];
export type verificationRequestFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	expires?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Attendee?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttendeeKeySpecifier | (() => undefined | AttendeeKeySpecifier),
		fields?: AttendeeFieldPolicy,
	},
	Availability?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AvailabilityKeySpecifier | (() => undefined | AvailabilityKeySpecifier),
		fields?: AvailabilityFieldPolicy,
	},
	Booking?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BookingKeySpecifier | (() => undefined | BookingKeySpecifier),
		fields?: BookingFieldPolicy,
	},
	BookingRef?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BookingRefKeySpecifier | (() => undefined | BookingRefKeySpecifier),
		fields?: BookingRefFieldPolicy,
	},
	Credential?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CredentialKeySpecifier | (() => undefined | CredentialKeySpecifier),
		fields?: CredentialFieldPolicy,
	},
	EventType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventTypeKeySpecifier | (() => undefined | EventTypeKeySpecifier),
		fields?: EventTypeFieldPolicy,
	},
	EventTypeCustomInput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventTypeCustomInputKeySpecifier | (() => undefined | EventTypeCustomInputKeySpecifier),
		fields?: EventTypeCustomInputFieldPolicy,
	},
	KeystoneAdminMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminMetaKeySpecifier | (() => undefined | KeystoneAdminMetaKeySpecifier),
		fields?: KeystoneAdminMetaFieldPolicy,
	},
	KeystoneAdminUIFieldMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaFieldPolicy,
	},
	KeystoneAdminUIFieldMetaCreateView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaCreateViewKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaCreateViewKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaCreateViewFieldPolicy,
	},
	KeystoneAdminUIFieldMetaItemView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaItemViewKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaItemViewKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaItemViewFieldPolicy,
	},
	KeystoneAdminUIFieldMetaListView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaListViewKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaListViewKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaListViewFieldPolicy,
	},
	KeystoneAdminUIListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIListMetaKeySpecifier | (() => undefined | KeystoneAdminUIListMetaKeySpecifier),
		fields?: KeystoneAdminUIListMetaFieldPolicy,
	},
	KeystoneAdminUISort?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUISortKeySpecifier | (() => undefined | KeystoneAdminUISortKeySpecifier),
		fields?: KeystoneAdminUISortFieldPolicy,
	},
	KeystoneMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneMetaKeySpecifier | (() => undefined | KeystoneMetaKeySpecifier),
		fields?: KeystoneMetaFieldPolicy,
	},
	Meeting?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MeetingKeySpecifier | (() => undefined | MeetingKeySpecifier),
		fields?: MeetingFieldPolicy,
	},
	Membership?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MembershipKeySpecifier | (() => undefined | MembershipKeySpecifier),
		fields?: MembershipFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	PasswordState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PasswordStateKeySpecifier | (() => undefined | PasswordStateKeySpecifier),
		fields?: PasswordStateFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RemainderMail?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemainderMailKeySpecifier | (() => undefined | RemainderMailKeySpecifier),
		fields?: RemainderMailFieldPolicy,
	},
	ResetPasswordRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordRequestKeySpecifier | (() => undefined | ResetPasswordRequestKeySpecifier),
		fields?: ResetPasswordRequestFieldPolicy,
	},
	SelectedCalender?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedCalenderKeySpecifier | (() => undefined | SelectedCalenderKeySpecifier),
		fields?: SelectedCalenderFieldPolicy,
	},
	Team?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamKeySpecifier | (() => undefined | TeamKeySpecifier),
		fields?: TeamFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserAuthenticationWithPasswordFailure?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthenticationWithPasswordFailureKeySpecifier | (() => undefined | UserAuthenticationWithPasswordFailureKeySpecifier),
		fields?: UserAuthenticationWithPasswordFailureFieldPolicy,
	},
	UserAuthenticationWithPasswordSuccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthenticationWithPasswordSuccessKeySpecifier | (() => undefined | UserAuthenticationWithPasswordSuccessKeySpecifier),
		fields?: UserAuthenticationWithPasswordSuccessFieldPolicy,
	},
	_QueryMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _QueryMetaKeySpecifier | (() => undefined | _QueryMetaKeySpecifier),
		fields?: _QueryMetaFieldPolicy,
	},
	verificationRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | verificationRequestKeySpecifier | (() => undefined | verificationRequestKeySpecifier),
		fields?: verificationRequestFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;