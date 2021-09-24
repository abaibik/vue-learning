<template>
  <button @click="$emit('pressed', value)" class="btn btn-outline-info m-1">
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
