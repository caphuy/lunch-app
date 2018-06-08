'use strict';

const express = require('express'),
      path = require('path'),
      http = require('http'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      passport = require('passport'),
      cors = require('cors'),

      app = express(),
      server = http.createServer(app),
      io = require('socket.io')(server),
      
      Constants = require('./app/util/constants'),
      api = require('./app/routes/api'),
      auth = require('./app/config/passport')(passport),
      web = require('./app/routes/web')(passport)
      ;

mongoose.connect(Constants.DB_PATH);
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist')));

const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

app.use('/api', api);
app.use('/',  web);

io.on('connection', (socket) => {
    socket.emit('hello', {data: 'hello'});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port', Constants.PORT);

server.listen(Constants.PORT, () => {
  console.log('App listening on port ' + Constants.PORT);
});