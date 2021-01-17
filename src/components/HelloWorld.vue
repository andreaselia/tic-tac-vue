<template>
  <h1>{{ msg }}</h1>

  <button @click="increment">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import { toRefs, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const { msg } = props

    const store = useStore()

    return {
      count: computed(() => store.state.count),

      increment: () => store.commit('increment'),
    }
  }
}
</script>
