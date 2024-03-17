<template>
  <div class="app-mobile-nav">
    <!-- Activation button -->
    <HamburgerIconOpen v-if="!sidePanel" @click="toggleMenu" />

    <!-- <Button
      v-if="!sidePanel"
      @click="toggleMenu"
      buttonClass="nav-button"
      text="Open Side Panel"
    />

    <Button
      v-if="sidePanel"
      @click="toggleMenu"
      buttonClass="nav-button"
      text="Close Side Panel"
    /> -->

    <!-- Modal background -->
    <div v-if="sidePanel" @click="closeNavPopup" class="nav-modal-bg"></div>
    <!-- Content -->
    <div v-if="sidePanel" class="nav-panel" @click.stop="closeNavPopup">
      <!-- Close panel -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-x-circle close-panel-icon"
        @click.stop="closeNavPopup"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>

      <!-- Add content here -->
      <AppNav />
      <!-- Add content here -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sidePanel: false,
    };
  },
  methods: {
    toggleMenu () {
      this.sidePanel = !this.sidePanel;
    },
    closeNavPopup () {
      this.sidePanel = false;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/partials/_colours";
.app-mobile-nav {
  display: block;
  .nav-modal-bg {
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 90%;
  }
  .nav-panel {
    position: fixed;
    z-index: 51;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 1rem;
    .app-nav {
      display: flex;
      align-items: center;
      height: 100vh;
      width: 100%;
      padding: 0rem 0rem 6rem 2rem;
      ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        li {
          width: 100%;
          height: 4rem;
          a {
            font-size: 1.75rem;
            color: #fff;
            &:hover {
              color: lighten($primary-colour, 30%);
            }
            &.router-link-active {
              color: $primary-colour;
            }
          }
        }
      }
    }
    .close-panel-icon {
      position: absolute;
      right: 1rem;
      top: 1rem;
      color: white;
      cursor: pointer;
    }
  }
}
</style>
