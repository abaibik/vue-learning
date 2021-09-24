<template>
  <div
    class="offcanvas offcanvas-bottom"
    tabindex="-1"
    ref="offcanvasKeyboard"
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div class="offcanvas-header">
      <h3 class="offcanvas-title" id="offcanvasBottomLabel">Keyboard</h3>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body small">
      <InputChooser
        :inputs="inputs"
        :chosenInput="activeInput"
        @chosenInputChanged="$emit('activeInputChanged', $event)"
      />
      <KeyboardButton
        v-for="value in [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '&#8592;',
        ]"
        :key="value"
        :value="value"
        @pressed="$emit('keyPressed', value)"
      />
    </div>
  </div>
</template>

<script>
import { Offcanvas } from "bootstrap";
import InputChooser from "./InputChooser.vue";
import KeyboardButton from "./KeyboardButton.vue";

export default {
  components: { InputChooser, KeyboardButton },
  name: "Keyboard",
  emits: ["activeInputChanged", "keyPressed"],
  props: {
    visible: Boolean,
    inputs: Array,
    activeInput: String,
  },
  model: {
    prop: "visible",
    event: "change",
  },
  watch: {
    visible: function (newVal) {
      const elem = this.$refs.offcanvasKeyboard;
      const bsOffcanvas = new Offcanvas(elem);
      if (newVal) {
        bsOffcanvas.show();
      } else {
        bsOffcanvas.hide();
      }
    },
  },

  mounted() {
    this.$refs.offcanvasKeyboard.addEventListener("hidden.bs.offcanvas", () => {
      this.$emit("change", false);
    });
  },
};
</script>
