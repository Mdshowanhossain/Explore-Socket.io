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

    socket.send('Welcome I am From Server!');

    setTimeout(() => {
        socket.send('Hi, I am Your SetTimeOut')
    }, 3000)

    setInterval(() => {
        const date = new Date();
        const time = date.getTime();
        socket.emit('times', time);
    }, 10);




})



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


expressServer.listen(8000, () => {
    console.log('Your Server is Running Now @ 8000');
})