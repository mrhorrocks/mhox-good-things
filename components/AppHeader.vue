import { IconsIconMenu } from '#build/components';
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
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--white);
  min-height: 100px;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 768px) {
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
    color: var(--app-red);
    cursor: pointer;
    @media (min-width: 1024px) {
      display: none;
    }
  }
}
</style>
