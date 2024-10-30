<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init();
  },
  head() {
    return {
      script: [
        {
          src: 'https://kit.fontawesome.com/a474f4b275.js',
          crossorigin: 'anonymous'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/aos@2.3.1/dist/aos.css'
        }
      ]
    }
  }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Lalezar&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  letter-spacing: .1em;
}

:root {
  --first-color: #000033;
  --second-color: #FFF;
  --black-color: #262626;
}

h1 {
  text-align: center;
  margin: 0 0 15px;
  font-size: 40px;
  letter-spacing: .1rem;
  color: #fff;
  font-weight: 600;
}

h2 {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: .1rem;
  color: var(--black-color);
  margin-bottom: 15px;
}

a.btn-primary {
  display: block;
  width: max-content;
  color: var(--first-color);
  border: 1px solid var(--first-color);
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 30px;
  margin-top: 30px;
  transition: .2s;
}

a.btn-primary:hover {
  background-color: var(--first-color);
  color: #fff;
}

.margin-auto {
  margin: auto;
}

.text-center {
  text-align: center;
}

section {
  min-height: calc(100vh - 422px);
}


@media (max-width: 500px) {


  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 20px;
  }
}


@media (max-width: 300px) {
  body {
    display: none;
  }
}
</style>