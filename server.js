'use strict';

const express = require('express'),
      path = require('path'),
      http = require('http'),
      bodyParser = require('body-parser'),

      app = express(),
      server = http.createServer(app),
      
      PORT = process.env.PORT || 3000,

      api = require('./app/routes/api')
      ;

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
})