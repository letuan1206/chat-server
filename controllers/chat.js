var async = require('async');
var crypto = require('crypto');
var moment = require('moment');
var request = require('request');
var qs = require('querystring');
var shortid = require('shortid');
var Chat = require('../models/Chat');
var common = require('../utilities/commons');

exports.getListMessage = function(req, res) {
  if(parseInt(req.params.id) === -1) {
    new Chat()
      .query(function (qb) {
        qb.select('*')
          .orderBy('id', 'desc')
          .limit(20)
      })
      .fetchAll()
      .then(function (chat) {
        return res.send(chat);
      });
  } else {
    new Chat()
      .query(function (qb) {
        qb.select('*')
          .where('id', '<', parseInt(req.params.id))
          .orderBy('id', 'desc')
          .limit(20)
      })
      .fetchAll()
      .then(function (chat) {
        return res.send(chat);
      });
  }
}
/**
 * POST /login
 * Sign in with email and password
 */
exports.loginPost = function(req, res, next) {
  req.assert('username', 'Email or phone number cannot be blank').notEmpty();
  req.assert('password', 'Password cannot be blank').notEmpty();
  // req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }

  if(req.body.username) {
    if(!common.checkUsername(req.body.username)) {
      return res.status(400).send({ msg: 'Email or phone number is not valid.' });
    }
  }

  new User()
    .query({where: {email: req.body.username}, orWhere: {phone_number: req.body.username}})
    .fetch()
    .then(function(user) {
      if (!user) {
        return res.status(401).send({ msg: 'The email address or phone number ' + req.body.username + ' is not associated with any account. ' +
        'Please check email or phone number and try again.'
        });
      }
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (!isMatch) {
          return res.status(401).send({ msg: 'The password does not match this email or phone number' });
        }
        res.send({ token: common.generateToken(user), user: user.toJSON() });
      });
    });
};

/**
 * POST /signup
 */
exports.signupPost = function(req, res, next) {
  req.assert('name', 'Name cannot be blank').notEmpty();
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Email cannot be blank').notEmpty();
  req.assert('phone_number', 'Phone number cannot be blank').notEmpty();
  req.assert('password', 'Password must be at least 4 characters long').len(4);
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }

  if(!common.checkPhoneFormat(req.body.phone_number)) {
    return res.status(400).send({ msg: 'Phone number is not valid.' });
  }

  new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone_number: req.body.phone_number,
    referral_key: shortid.generate()
  }).save()
    .then(function(user) {
        res.send({ token: generateToken(user), user: user });
    })
    .catch(function(err) {
      if (err.code === 'ER_DUP_ENTRY' || err.code === '23505') {
        return res.status(400).send({ msg: 'The email address or phone number you have entered is already associated with another account.' });
      }
    });
};


/**
 * PUT /account
 * Update profile information OR change password.
 */
exports.accountPut = function(req, res, next) {
  if ('password' in req.body) {
    req.assert('password', 'Password must be at least 4 characters long').len(4);
    req.assert('confirm', 'Passwords must match').equals(req.body.password);
  } else {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });
  }

  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }

  var user = new User({ id: req.user.id });
  if ('password' in req.body) {
    user.save({ password: req.body.password }, { patch: true });
  } else {
    user.save({
      email: req.body.email,
      name: req.body.name,
      gender: req.body.gender,
      address: req.body.address
    }, { patch: true });
  }
  user.fetch().then(function(user) {
    if ('password' in req.body) {
      res.send({ msg: 'Your password has been changed.' });
    } else {
      res.send({ user: user, msg: 'Your profile information has been updated.' });
    }
    res.redirect('/account');
  }).catch(function(err) {
    if (err.code === 'ER_DUP_ENTRY') {
      res.status(409).send({ msg: 'The email address you have entered is already associated with another account.' });
    }
  });
};
