import { ref } from 'vue'

export const useBoard = () => {
  const board = ref(new Array(9).fill(null))

  const player = ref('X')

  const markCell = (index) => {
    board.value[index] = player.value

    player.value = player.value === 'X' ? 'O' : 'X'
  }

  return {
    board,
    player,
    markCell
  }
}
