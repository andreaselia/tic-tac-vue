<template>
  <button
    class="bg-gray-100 w-12 h-12 rounded-lg"
    :name="label"
    :disabled="winner || value"
  >
    {{ value }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    default: ' '
  },
  winner: null
})
</script>
