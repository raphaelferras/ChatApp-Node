const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '/../public');
var PORT = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);

var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');
  socket.on('disconnect', (socket) => {
    console.log('user is disconnected');
  });
  var date = new Date();
  socket.emit('newMessage',{
    from: 'Admin',
    text: 'Welcome to the chat app',
    createAt: date.getTime()
  });
  socket.broadcast.emit('newMessage',{
    from: 'Admin',
    text: 'New User Has Joined the chat',
    createAt: date.getTime()
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage',{
      from: message.from,
      text: message.text,
      createAt: new Date().getTime()
    });
  })
});

server.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});

module.exports = {app};
