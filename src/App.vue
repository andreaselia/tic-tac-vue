<template>
  <div>
    {{ count }}
    <Board />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import Board from './components/Board.vue'

const store = useStore()

const count = computed(() => store.state.count)
</script>
