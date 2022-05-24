import { WebSocketServer } from 'ws';
import { join } from 'path'
import { Low, JSONFile } from 'lowdb'

import { decoder } from './utils/decoder.js'

const PORT = 9000

const file = join('./db/', 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

await db.read()

const wsServer = new WebSocketServer({port: PORT, path: '/login'});

const onConnect = (wsClient) => {
    console.log("Пользватель подключился")
    wsClient.on('close', onClose)
    wsClient.on('message', onMessage)
}

const onMessage = (message) => {
    const { users } = db.data
    users.push(decoder(message))
    db.write()
}

const onClose = () => {
    console.log('Пользователь отключился')
}

wsServer.on('connection', onConnect);
console.log(`server start on ${PORT}`)