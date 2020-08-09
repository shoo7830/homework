<template>
  <button class="kp-button" :class="[type ? 'kp-button--' + type : '']">
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "KpButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: String
  }
};
</script>

<style></style>
