'use strict';

const express = require('express'),
      path = require('path'),
      http = require('http'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      passport = require('passport'),

      app = express(),
      server = http.createServer(app),
      io = require('socket.io')(server),
      
      PORT = process.env.PORT || 9000,
      DB_PATH = 'mongodb://localhost/lunchdb',

      api = require('./app/routes/api'),
      auth = require('./app/config/passport')(passport)
      // web = require('./app/routes/web')
      ;

mongoose.connect(DB_PATH);
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);
// app.use('/',  web);

io.on('connection', (socket) => {
    socket.emit('hello', {data: 'hello'});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// app.get('/auth/facebook', passport.authenticate('facebook', {
//   scope: ['public_profile', 'email']
// }));

// app.get('/auth/facebook/callback', passport.authenticate('facebook', {
//   successRedirect: '/profile',
//   failRedirect: '/'
// }));

// app.get('/profile', (req, res) => {
//   res.send('ok');
// });


app.set('port', PORT);

server.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
});