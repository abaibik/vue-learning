<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
      :checked="checked"
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
};
</script>
