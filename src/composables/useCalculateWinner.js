import { computed } from 'vue'

export const useCalculateWinner = (board) => {
  const calculateWinner = computed(() => {
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
  })

  return {
    calculateWinner
  }
}
