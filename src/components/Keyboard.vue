<template>
  <div
    class="offcanvas offcanvas-bottom"
    tabindex="-1"
    ref="offcanvasKeyboard"
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasBottomLabel">Keyboard</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body small">...</div>
  </div>
</template>

<script>
import { Offcanvas } from "bootstrap";

export default {
  name: "Keyboard",
  emits: [],
  props: {
    visible: Boolean,
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
