var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var bookshelf = require('../config/bookshelf');

var Chat = bookshelf.Model.extend({
  tableName: 'chats',
  hasTimestamps: true,
});

module.exports = Chat;
