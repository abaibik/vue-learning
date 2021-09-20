<template>
  <div class="container">
    <h1><u>Calculator</u></h1>
    <div class="mb-3">
      <label for="operand1" class="form-label">Enter first number:</label>
      <input
        type="text"
        class="form-control w-10"
        id="operand1"
        v-model="operand1"
      />
    </div>

    <div class="mb-3">
      <label for="operand2" class="form-label">Enter second number:</label>
      <input
        type="text"
        class="form-control w-10"
        id="operand2"
        v-model="operand2"
      />
    </div>

    <OpButtonGroup v-model="operation" />

    <div class="mb-3">
      <label for="result" class="form-label">Result:</label>
      <input
        class="form-control w-10"
        id="result"
        type="text"
        :value="result"
        readonly
      />
    </div>
  </div>
</template>

<script>
import OpButtonGroup from "./components/OpButtonGroup.vue";
import calc from "./calc.js";

export default {
  data() {
    return {
      operand1: 0,
      operand2: 0,
      operation: "+",
    };
  },

  components: {
    OpButtonGroup,
  },

  computed: {
    result: function () {
      return calc(this.operand1, this.operand2, this.operation);
    },
  },
};
</script>

<style>
.w-10 {
  width: 10% !important;
}
</style>
