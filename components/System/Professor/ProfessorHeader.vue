<template>
  <header id="header">
    <div id="inside-header">
      <img
        src="/public/img/logo-engenharias_senac-azul.png"
        alt="Logo dos cursos de Engenharia do Centro Universitário Senac Santo Amaro"
      />
      <div id="btn-toggle-nav" @click="toggleNav" :class="{ open: isNavOpen }">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </header>

  <nav id="nav" :class="{ 'nav-open': isNavOpen }">
    <div id="inside-nav">
      <img
        src="/public/img/logo-engenharias_senac.png"
        alt="Logo dos cursos de Engenharia do Centro Universitário Senac Santo Amaro"
      />
      <ul>
        <li>
          <router-link
            to="/professor"
            :class="{ active: navActive === 'index' }"
            ><i class="fa-regular fa-user"></i> Perfil de Professor</router-link
          >
        </li>
        <li>
          <router-link
            to="/professor/avaliar-projeto"
            :class="{ active: navActive === 'avaliar-projeto' }"
            ><i class="fa-regular fa-clipboard"></i> Avaliar
            Projeto</router-link
          >
        </li>
        <li>
          <router-link
            to="/professor/visualizar-notas"
            :class="{ active: navActive === 'visualizar-notas' }"
            ><i class="fa-regular fa-note-sticky"></i> Visualizar
            Notas</router-link
          >
        </li>
        <li>
          <router-link
            to="/professor/palestras"
            :class="{ active: navActive === 'palestras' }"
            ><i class="fa-solid fa-microphone"></i> Palestras</router-link
          >
        </li>
        <li>
          <a href="#" class="out"><i class="fa-solid fa-power-off"></i> Sair</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  props: {
    navActive: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;

      if (this.isNavOpen) {
        window.scrollTo({ top: 0, behavior: "smooth" });

        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>

<style lang="css" scoped>
header#header {
  display: none;
}

nav#nav {
  display: flex;
  flex-direction: column;
  align-items: start;
  position: fixed;
  top: 0;
  left: 0;
  padding: 30px 10px;
  width: 250px;
  height: 100vh;
  border-right: 1px solid rgb(10, 10, 10);
  background-color: var(--first-color);
  overflow: auto;
  transition: left 0.3s ease;
}

nav#nav.nav-open {
  left: 0;
}

#inside-nav {
  width: 100%;
  height: 100%;
  min-height: 400px;
  position: relative;
}

#inside-nav > img {
  width: 100%;
  max-width: 180px;
  display: block;
  margin: 0 auto 40px;
}

#inside-nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  width: 100%;
  height: max-content;
}

#inside-nav ul li {
  display: block;
  width: 100%;
}

#inside-nav ul li:nth-last-child(1) {
  position: absolute;
  bottom: 0;
  max-width: 100%;
}

#inside-nav a {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  color: var(--second-color);
  text-decoration: none;
  transition: background-color 0.3s;
  border-radius: 10px;
  padding: 8px 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

#inside-nav a i {
  display: block;
  width: 15px;
}

#inside-nav a.out {
  opacity: 0.5;
}

#inside-nav a.active {
  background-color: rgba(255, 255, 255, 0.3);
}

#inside-nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

#btn-toggle-nav {
  display: none;
}

@media (max-width: 999px) {
  header#header {
    display: block;
    width: 100%;
    border-bottom: 1px solid rgb(228, 228, 228);
    z-index: 10;
    padding: 10px 20px;
  }

  #inside-header {
    width: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #inside-header > img {
    height: 40px;
  }

  #btn-toggle-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }

  #btn-toggle-nav > div {
    width: 25px;
    height: 3px;
    background-color: var(--first-color);
    border-radius: 10px;
    transition: transform 0.3s, opacity 0.3s;
  }

  #btn-toggle-nav.open > div:nth-child(1) {
    transform: rotate(45deg) translate(4px, 4px);
  }

  #btn-toggle-nav.open > div:nth-child(2) {
    opacity: 0;
  }

  #btn-toggle-nav.open > div:nth-child(3) {
    transform: rotate(-45deg) translate(4px, -4px);
  }

  nav#nav {
    left: -300px;
    z-index: 20;
  }

  .no-scroll {
    overflow-y: hidden;
  }
}
</style>
