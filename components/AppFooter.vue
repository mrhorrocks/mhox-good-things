<template>
  <section id="footer">
    <div class="container">
      <footer class="grid md:cols-3 gap-1">
        <div class="column">
          <NuxtLink to="/">Privacy policy</NuxtLink>
          <NuxtLink to="/">Terms & conditions</NuxtLink>
          <NuxtLink to="/">Contact us</NuxtLink>
        </div>

        <div class="column">
          <nuxt-icon name="twitterx" filled />
          <nuxt-icon name="facebook" filled />
        </div>

        <div class="column">
          <!-- App Logo -->
          <img
            alt="Good Things Foundation"
            class="logo"
            src="@/assets/images/good-things-foundation-logo.png"
            width="200px"
          />
        </div>
      </footer>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/scss/partials/_colours";
section#footer {
  background-color: $grey;
  padding: 1rem;
  .column {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid $primary-colour;
    padding: 0 0 1rem 0;
    a {
      color: $primary-colour;
    }
    @media (min-width: 768px) {
      &:nth-child(2) {
        flex-direction: row;
        padding: 0 1rem;
        border-left: 1px solid $primary-colour;
        border-right: 1px solid $primary-colour;
      }
      border-bottom: 0px;
    }
  }
}
</style>
