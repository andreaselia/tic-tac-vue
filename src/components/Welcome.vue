<template>
  <div>
      <h1>Welcome to Tic Tac Vue</h1>
      <button @click="joinLobby">Join lobby</button>
  </div>
</template>

<script>
import { inject } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const socket = inject('socket')
    const store = useStore()

    function joinLobby() {
      socket.emit('joinLobby')

      store.commit('app/setView', 'lobby')
    }

    return {
      joinLobby
    }
  }
}
</script>
