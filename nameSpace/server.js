const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);


const { Server } = require('socket.io');


const io = new Server(expressServer);


const sohanNmsp = io.of('/sohan');
sohanNmsp.on('connection', (socket) => {
    sohanNmsp.emit('sohanEvent', 'Hello, SOHAN NameSpace')
});


const osmanNmsp = io.of('/osman');
osmanNmsp.on('connection', (socket) => {
    osmanNmsp.emit('osmanEvent', 'Hello I am OSMAN NAMESPACE')
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

expressServer.listen(8000, () => {
    console.log('Your Server is Running Now @ 8000');
})