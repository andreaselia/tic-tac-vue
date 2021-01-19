<template>
  <button
    class="bg-gray-100 w-12 h-12 rounded-lg"
    :disabled="winner || value || turn !== me"
  >
    {{ value }}
  </button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    value: {
      type: String,
      default: ' '
    },
  },
  setup() {
    const store = useStore()

    return {
      me: computed(() => store.state.game.me),
      turn: computed(() => store.state.game.turn),
      winner: computed(() => store.state.game.winner)
    }
  }
}
</script>
