const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);
const { Server } = require('socket.io');


const io = new Server(expressServer);

io.on('connection', (socket) => {
    socket.on('chatMessage', (data) => {
        socket.emit('chatMessage_transfer', data);
    })
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

expressServer.listen(7000, () => {
    console.log('Server Running...');
});