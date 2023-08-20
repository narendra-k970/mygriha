/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable camelcase */
const bcrypt = require('bcrypt');

require('dotenv').config();

const generatePasswordHash = (password) => new Promise((resolve, reject) => {
  // eslint-disable-next-line radix
  bcrypt.hash(password, Number(process.env.SALT_ROUNDS), (
    err,
    hash,
  ) => {
    if (hash) {
      resolve(hash);
    } else {
      reject(err);
    }
  });
});

module.exports = {
  generatePasswordHash,
};
