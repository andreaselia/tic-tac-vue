<template>
  <div class="bg-white p-6 text-center rounded-xl shadow-2xl sm:p-12">
      <h1 class="font-bold text-2xl">Welcome to Tic Tac Vue</h1>
      <button class="mt-5 bg-indigo-500 text-white rounded-full font-semibold px-8 py-3" @click="joinLobby">Join lobby</button>
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
