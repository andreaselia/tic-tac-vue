import { computed, inject, ref } from 'vue'
import { useStore } from 'vuex'

export const useBoard = () => {
  const socket = inject('socket')
  const store = useStore()

  const board = computed(() => store.state.game.board)
  const turn = computed(() => store.state.game.turn)

  const markCell = (index) => {
    store.dispatch('game/markCell', { index, turn: turn.value })
    store.dispatch('game/setTurn', turn.value === 'X' ? 'O' : 'X')

    socket.emit('markCell', {
      board: board.value,
      turn: turn.value
    })
  }

  return {
    board,
    turn,
    markCell
  }
}
