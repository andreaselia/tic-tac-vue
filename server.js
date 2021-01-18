const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = 1992

app.get('/', (req, res) => {
    console.log('enter root')
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)
})

io.on('disconnect', (socket) => {
    console.log('a user disconnect', socket.id)
})

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})
