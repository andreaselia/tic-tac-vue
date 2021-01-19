<template>
  <Card>
    <TurnIndicator />

    <div class="mt-5 grid grid-cols-3 gap-5">
      <Cell
        v-for="(cell, index) in board"
        :key="index"
        :value="cell"
        @click="markCell(index)"
      />
    </div>
  </Card>
</template>

<script>
import { useBoard } from '../composables/useBoard'

import Card from './Card.vue'
import TurnIndicator from './TurnIndicator.vue'
import Cell from './Cell.vue'

export default {
  components: {
    Card,
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
