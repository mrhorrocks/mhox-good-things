<template>
  <section class="section-intro">
    <div class="container">
      <div class="intro-one">
        <h1>Get Online Week</h1>
        <p class="hero-text">
          Taking place every year in October, Get Online Week is Good Things
          Foundation's digital inclusion campaign that inspires people to do
          more online and helps them to learn how.
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
        <p>I am an individual and I want to learn</p>
        <ButtonLink to="/" linkText="Start now" class="app-red no-margin" />
      </div>
      <!--  -->
    </div>
  </section>

  <section class="intro-cta">
    <div class="container">
      <h2>What we do?</h2>
      <p>
        You might not have heard of us. But we're the people behind the
        following impactful programmes.
      </p>
    </div>

    <div class="grid info-cards">
      <InfoCard
        title="Get online week"
        copytext="Get Online Week is an annual digital inclusion campaign organised by Good Things Foundation"
        linkText="Read more"
      />
      <InfoCard
        title="Learn my way"
        copytext="Learn My Way is a website of free online learning for beginners, helping you develop digital skills to make the most of the online world."
        linkText="Read more"
      />
      <InfoCard
        title="Make it click"
        copytext="Make It Click was a programme targeting those who have made the move online but lack digital skills and use the internet only in limited ways."
        linkText="Read more"
      />
      <InfoCard
        title="Digital you"
        copytext="We are the digital inclusion charity, helping people improve their lives with free access to data, devices and digital skills learning"
        linkText="Read more"
      />
    </div>

    <div class="align-center">
      <ButtonLink to="/" linkText="More about what we do" />
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/scss/partials/_colours";
// intro
section.section-intro {
  background-color: #ccc;
  background: url("/assets/images/pexels-andrea-piacquadio-92.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 80%;
  background-position-y: 50%;
  margin-bottom: 1rem;
  .intro-one {
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 3rem;
    }
    h1 {
      background-color: lighten($primary-colour, 0%);
      color: $white;
      margin: 1rem 0;
      padding: 1rem 1rem;
      font-size: clamp(2.1rem, 9vw, 4.5rem);
      font-weight: normal;
      line-height: 1;
      width: 100%;
      max-width: 40rem;
      border-radius: 10px;
    }
    p.hero-text {
      padding: 1.5rem;
      background-color: #ffffffde;
      color: $app-green;
      width: 100%;
      margin: 2rem 0;
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.5;
      border-radius: 10px;
      box-shadow: 0 0 2.25em #00000033;
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
      background-color: $app-green;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      h2 {
        color: $white;
        line-height: 1.2;
        margin-bottom: 1rem;
      }
      p {
        color: $white;
      }
      a.button {
        margin-top: 2rem;
      }
      &.big-image {
        background: url("/assets/images/pexels-kat-wilcox-923657.jpg");
        background-size: cover;
        background-position-y: 30%;
        background-repeat: no-repeat;
        min-height: 400px;
        @media (min-width: 1024px) {
          height: 100%;
        }
      }
    }
  }
}
// intro-three
section.intro-three {
  text-align: center;
  background-color: $grey;
  margin-bottom: 1rem;
  .grid {
    grid-template-columns: auto; // 1 col grid
    padding: 1rem;
    @media (min-width: 1024px) {
      padding: 2rem;
    }
    div {
      h2 {
        color: $black;
        line-height: 1.2;
        margin-bottom: 1rem;
      }
      p {
        color: $black;
      }
    }
    .cta-banner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 1rem auto;
      padding: 1rem;
      background-color: $white;
      box-shadow: 0 0 2.25em #00000033;
      max-width: 880px;
      border-radius: 10px;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      p {
        font-size: 1.8rem;
        line-height: 1.3;
        margin-right: 1rem;
        font-weight: bold;
        a {
          color: $app-green;
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
.intro-cta {
  background-color: $primary-colour;
  text-align: center;
  padding: 1rem;
  h2 {
    color: $white;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  p {
    color: $white;
  }
  div.grid {
    grid-template-columns: 1fr; // 1 col grid
    grid-gap: 2rem;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
