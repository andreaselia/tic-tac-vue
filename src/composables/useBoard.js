import { computed, inject, ref } from 'vue'
import { useStore } from 'vuex'

export const useBoard = () => {
  const socket = inject('socket')
  const store = useStore()

  const board = ref(computed(() => store.state.game.board))
  const player = ref(computed(() => store.state.game.turn))

  const markCell = (index) => {
    let cloneBoard = board
    cloneBoard.value[index] = player.value

    store.dispatch('setBoard', cloneBoard.value)
    store.dispatch('setTurn', player.value === 'X' ? 'O' : 'X')

    socket.emit('markCell', {
      board: board.value,
      player: player.value
    })
  }

  socket.on('markCell', (data) => {
    console.log('markCell', data)

    store.dispatch('setBoard', data.board)
    store.dispatch('setTurn', data.turn)
  })

  return {
    board,
    player,
    markCell
  }
}
