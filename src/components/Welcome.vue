<template>
  <div>
      <h1>Welcome to Tic Tac Vue</h1>
      <button>Join lobby</button>
  </div>
</template>

<script>
import { ref, inject } from 'vue'

export default {
  setup() {
    const socket = inject('socket')

    return {
      ...foo(socket)
    }
  }
}

function foo(socket) {
  const bar = ref('')

  socket.on('foo', (value) => {
    bar.value = value
  })

  return {
    bar
  }
}
</script>
