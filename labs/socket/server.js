const express = require('express');
const app = express();
const http = require('http'); //...knows how to talk to http protocol
const server = http.createServer(app); // creates a server and tells it to deleate route handling to express
const { Server } = require("socket.io");// knows how to speak websocket
const io = new Server(server);// creates socket server that builds on top of http server

app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });


// this event will be fired when a client connects via socket
io.on('connection', (socket) => {
  // all we want to do with the client, we want to do here in this bracket!

  console.log('a user connected', socket.id);

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);

    // sends message to all clients
    io.emit('messageFromSomeone', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });

});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
