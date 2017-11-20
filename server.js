var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var Chat = require('./models/Chat');
var chatController = require('./controllers/chat');

server.listen(8000, function() {
  console.log('----------------------------------------');            // eslint-disable-line no-console
  console.log('Express server listening on port ' + 8000); // eslint-disable-line no-console
  console.log('----------------------------------------');            // eslint-disable-line no-console
});

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://tuanle.ddns.net');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/listMessage/:id', chatController.getListMessage);

io.on('connection', function (socket) {
  console.log('a member connect');
  socket.on('send-message-to-server', function(data) {
    new Chat(data).save()
      .then(function (message) {
        console.log(message);
        io.sockets.emit('server-reply-client', message.toJSON());
        // socket.emit('server-reply-client', message.toJSON())
      })
      .catch(function (err) {
        console.log('err', err);
      });
  })
});
