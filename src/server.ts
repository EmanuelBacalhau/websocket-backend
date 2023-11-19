import express from 'express'
import cors from 'cors'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

const app = express()
const server = createServer(app)
const io = new Server(server, { cors: { origin: '*' } })

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3333
server.listen(PORT, () => {
  console.log('Server started in http://localhost:3333🚀')
})
