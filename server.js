'use strict';

const express = require('express'),
      path = require('path'),
      http = require('http'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),

      app = express(),
      server = http.createServer(app),
      
      PORT = process.env.PORT || 3000,
      DB_PATH = 'mongodb://localhost/lunchdb',

      api = require('./app/routes/api')
      ;

mongoose.connect(DB_PATH);
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', PORT);

server.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
});