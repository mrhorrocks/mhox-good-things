<template>
  <section class="section-intro">
    <div class="container">
      <div class="intro-one">
        <h1>Get online week</h1>
        <p class="hero-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus atque
          reiciendis incidunt explicabo ipsum unde autem sunt id veniam laborum
          iure officia numquam rerum.
        </p>
        <ButtonLink to="/" linkText="Get involved now!" />
      </div>
    </div>
  </section>

  <section class="intro-two">
    <div class="grid">
      <div class="big-image">
        <!-- Background goes here -->
      </div>
      <div>
        <h2>
          We are a social change charity, helping people to improve their lives
          through digital.
        </h2>
        <p>
          We tackle the most pressing issues of our time, working with partners
          in thousands of communities accross the UK and further afield.
        </p>
        <ButtonLink to="/" linkText="Learn more about us" class="app-green" />
      </div>
    </div>
  </section>

  <section class="intro-three">
    <div class="grid container">
      <!--  -->
      <div>
        <h2>How can we help you?</h2>
        <p>
          Let us know who you are and what you're looking for, and we'll help
          you get to the right place.
        </p>
      </div>
      <!--  -->

      <!--  -->
      <div class="cta-banner">
        <p>
          I am <a href="#">an individual</a> and I <a href="#">want to learn</a>
        </p>
        <ButtonLink to="/" linkText="Start now" class="app-red no-margin" />
      </div>
      <!--  -->
    </div>
  </section>

  <section class="intro-cta">
    <div class="container">
      <div>
        <h2>What we do?</h2>
        <p>
          You might not have heard of us. But we're the people behind the
          following impactful programmes.
        </p>
      </div>

      <div class="grid info-cards">
        <InfoCard
          title="Get online week"
          copytext="Lorem ipsum dolor sit."
          linkText="Read more"
        />
        <InfoCard
          title="Learn my way"
          copytext="Lorem ipsum dolor sit."
          linkText="Read more"
        />
        <InfoCard
          title="Make it click"
          copytext="Lorem ipsum dolor sit."
          linkText="Read more"
        />
        <InfoCard
          title="Digital you"
          copytext="Lorem ipsum dolor sit."
          linkText="Read more"
        />
      </div>

      <div class="align-center">
        <ButtonLink to="/" linkText="More about what we do" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// intro
section.section-intro {
  background-color: #ccc;
  background: url("/assets/images/pexels-andrea-piacquadio-92.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 80%;
  background-position-y: 50%;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--grey);
  .intro-one {
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 3rem;
    }
    h1 {
      line-height: 1;
      background-color: var(--primary-color);
      color: var(--white);
      margin-bottom: 1.5rem;
      width: 100%;
      padding: 2rem 1rem;

      @media (min-width: 400px) {
        width: fit-content;
      }
    }
    p.hero-text {
      padding: 1rem 1.5rem;
      background-color: white;
      color: var(--app-green);
      width: 100%;
      @media (min-width: 400px) {
        max-width: 40rem;
      }
    }
  }
}
// intro-two
section.intro-two {
  margin-bottom: 1rem;
  .grid {
    grid-template-columns: 100%; // 1 col grid
    @media (min-width: 1024px) {
      grid-template-columns: 50% 50%; // 2 col grid
    }
    div {
      background-color: var(--app-green);
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      h2 {
        color: var(--white);
        line-height: 1.2;
        margin-bottom: 1rem;
      }
      p {
        color: var(--white);
      }
      &.big-image {
        background: url("/assets/images/pexels-kat-wilcox-923657.jpg");
        background-size: cover;
        background-position-y: -260px;
        background-repeat: no-repeat;
        height: 300px;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        @media (min-width: 1024px) {
          height: 400px;
        }
      }
    }
  }
}
// intro-three
section.intro-three {
  background-color: var(--grey);
  margin-bottom: 1rem;
  .grid {
    grid-template-columns: auto; // 1 col grid
    padding: 1rem;
    @media (min-width: 1024px) {
      padding: 2rem;
    }
    div {
      h2 {
        color: var(--black);
        line-height: 1.2;
        margin-bottom: 1rem;
      }
      p {
        color: var(--black);
      }
    }
    .cta-banner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 1rem 0;
      padding: 1rem 0;
      background-color: var(--white);
      border-radius: 2rem;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      p {
        font-size: 2rem;
        line-height: 1.8;
        margin-right: 1rem;
        text-align: center;
        a {
          color: var(--app-green);
        }
      }
      a {
        margin-top: 1rem;

        @media (min-width: 768px) {
          margin-top: 0rem;
        }
      }
    }
  }
}
// intro-cta
section.intro-cta {
  background-color: var(--primary-color);
  div {
    padding: 1rem;
    h2 {
      color: var(--white);
      line-height: 1.2;
      margin-bottom: 1rem;
    }
    p {
      color: var(--white);
    }
  }
  div.grid {
    grid-template-columns: 1fr; // 1 col grid
    grid-gap: 2rem;
    @media (min-width: 550px) {
      grid-template-columns: 1fr 1fr; // 2 col grid
    }
    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr; // 4 col grid
    }
  }
}
</style>
