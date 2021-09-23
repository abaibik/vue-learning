<template>
  <div class="btn-group mb-3" role="group" aria-label="Basic outlined example">
    <OpButton
      v-for="op in ['+', '-', '*', '/', '^', 'mod']"
      :key="op"
      :operation="op"
      :toggled="op === operation"
      @operation="$emit('change', op)"
    />
  </div>
</template>

<style>
.offcanvas-backdrop.show {
  opacity: 0 !important;
}
</style>

<script>
import OpButton from "./OpButton.vue";

export default {
  model: {
    prop: "operation",
    event: "change",
  },
  props: {
    operation: String,
  },
  components: { OpButton },
  name: "OpButtonGroup",
};
</script>
