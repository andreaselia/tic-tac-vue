<template>
  <div>
    <p class="mb-2 text-xs font-bold" v-if="!winner">
      {{ player === me ? "It's your turn" : "It's your opponent's turn" }}
    </p>

    <h1 class="text-2xl font-bold" v-if="winner">{{ winner }} wins</h1>
    <h1 class="text-2xl font-bold" v-else>{{ player }}'s turn</h1>

    <Button @click="playAgain">Play again</Button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import Button from './Button.vue'

export default {
  setup() {
    const store = useStore();

    const winner = computed(() => store.state.game.winner)
    const me = computed(() => store.state.game.me)
    const player = computed(() => store.state.game.turn)

    function playAgain() {
      socket.emit('leaveLobby')

      store.commit('app/setView', 'welcome')
    }

    return {
      winner,
      me,
      player,
      playAgain
    };
  },
};
</script>
