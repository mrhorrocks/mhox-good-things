<template>
  <nav class="app-nav">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/what-we-do">What we do</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/the-digital-divide">The digital divide</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/get-involved">Get involved</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/our-network">Our network</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/insights">Insights</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "../assets/scss/partials/_colours";
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
        height: 100px;
        color: $black;
        padding: 0 0.3rem;
        text-decoration: none;
        transition: 0.5s;
        font-weight: bold;
        &.router-link-active,
        &:hover {
          color: $primary-colour;
          text-decoration: underline 5px $primary-colour;
          text-underline-offset: 0.5em;
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
