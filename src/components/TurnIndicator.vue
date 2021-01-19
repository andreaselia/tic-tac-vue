<template>
  <div>
    <h1 class="font-bold text-2xl" v-if="winner">{{ winner }} wins</h1>
    <h1 class="font-bold text-2xl" v-else>{{ player }}'s turn</h1>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    return {
      winner: computed(() => store.state.game.winner),
      player: computed(() => store.state.game.turn)
    }
  }
}
</script>
