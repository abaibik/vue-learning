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
    </div>
  </div>
</template>

<script>
import { Offcanvas } from "bootstrap";
import InputChooser from "./InputChooser.vue";

export default {
  components: { InputChooser },
  name: "Keyboard",
  emits: ["activeInputChanged"],
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
