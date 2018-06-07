module.exports = {

  facebookAuth: {
    clientID: '500315193719940',
    clientSecret: '6bcaf5b4193d9e066ab429ec34fe93ae',
    callbackURL: 'http://localhost:9000/auth/facebook/callback',
    profileURL: 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    profileFields : ['id', 'email', 'name']
  }

}