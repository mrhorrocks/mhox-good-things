<template>
  <section class="section-search">
    <div class="container">
      <div class="search-bar">
        <NuxtLink to="/" class="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            width="30"
            height="30"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <span>Search</span>
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
section.section-search {
  background-color: var(--white);
  border-bottom: 1px solid var(--grey);

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
    }
    a {
      display: flex;
      background-color: var(--white);
      font-weight: bold;
      line-height: 3;
      color: var(--black);
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
            margin-left: 0.5rem;
          }
        }
      }
      &.learn {
        display: none;
        @media (min-width: 576px) {
          display: block;
          border-left: 1px solid #ccc;
          border-right: 0;
          box-shadow: inset 0 -3px var(--app-green);
        }
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
