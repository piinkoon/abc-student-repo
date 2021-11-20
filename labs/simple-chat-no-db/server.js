let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let userCount = 0;
app.use(express.static('public'))


io.on('connection', (socket) => {
  console.log('a user connected');
  userCount += 1;
  io.emit('new-user-count', {count: userCount});


  socket.on('message-from-one', (data) => {
    io.emit('message-to-all', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
    userCount -= 1;
    io.emit('new-user-count', {count: userCount});
  });

});
http.listen(3000, () => {
  console.log('listening on *:3000');
});
