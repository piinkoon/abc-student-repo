const express = require('express');
const app = express();
const http = require('http'); //...knows how to talk to http protocol
const server = http.createServer(app); // creates a server and tells it to deleate route handling to express
const { Server } = require("socket.io");// knows how to speak websocket
const io = new Server(server);// creates socket server that builds on top of http server

app.use(express.static('main'))

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });


// this event will be fired when a client connects via socket
io.on('connection', (socket) => {
  // all we want to do with the client, we want to do here in this bracket!

  console.log('a user connected', socket.id);

  socket.on('message', (evt) => {
    console.log(evt);

    // sends message to all clients
    socket.broadcast.emit('message', evt);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });

});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

// --------

const clients = {};

app.use(express.static(__dirname + "/../client/"));
app.use(express.static(__dirname + "/../node_modules/"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/../client" });
});

const addClient = socket => {
  console.log("New client connected", socket.id);
  clients[socket.id] = socket;
};
const removeClient = socket => {
  console.log("Client disconnected", socket.id);
  delete clients[socket.id];
};

io.sockets.on("connection", socket => {
  let id = socket.id;

  addClient(socket);

  socket.on("mousemove", data => {
    data.id = id;
    socket.broadcast.emit("moving", data);
  });

  socket.on("disconnect", () => {
    removeClient(socket);
    socket.broadcast.emit("clientdisconnect", id);
  });
});
