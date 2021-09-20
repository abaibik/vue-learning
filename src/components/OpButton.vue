<template>
  <button @click="$emit('operation', operation)" :class="btnClass">
    {{ operation }}
  </button>
</template>

<script>
export default {
  name: "OpButton",
  emits: ["operation"],
  props: {
    operation: String,
    toggled: Boolean,
  },
  computed: {
    btnClass() {
      if (this.toggled) {
        return "btn btn-success";
      }
      return "btn btn-outline-success";
    },
  },
};
</script>
