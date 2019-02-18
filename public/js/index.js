var socket = io();

socket.on('connect', function () {
  console.log('connected to server');
  socket.emit('createMessage',{
    to:'july@example.com',
    text: 'Hey. this is Raphael'
  });
})


socket.on('disconnect', function () {
  console.log('disconnected from server');
})

socket.on('newMessage', function (message) {
  console.log('new Email', message);
})
