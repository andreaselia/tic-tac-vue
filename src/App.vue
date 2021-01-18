<template>
  <div>
    <Welcome v-if="state === 'welcome'" />
    <Lobby v-else-if="state === 'lobby'" />
    <Board v-else-if="state === 'play'" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

import Welcome from './components/Welcome.vue'
import Lobby from './components/Lobby.vue'
import Board from './components/Board.vue'

const store = useStore()

console.log(store)
</script>
