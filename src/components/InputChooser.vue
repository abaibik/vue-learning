<template>
  <div class="radios d-flex">
    <div class="form-check m-2" v-for="input in inputs" :key="input">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        :id="input"
        :checked="input === chosenInput"
        @change="changeHandler($event, input)"
      />
      <label class="form-check-label" :for="input"> {{ input }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputChooser",
  emits: ["chosenInputChanged"],
  props: {
    inputs: Array,
    chosenInput: String,
  },
  methods: {
    changeHandler($event, input) {
      if ($event.target.checked) {
        this.$emit("chosenInputChanged", input);
      }
    },
  },
};
</script>
