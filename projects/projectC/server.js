const express = require('express');
const app = express();
const http = require('http'); //...knows how to talk to http protocol
const server = http.createServer(app); // creates a server and tells it to deleate route handling to express
const { Server } = require("socket.io");// knows how to speak websocket
const io = new Server(server);// creates socket server that builds on top of http server
const port = process.env.PORT;

const admin = require("firebase-admin");
const serviceAccount = require("./storytellers-database-firebase-adminsdk-n5h8o-2086c97a90.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://storytellers-database-default-rtdb.firebaseio.com"
});
const database = admin.database();
const storyListRef = database.ref('stories/');

app.use(express.static('main'))

io.on('connection', (socket) => {

  console.log('a user connected', socket.id);

  storyListRef.once('value', (data) => {
    console.log("once", data.val())
        let allData = data.val()
        socket.emit("allData", allData)
  });

  socket.on('addStory', msg=>{
    console.log("GOT", msg);
    let datapoint = {
      timestamp: Date.now(),
      value: msg.value
    }
    console.log(datapoint)
    storyListRef.push().set(datapoint);

 });

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

storyListRef.on('child_added', (snapshot) => {
  console.log("ON", snapshot.val());
  let datapoint = snapshot.val();
  io.emit("newStory", datapoint);
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
