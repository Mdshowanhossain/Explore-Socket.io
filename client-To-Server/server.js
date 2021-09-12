const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);


const { Server } = require('socket.io');


const io = new Server(expressServer);


io.on('connection', (socket) => {
    console.log('New User Connected');

    socket.on('disconnect', () => {
        console.log('New User Disconnected');
    })

    // socket.on('message', (msg) => {
    //     console.log(msg)
    // })

    socket.on('input', (msg) => {
        console.log(msg)
    })



})



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


expressServer.listen(8000, () => {
    console.log('Your Server is Running Now @ 8000');
})