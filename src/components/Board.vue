<template>
  <div class="bg-white p-6 text-center rounded-3xl shadow-xl sm:p-12">
    <TurnIndicator />

    <div class="mt-5 grid grid-cols-3 gap-5">
      <Cell
        v-for="(cell, index) in board"
        :key="index"
        :value="cell"
        @click="markCell(index)"
      />
    </div>
  </div>
</template>

<script>
import TurnIndicator from './TurnIndicator.vue'
import Cell from './Cell.vue'

import { useBoard } from '../composables/useBoard'

export default {
  components: {
    TurnIndicator,
    Cell
  },
  setup() {
    const { board, player, markCell } = useBoard()

    return {
      board,
      player,
      markCell
    }
  }
}
</script>
