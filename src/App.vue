<template>
  <div>
    <Welcome v-if="view === 'welcome'" />
    <Lobby v-else-if="view === 'lobby'" />
    <Board v-else-if="view === 'play'" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import Welcome from './components/Welcome.vue'
import Lobby from './components/Lobby.vue'
import Board from './components/Board.vue'

export default {
  components: {
    Welcome,
    Lobby,
    Board
  },
  setup () {
    const store = useStore()

    return {
      view: computed(() => store.state.app.view),
    }
  }
}
</script>
