const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(expressServer);


io.on('connection', (socket) => {
    console.log('New User Connection Established');

    io.on('disconnect', () => {
        console.log('New User Connection Disconnected');
    })

    setTimeout(() => {
        socket.send('I am From Your Server')
    }, 500);

    setInterval(() => {
        let date = new Date();
        let time = date.getTime();
        socket.emit('times', time);
    }, 10);


    setInterval(() => {
        socket.emit('repeated', 'MY NAME IS SOHAN !')
    }, 10)





})









app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})



expressServer.listen(4000, () => {
    console.log('Your Server Is Running Now At 4000')
})