const { distDir } = require('../lib/config');
const inventory = require('../inventoryConfig')

const serverUrl = process.env.SERVER_URL || 'http://localhost:3000';

module.exports = {
  distDir: `../${distDir}/www`,
  env: {
  },
  publicRuntimeConfig: {
    inventory,
    serverUrl,
  }
};
