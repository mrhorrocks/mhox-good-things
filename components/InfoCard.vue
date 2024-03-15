<script setup lang="ts">
import ButtonLink from "@/components/ButtonLink.vue";
</script>
<template>
  <div class="info-card">
    <h3>{{ title }}</h3>
    <p>Lorem ipsum dolor sit</p>
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

<style lang="scss" scoped>
.info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 200px;
  text-align: center;
  background-color: var(--white);
  border-radius: 1rem;
  box-shadow: 0 0 2.25em #00000033;
  h4 {
    color: var(--black);
    font-weight: 500;
  }
}
</style>
