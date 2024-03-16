<template>
  <nav class="app-nav">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">What we do</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/reason">The digital divide</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/reason">Get involved</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/reason">Our network</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/reason">Insights</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
nav.app-nav {
  display: none;
  @media (min-width: 1024px) {
    display: flex;
  }
  ul {
    display: flex;
    li {
      display: inherit;
      a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        color: var(--black);
        padding: 0 0.3rem;
        text-decoration: none;
        transition: 0.5s;
        font-weight: bold;
        &.router-link-active,
        &:hover {
          color: var(--primary-color);
          text-decoration: underline 5px var(--primary-color);
          // text-underline-offset: 0.5em;
        }
        @media (min-width: 1024px) {
          font-size: 1.1rem;
          padding: 0.5rem;
        }
      }
    }
  }
}
</style>
