<template>
  <input
    :type="isPassword ? 'password' : 'text'"
    v-bind="$attrs"
    ref="input"
    class="kp-input"
  />
</template>

<script>
export default {
  name: "KpInput",
  props: {
    isPassword: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
