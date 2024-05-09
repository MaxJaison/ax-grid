import { createServer } from 'node:http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5174',
    },
});

const mockData = [];
const id = 1;

io.on('connection', (socket) => {
    console.log(`connected: ${socket.id}`);
    io.emit('all-trades', mockData);
    io.emit('send-energy', 'Solar');

    socket.on('disconnect', () => {
        console.log(`disconnect: ${socket.id}`);
    });

    socket.on('new-energy', (energy) => {
        io.emit('send-energy', energy);
    });

    socket.on('add-trade', (data) => {
        const newRow = Object.values(data).filter((val) => val !== '');
        const newId = mockData.length === 0 ? id : mockData[mockData.length - 1][0] + 1;
        mockData.push([newId, ...newRow]);
        io.emit('all-trades', mockData);
        io.emit('new-trade', newRow);
    });

    socket.on('trade-status', (data) => {
        const changedTrade = mockData.find((row) => row[0] === data.id);
        changedTrade[1] = data.status;
        io.emit('all-trades', mockData);
    });
});

httpServer.listen(4000);
