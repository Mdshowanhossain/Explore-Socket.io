const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const { Server } = require('socket.io');

const io = new Server(expressServer);

io.on('connection', (socket) => {
    console.log('User Connected', socket.id);

    socket.on('disconnect', (data) => {
        console.log('User Disconnected', data.id);
    })

    socket.join('kitchen-room');
    const participation = io.sockets.adapter.rooms.get('kitchen-room').size;
    io.sockets.in('kitchen-room').emit('cooking', 'MY MOTHER COOKING FOOD= ' + participation);
    io.sockets.in('kitchen-room').emit('boiling', 'MY MOTHER COOKING FOOD= ' + participation);

    socket.join('bed-room');
    io.sockets.in('bed-room').emit('sleeping', 'MY BROTHER IS SLEEPING IN MY SIDE');

    socket.join('wash-room');
    io.sockets.in('wash-room').emit('fresh', 'I AM IN WASH ROOM');
})



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
expressServer.listen(4000, () => {
    console.log('Your Server is Running @ 4000')
})