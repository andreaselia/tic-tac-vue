const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = 1992
const players = {}
const unmatched = null

app.get('/', (req, res) => {
    res.send('<h1>Tic Tac Vue</h1>')
})

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)

  socket.on('joinLobby', () => {
    console.log('joinLobby')

    players[socket.id] = {
      opponent: unmatched,
      type: 'X',
      socket: socket
    }

    if (unmatched) {
      players[socket.id].symbol = 'O'
      players[unmatched].opponent = socket.id

      unmatched = null
    } else {
      unmatched = socket.id
    }
  })

  socket.on('markCell', (data) => {
    console.log('markCell', data)

    if (!players[socket.id].opponent) {
      return
    }

    socket.emit('markCell', data)

    const opponent = players[players[socket.id].opponent].socket
    opponent.emit('markCell', data)
  })

  socket.on('leaveLobby', () => {
    console.log('leaveLobby')

    delete players[socket.id]
  })

  socket.on('disconnect', () => {
    console.log('a user disconnected')
  })
})

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})
