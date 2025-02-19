import express = require('express');
import dotenv = require('dotenv');
import cors = require('cors');
import {RedisClient} from './repository';
import { WebSocketServer } from 'ws';
import http = require('http');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

const socket = new WebSocketServer({server});
const redis = new RedisClient();

app.use(express.json());
app.use(cors());

app.get('/events/recent/:id', async (req, res) => {
    const events = await redis.getRedis(req.params.id);
    res.send(events);
});

socket.on('connection', (ws) => {

    ws.on('error', console.error);

    ws.on('open', () => {
        console.log('Connected to server');
      
        ws.send('Hello, server!');
      });
      
      ws.on('message', (data: string) => {
        console.log(`Received message from server: ${data}`);
        const {userId, type, timeStamp} = JSON.parse(data);
        redis.setRedis({userId, type, timeStamp})
        ws.send(data);
      });
      
      ws.on('close', () => {
        console.log('Disconnected from server');
      });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

