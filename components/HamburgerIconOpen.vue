<template>
  <button class="hamburger">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#c02f47"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  </button>
</template>

<style lang="scss">
@import "../assets/scss/partials/_colours";

button.hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}
</style>
