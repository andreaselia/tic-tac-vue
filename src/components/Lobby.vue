<template>
  <div class="bg-white p-6 text-center rounded-3xl shadow-xl sm:p-12">
    <h1 class="font-bold text-2xl">Waiting for an opponent</h1>
    <button class="mt-5 bg-indigo-500 text-white rounded-full font-semibold px-8 py-3" @click="leaveLobby">Leave lobby</button>
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
