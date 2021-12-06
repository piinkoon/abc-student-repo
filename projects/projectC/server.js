const express = require('express');
const app = express();
const http = require('http'); //...knows how to talk to http protocol
const server = http.createServer(app); // creates a server and tells it to deleate route handling to express
const { Server } = require("socket.io");// knows how to speak websocket
const io = new Server(server);// creates socket server that builds on top of http server
const port = process.env.PORT;

// let userCount = 0;

app.use(express.static('main'))

// this event will be fired when a client connects via socket
io.on('connection', (socket) => {
  // all we want to do with the client, we want to do here in this bracket!

  console.log('a user connected', socket.id);

  socket.on('message', (evt) => {
    console.log(evt);

    // sends message to all clients
    socket.broadcast.emit('message', evt);
  });

  socket.on("message2", (data) => {
    console.log(data);
    io.emit("incoming", data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });

});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
