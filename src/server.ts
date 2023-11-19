import 'express-async-errors'

import cors from 'cors'
import express from 'express'
import { router } from './routes'
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import { handleErrors } from './middlewares/handle-errors'

const app = express()
const server = createServer(app)
const io = new Server(server, { cors: { origin: '*' } })

app.use(cors())
app.use(express.json())

app.use(router)

app.use(handleErrors)

const PORT = process.env.PORT || 3333
server.listen(PORT, () => {
  console.log('Server started in http://localhost:3333🚀')
})
