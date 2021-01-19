<template>
  <Card>
    <h1 class="font-bold text-2xl">Waiting for an opponent</h1>
    <Button @click="leaveLobby">Leave lobby</Button>
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
