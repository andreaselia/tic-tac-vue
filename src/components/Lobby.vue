<template>
  <div>
      <h1>Searching for an opponent...</h1>
      <button @click="leaveLobby">Leave lobby</button>
  </div>
</template>

<script>
import { inject } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const socket = inject('socket')

    const store = useStore()

    function leaveLobby() {
      socket.emit('leaveLobby')

      store.commit('app/setView', 'welcome')
    }

    return {
      leaveLobby
    }
  }
}
</script>
