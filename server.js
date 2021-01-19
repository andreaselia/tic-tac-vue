const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = 1992
let players = {}
let unmatchedPlayer = null

app.get('/', (req, res) => {
    res.send('<h1>Tic Tac Vue</h1>')
})

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)

  socket.on('joinLobby', () => {
    console.log('joinLobby')

    players[socket.id] = {
      opponent: unmatchedPlayer,
      turn: 'X',
      socket: socket
    }

    if (unmatchedPlayer) {
      players[socket.id].turn = 'O'
      players[unmatchedPlayer].opponent = socket.id

      unmatchedPlayer = null
    } else {
      unmatchedPlayer = socket.id
    }

    if (!players[socket.id].opponent) {
      return
    }

    console.log('startGame')

    socket.emit('startGame', {
      turn: players[socket.id].turn
    })

    const opponent = players[players[socket.id].opponent]
    opponent.socket.emit('startGame', {
      turn: opponent.turn
    })
  })

  socket.on('markCell', (data) => {
    console.log('markCell', data)

    if (!players[socket.id].opponent) {
      return
    }

    data.player = data.player === 'X' ? 'O' : 'X'

    socket.emit('markCell', data)

    const opponent = players[players[socket.id].opponent]
    opponent.socket.emit('markCell', data)
  })

  socket.on('leaveLobby', () => {
    console.log('leaveLobby')

    delete players[socket.id]

    unmatchedPlayer = null
  })

  socket.on('disconnect', () => {
    console.log('a user disconnected')
  })
})

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})
