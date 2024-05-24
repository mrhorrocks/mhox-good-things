<template>
  <div class="info-card">
    <h3>{{ title }}</h3>
    <p>{{ copytext }}</p>
    <ButtonLink to="/" :linkText="linkText" class="on-white" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    copytext: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: false,
      default: "add text",
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/partials/_colours";
.info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 200px;
  text-align: center;
  background-color: $white;
  border-radius: 1rem;
  box-shadow: 0 0 2.25em #00000033;
  p {
    color: black;
    font-size: 1rem;
    margin: 1.5rem 0;
  }
  h4 {
    color: $black;
    font-weight: 500;
  }
}
</style>
