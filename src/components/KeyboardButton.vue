<template>
  <button @click="$emit('pressed', value)" class="btn btn-outline-info">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: "KeyboardButton",
  emits: ["pressed"],
  props: {
    value: String,
  },
};
</script>
