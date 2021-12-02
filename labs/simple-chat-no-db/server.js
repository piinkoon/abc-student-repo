let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let userCount = 0;

// import { initializeApp } from 'firebase/app';

// let firebase = require('firebase/app');
// import firebase from 'firebase/app';
let firebase = require('firebase/app');

let firebaseConfig = {
  apiKey: "AIzaSyDY4Ha3CWWX7v5n4lUFO6CUt2uRG_JaSuE",
  authDomain: "database-practice-chat.firebaseapp.com",
  databaseURL: "https://database-practice-chat-default-rtdb.firebaseio.com",
  projectId: "database-practice-chat",
  storageBucket: "database-practice-chat.appspot.com",
  messagingSenderId: "4528741122",
  appId: "1:4528741122:web:77c8da628e1a4a99b1801b"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);

let database = firebaseApp.database();

let messageListRef = database.ref('messages');
messageListRef.push("HELLO");

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
