<template>
  <Card>
    <h1 class="font-bold text-2xl">Welcome to Tic Tac Vue</h1>
    <Button @click="joinLobby">Join lobby</Button>
  </Card>
</template>

<script>
import { inject } from 'vue'
import { useStore } from 'vuex'

import Card from './Card.vue'
import Button from './Button.vue'

export default {
  components: {
    Card,
    Button
  },
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
