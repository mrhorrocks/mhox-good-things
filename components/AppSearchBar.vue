<template>
  <section class="section-search">
    <div class="container">
      <div class="search-bar">
        <NuxtLink to="/">Search</NuxtLink>
        <div>
          <NuxtLink to="/" class="learn">Learn</NuxtLink>
          <NuxtLink to="/" class="donate">Donate</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section.section-search {
  background-color: var(--white);
  border-bottom: 1px solid var(--grey);

  div.search-bar {
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
      padding: 0 3rem;
    }
    div {
      display: flex;
    }
    a {
      background-color: var(--white);
      font-weight: bold;
      line-height: 3;
      color: var(--black);
      text-decoration: none;
      padding: 0rem 1rem;
      border: 0;
      border-right: 1px solid #ccc;
      box-sizing: border-box;
      transition: 0.5s;
      @media (min-width: 768px) {
        border-left: 1px solid #ccc;
      }
      &.learn {
        border-left: 1px solid #ccc;
        border-right: 0;
        border-bottom: 3px solid var(--app-green);
      }
      &.donate {
        background-color: var(--app-red);
        color: var(--white);
        border: 0;
        &:hover {
          $app-red: var(--app-red);
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
