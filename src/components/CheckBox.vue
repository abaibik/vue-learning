<template>
  <div class="mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
      :checked="checked"
      @change="$emit('change', !checked)"
    />
    <label class="form-check-label" for="flexCheckDefault">
      On-screen keyboard
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    checked: Boolean,
  },
  model: {
    prop: "checked",
    event: "change",
  },
};
</script>
