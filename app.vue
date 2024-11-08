<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    AOS.init();
  },
  head() {
    return {
      script: [
        {
          src: "https://kit.fontawesome.com/a474f4b275.js",
          crossorigin: "anonymous",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
        },
      ],
    };
  },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Lalezar&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.1em;
}

:root {
  --first-color: #000033;
  --second-color: #fff;
  --black-color: #262626;
}

h1 {
  text-align: center;
  margin: 0 0 15px;
  font-size: 40px;
  letter-spacing: 0.1rem;
  color: #fff;
  font-weight: 600;
}

h2 {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.1rem;
  color: var(--black-color);
  margin-bottom: 15px;
}

a.btn {
  display: block;
  width: max-content;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 30px;
  margin-top: 30px;
  transition: 0.2s;
}

a.btn-primary {
  color: var(--first-color);
  border: 1px solid var(--first-color);
}

a.btn-primary:hover {
  background-color: var(--first-color);
  color: var(--second-color);
}

a.btn-secondary {
  color: var(--second-color);
  border: 1px solid var(--second-color);
}

a.btn-secondary:hover {
  background-color: var(--second-color);
  color: var(--first-color);
}

.margin-auto {
  margin: auto;
}

.text-center {
  text-align: center;
}

section.important {
  min-height: calc(100vh - 374px);
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

/*INÍCIO MAIN*/
main#main {
  width: 100%;
  height: max-content;
  min-height: calc(100vh - 68px);
  background-color: #fff;
  padding-left: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  #inside-main {
    width: 100%;
    max-width: 1440px;
    margin: auto;
  }

  .space {
    background-color: var(--second-color);
    width: 100%;
    padding: 20px;
  }

  .options {
    width: 100%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 20px;
  }

  @media (max-width: 500px) {
    main#main {
      padding: 0;
    }

    .space {
      border: none;
      border-radius: 0;
    }

    .options {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .options > .btn {
      max-width: none;
      width: 100%;
    }
  }

  .mb-3 {
    margin-bottom: 20px;
  }

  .form-control,
  .form-select {
    display: block;
    width: 100%;
    padding: 8px 12px;
    border: 1px solid var(--black-color);
    border-radius: 10px;
    margin: 3px 0;
    background-color: var(--second-color);
    color: var(--black-color);
  }

  .form-control[disabled],
  .form-select[disabled] {
    opacity: 0.4;
  }

  .form-label {
    display: block;
    width: 100%;
    font-size: 0.8rem;
    font-weight: 600;
    margin: 5px auto;
    opacity: 0.7;
    color: var(--black-color);
  }

  .form-text {
    font-size: 0.7rem;
    opacity: 0.7;
    color: var(--black-color);
  }

  .btn-system {
    padding: 8px 12px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 0.8rem;
    text-decoration: none;
    display: block;
    width: max-content;
    margin: 10px 0;
  }

  .btn-primary {
    border: 1px solid var(--first-color);
    background-color: transparent;
    color: var(--black-color);
    transition: 0.3s;
  }

  .btn-primary:hover {
    background-color: var(--first-color);
    color: var(--second-color);
  }

  .btn-secondary {
    border: 1px solid gray;
    background-color: transparent;
    color: gray;
    transition: 0.3s;
  }

  .btn-secondary:hover {
    background-color: gray;
    color: var(--second-color);
  }

  .margin-auto {
    margin: auto;
  }

  .width-cem {
    width: 100%;
  }

  .margin-bottom {
    margin-bottom: 20px;
  }
}

@media (max-width: 999px) {
  main#main {
    width: 100%;
    height: max-content;
    min-height: calc(100vh - 68px);
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/*FIM MAIN*/
</style>
