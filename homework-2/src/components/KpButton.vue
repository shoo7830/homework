<template>
  <button 
    class="kp-button">
    <span></span>
  </button>
</template>

<script>
export default {
  name: 'KpButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String
  }
}
</script>

<style>

</style>