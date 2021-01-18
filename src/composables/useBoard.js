import { ref } from 'vue'

export const useBoard = () => {
  const board = ref([
    null, null, null,
    null, null, null,
    null, null, null
  ])

  const player = ref('X')

  const markCell = (index) => {
    board.value[index] = player.value

    console.log(board.value)

    player.value = player.value === 'X' ? 'O' : 'X'
  }

  return {
    board,
    player,
    markCell
  }
}
