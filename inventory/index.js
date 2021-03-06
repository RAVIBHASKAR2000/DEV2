
import process from 'process';
import expressSession from 'express-session';
import connectSession from 'connect-mongo';

const MongoStore = connectSession(expressSession);

import { Keystone } from '@keystonejs/keystone';
import { PasswordAuthStrategy } from '@keystonejs/auth-password';
import { GraphQLApp } from '@keystonejs/app-graphql';
import { AdminUIApp } from '@keystonejs/app-admin-ui';
import { MongooseAdapter as Adapter } from '@keystonejs/adapter-mongoose';
import { NextApp } from '@keystonejs/app-next';
import { StaticApp } from '@keystonejs/app-static';

import initialiseData from './initial-data';
import { createList } from './lists';
import { DEFAULT_LIST_ACCESS } from './lib/list/access';
import { staticRoute, staticPath, distDir } from './lib/config';
import googleAuth from './lib/auth/googleAuth';

const MARTYR = require('./inventoryConfig');
const PROJECT_NAME = 'inventory';
const adapterConfig = { mongoUri: `mongodb://localhost/${PROJECT_NAME}` };

const keystone = new Keystone({
  cookieSecret: process.env.COOKIE_SECRET,
  sessionStore: new MongoStore({ url: `mongodb://localhost/${PROJECT_NAME}` }),
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES === 'true' && initialiseData,
  defaultAccess: DEFAULT_LIST_ACCESS,
  cookie: { secure: process.env.INSECURE_COOKIES ? false : undefined },
});

createList(keystone);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

const { googleApp, googleStrategy } = googleAuth(keystone);

module.exports = {
  // googleApp,
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: staticRoute, src: staticPath }),
    new AdminUIApp({
      name: MARTYR.name,
      enableDefaultRoute: false,
      authStrategy,
      isAccessAllowed: ({ authentication: { item: user, listKey: list } }) => !!user && !!user.isAdmin,
    }),
    new NextApp({ dir: 'app' }),
  ],
  configureExpress: app => {
    app.set('trust proxy', true);
  },
  distDir,
  cors: { 
    origin: /martyr\.in$/,
    credentials: true,
  },
};
