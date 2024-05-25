<template>
  <section>
    <div class="container">
      <header>
        <!-- App Logo -->
        <img
          alt="Good Things Foundation"
          class="logo"
          src="@/assets/images/good-things-foundation-logo.png"
        />
        <!-- App Main Nav -->
        <AppNav />
        <!-- App Mobile Nav -->
        <div class="toggle-menu">
          <MobileNav />
        </div>
      </header>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/_colours";
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $white;
  min-height: 80px;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 768px) {
    min-height: 100px;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  img {
    height: 2.5rem;
    @media (min-width: 768px) {
      height: 3.4rem;
    }
  }
  .toggle-menu {
    display: block;
    width: 40px;
    height: 40px;
    color: $app-red;
    @media (min-width: 1024px) {
      display: none;
    }
  }
}
</style>
