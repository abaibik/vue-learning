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

    <CheckBox v-model="keyboardVisible" />

    <Keyboard
      v-model="keyboardVisible"
      :inputs="['operand1', 'operand2']"
      :activeInput="activeInput"
      @activeInputChanged="activeInput = $event"
      @keyPressed="handleInput($event)"
    />
  </div>
</template>

<script>
import OpButtonGroup from "./components/OpButtonGroup.vue";
import calc from "./calc.js";
import CheckBox from "./components/CheckBox.vue";
import Keyboard from "./components/Keyboard.vue";
import keyboardHandler from "./keyboardHandler.js";

export default {
  name: "App",
  data() {
    return {
      operand1: "0",
      operand2: "0",
      operation: "+",
      keyboardVisible: false,
      activeInput: "operand1",
    };
  },

  components: {
    OpButtonGroup,
    CheckBox,
    Keyboard,
  },

  computed: {
    result: function () {
      const res = calc(this.operand1, this.operand2, this.operation);
      if (isNaN(res)) {
        return "Error!";
      }

      return res;
    },
  },

  methods: {
    handleInput: function (key) {
      if (this.activeInput === "operand1") {
        this.operand1 = keyboardHandler(this.operand1, key);
      } else {
        this.operand2 = keyboardHandler(this.operand2, key);
      }
    },
  },
};
</script>

<style>
.w-10 {
  width: 10% !important;
}
</style>
