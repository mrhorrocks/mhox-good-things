<template>
  <div class="search-popup">
    <!-- Activation button -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2.5"
      stroke="currentColor"
      width="30"
      height="30"
      @click="togglePanel"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
    <span @click="togglePanel">Search</span>

    <!-- Modal background -->
    <div
      v-if="searchPanel"
      @click="closeSearchPanel"
      class="search-modal-bg"
    ></div>
    <!-- Modal background -->

    <!-- Content -->
    <div v-if="searchPanel" class="search-panel">
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
        @click.stop="closeSearchPanel"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>

      <!-- START content here -->
      <div class="search-box">
        <h3>Search</h3>
        <div class="search-fields">
          <TextField
            id="search"
            label="I'm looking for..."
            class="search-text"
            v-model="inputValue"
            @input="checkInput"
          />
          <AppButton class="search-button" :disabled="!inputValue">
            Search
          </AppButton>
        </div>
      </div>
      <!-- END content here -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchPanel: false,
      inputValue: "",
    };
  },
  methods: {
    togglePanel () {
      this.searchPanel = !this.searchPanel;
    },
    closeSearchPanel () {
      this.searchPanel = false;
    },
    checkInput () {
      // Update the button's disabled state based on whether there is input in the text field
      this.$forceUpdate(); // This forces Vue to update the button's disabled state
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/partials/_colours";
.search-popup {
  display: block;
  .search-modal-bg {
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 90%;
  }
  .search-panel {
    position: fixed;
    z-index: 51;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 1.5rem;
    .search-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @media (min-width: 768px) {
        margin: 0 auto;
        max-width: 720px;
      }
      h3 {
        font-size: 2.5rem;
        color: white;
        margin-bottom: 1rem;
        font-weight: normal;
      }
      .search-fields {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        @media (min-width: 400px) {
          flex-direction: row;
        }
        .search-text {
          width: 100%;
          @media (min-width: 400px) {
            margin-right: 1rem;
          }
        }
        .search-button {
          display: flex;
          width: 100%;
          justify-content: center;
          margin-top: 2rem;
          @media (min-width: 400px) {
            width: 40%;
            max-width: 110px;
          }
          &:disabled {
            background-color: $app-red;
            opacity: 0.5;
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
