<template>
  <section class="section-search">
    <div class="container">
      <div class="search-bar">
        <NuxtLink to="/" class="search">
          <SearchPopup />
        </NuxtLink>
        <div>
          <NuxtLink to="/" class="learn">Learn</NuxtLink>
          <NuxtLink to="/" class="donate">Donate</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/scss/partials/_colours";
section.section-search {
  background-color: $white;
  border-bottom: 1px solid $grey;

  div.search-bar {
    display: flex;
    justify-content: space-between;
    @media (min-width: 576px) {
      padding: 0 1rem;
    }
    @media (min-width: 768px) {
      padding: 0 3rem;
    }
    div {
      display: flex;
      align-items: center;
    }
    a {
      display: flex;
      background-color: $white;
      font-weight: bold;
      line-height: 3;
      color: $black;
      text-decoration: none;
      padding: 0rem 1.5rem;
      border: 1px solid #ccc;
      border-width: 0 01px;
      box-sizing: border-box;
      transition: 0.5s;
      @media (min-width: 768px) {
        border-left: 1px solid #ccc;
      }
      &.search {
        display: flex;
        align-items: center;
        span {
          display: none;
          @media (min-width: 768px) {
            display: block;
            padding-left: 0.5rem;
          }
        }
      }
      &.learn {
        display: none;
        @media (min-width: 576px) {
          display: block;
          border-left: 1px solid #ccc;
          border-right: 0;
          box-shadow: inset 0 -5px $app-green;
        }
      }
      &.donate {
        background-color: $app-red;
        color: $white;
        border: 0;
        &:hover {
          $app-red: $app-red;
          background-color: #367d91;
        }
      }
      &:hover {
        background-color: #ececec;
      }
    }
  }
}
</style>
