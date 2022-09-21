const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);


//socket configuration
const { Server } = require('socket.io');

//pass expressServer as a contructor parameter in the object
const io = new Server(expressServer);

// io.on('connection', function (socket) {
//     console.log("User Connected");

//     // socket.on('disconnect',function(){
//     //     console.log("User Disconnected");
//     // })
//     // setTimeout(() => {
//     //     //through this data and catch it on client side
//     //     socket.send("Server--->Client")
//     // }, 10000);

//     //continue data transfer
//     setInterval(() => {
//         let d = new Date();
//         let t = d.getTime();
//         //socket.send(t);

//         //custom event
//         socket.emit("myEvent", t);
//     }, 2000);
// })


//client to server data receive
io.on('connection', function (socket) {
    console.log("User connected")
    socket.on('message', function (msg) {
        console.log(msg)
    })
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

expressServer.listen(3000, function () {
    console.log("server run at 3000")
})