<template>
  <!-- <button :class="['app-button', buttonClass]"> -->
  <button class="app-button">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: "Add text prop",
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/partials/_colours";
.app-button {
  display: flex;
  padding: 0.75rem 1.75rem;
  border: 0px solid white;
  color: white;
  background-color: $app-red;
  font-family: "Roboto";
  font-size: 1rem;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    background: #367d91;
  }
}
</style>
