const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io')

var {generateMessage} = require('./utils/message');

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
  socket.emit('newMessage', generateMessage('Admin','Welcome to the chat app'));
  socket.broadcast.emit('newMessage', generateMessage('Admin','New User Has Joined the chat'));

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage',generateMessage(message.from, message.text));
  })
});

server.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});

module.exports = {app};
