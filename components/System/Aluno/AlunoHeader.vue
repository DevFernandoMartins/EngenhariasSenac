<template>
  <header id="header">
    <div id="inside-header">
      <img
        src="/public/img/logo-engenharias_senac-azul.png"
        alt="Logo dos cursos de Engenharia do Centro Universitário Senac Santo Amaro"
      />
      <div id="btn-toggle-nav">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </header>

  <nav id="nav">
    <img
      src="/public/img/logo-engenharias_senac-azul.png"
      alt="Logo dos cursos de Engenharia do Centro Universitário Senac Santo Amaro"
    />
    <ul>
      <li>
        <router-link to="/aluno" :class="{ active: navActive === 'index' }"
          ><i class="fa-regular fa-user"></i> Perfil de Aluno</router-link
        >
      </li>
      <li>
        <router-link
          to="/aluno/grupo"
          :class="{ active: navActive === 'grupo' }"
          ><i class="fa-solid fa-people-group"></i> Meu grupo</router-link
        >
      </li>
      <li>
        <router-link
          to="/aluno/notas"
          :class="{ active: navActive === 'notas' }"
          ><i class="fa-regular fa-clipboard"></i> Notas</router-link
        >
      </li>
      <li>
        <router-link
          to="/aluno/palestras"
          :class="{ active: navActive === 'palestras' }"
          ><i class="fa-solid fa-microphone"></i> Palestras</router-link
        >
      </li>
      <li>
        <router-link
          to="/aluno/qrcode"
          :class="{ active: navActive === 'qr-code' }"
          ><i class="fa-solid fa-qrcode"></i> QR Code</router-link
        >
      </li>
      <li>
        <a href="#" class="out"><i class="fa-solid fa-power-off"></i> Sair</a>
      </li>
    </ul>
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
  height: 100%;
  border-right: 1px solid rgb(228, 228, 228);
}

nav#nav > img {
  width: 100%;
  max-width: 180px;
  margin: 0 auto 50px;
}

#nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  width: 100%;
  height: 100%;
  position: relative;
}

#nav ul li {
  display: block;
  width: 100%;
}

#nav ul li:nth-last-child(1) {
  position: absolute;
  bottom: 0;
  max-width: 100%;
}

#nav a {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  color: var(--black-color);
  text-decoration: none;
  transition: background-color 0.3s;
  border-radius: 10px;
  padding: 8px 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

#nav a i {
  display: block;
  width: 15px;
}

#nav a.out {
  color: rgb(224, 0, 0);
}

#nav a.active {
  background-color: rgba(0, 0, 0, 0.06);
}

#nav a:hover {
  background-color: rgba(0, 0, 0, 0.04);
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
  }

  nav#nav {
    left: -300px;
    z-index: 20;
    background-color: var(--second-color);
  }
}
</style>
