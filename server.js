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

function calculateWinner (board) {
  if (board.value.every((value) => value)) {
    return 'no winners here'
  }

  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < rows.length; i++) {
    const [x, y, z] = rows[i]

    if (board.value[x] && board.value[x] === board.value[y] && board.value[x] === board.value[z]) {
      return `${board.value[x]} wins`
    }
  }

  return null
}
