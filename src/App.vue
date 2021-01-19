<template>
  <div>
    <Welcome v-if="view === 'welcome'" />
    <Lobby v-else-if="view === 'lobby'" />
    <Board v-else-if="view === 'game'" />
  </div>
</template>

<script>
import { computed, inject } from 'vue'
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
    const socket = inject('socket')
    const store = useStore()

    socket.on('startGame', (data) => {
      console.log('startGame', data)

      store.commit('app/setView', 'game')
      store.commit('game/setTurn', data.turn)
    })

    return {
      view: computed(() => store.state.app.view),
    }
  }
}
</script>
