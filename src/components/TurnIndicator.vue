<template>
  <div>
    <p class="mb-2 text-xs font-bold" v-if="!winner">
      {{ player === me ? "It's your turn" : "It's your opponent's turn" }}
    </p>

    <h1 class="text-2xl font-bold" v-if="winner">{{ winner }} wins</h1>
    <h1 class="text-2xl font-bold" v-else>{{ player }}'s turn</h1>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      winner: computed(() => store.state.game.winner),
      me: computed(() => store.state.game.me),
      player: computed(() => store.state.game.turn),
    };
  },
};
</script>
