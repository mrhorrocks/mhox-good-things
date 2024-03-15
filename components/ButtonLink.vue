<template>
  <NuxtLink
    :to="to"
    :exact="exact"
    :active-class="activeClass"
    :class="['button', buttonClass]"
  >
    <slot>{{ linkText }}</slot>
  </NuxtLink>
</template>

<script lang="ts">
export default {
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    exact: {
      type: Boolean,
      default: false,
    },
    activeClass: {
      type: String,
      default: "active",
    },
    buttonClass: {
      type: String,
      default: "",
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
a {
  position: relative;
  display: inline-block;
  background-color: var(--white);
  padding: 0.5rem 1.5rem;
  margin: 0rem 0 0 0;
  border-radius: 2rem;
  border: 3px solid var(--white);
  box-sizing: border-box;
  color: var(--button-link-text);
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  width: 100%;
  transition: 0.25s;

  @media (min-width: 768px) {
    width: auto;
  }

  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
    border: 3px solid var(--white);
  }

  &.app-green {
    background-color: var(--app-green);
    color: var(--white);

    &:hover {
      background-color: var(--app-red);
    }
  }

  &.app-red {
    background-color: var(--app-red);
    color: var(--white);

    &:hover {
      background-color: var(--app-green);
    }
  }

  &.on-white {
    background-color: var(--white);
    color: var(--app-red);
    border: 3px solid var(--black);

    &:hover {
      background-color: var(--app-red);
      color: var(--white);
    }
  }

  &.no-margin {
    margin: 0;
  }
}
</style>
