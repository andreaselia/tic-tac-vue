<template>
  <div class="bg-white p-6 text-center rounded-3xl shadow-xl sm:p-12">
    <div>
      <span v-if="calculateWinner">{{ calculateWinner }}</span>
      <span v-else>{{ player }}'s turn</span>
    </div>

    <div class="mt-5 grid grid-cols-3 gap-5">
      <Cell
        v-for="(cell, index) in board"
        :key="`cell-${index}`"
        :label="`cell-${index}`"
        :value="cell"
        @click="markCell(index)"
        :winner="calculateWinner"
      />
    </div>
  </div>
</template>

<script>
import Cell from './Cell.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

import { useBoard } from '../composables/useBoard'
import { useCalculateWinner } from '../composables/useCalculateWinner'

export default {
  components: {
    Cell
  },
  setup() {
    const { board, player, markCell } = useBoard()
    const { calculateWinner } = useCalculateWinner(board)

    return {
      board,
      player,
      markCell,
      calculateWinner
    }
  }
}
</script>
