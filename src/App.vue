<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
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
      store.commit('app/setView', 'game')
      store.commit('game/setMe', data.turn)
      store.commit('game/setTurn', data.turn)
    })

    socket.on('markCell', (data) => {
      store.dispatch('game/setBoard', data.board)
      store.dispatch('game/setTurn', data.turn)
    })

    socket.on('setWinner', (winner) => {
      store.dispatch('game/setWinner', winner)
    })

    return {
      view: computed(() => store.state.app.view)
    }
  }
}
</script>
