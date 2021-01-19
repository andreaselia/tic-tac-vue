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

    socket.emit('startGame', {
      turn: players[socket.id].turn
    })

    const opponent = players[players[socket.id].opponent]
    opponent.socket.emit('startGame', {
      turn: opponent.turn
    })
  })

  socket.on('markCell', (data) => {
    if (!players[socket.id].opponent) {
      return
    }

    const opponent = players[players[socket.id].opponent]
    opponent.socket.emit('markCell', data)

    const winner = calculateWinner(data.board)

    if (winner) {
      socket.emit('setWinner', winner)
      opponent.socket.emit('setWinner', winner)
    }
  })

  socket.on('leaveLobby', () => {
    delete players[socket.id]

    unmatchedPlayer = null
  })

  socket.on('disconnect', () => {
    console.log('a user disconnected')

    delete players[socket.id]
  })
})

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})

function calculateWinner (board) {
  if (board.every((value) => value)) {
    return null
  }

  const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < winStates.length; i++) {
    const [x, y, z] = winStates[i]

    if (board[x] && board[x] === board[y] && board[x] === board[z]) {
      return board[x]
    }
  }

  return null
}
