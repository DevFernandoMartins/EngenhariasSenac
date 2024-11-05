<template>
    <header id="header">
        <div id="inside-header">
            <a href="#" class="header-picture">
                <img src="/public/img/logo-engenharias_senac-azul.png"
                    alt="Logo dos cursos de Engenharia do Centro Universitário Senac Santo Amaro">
            </a>
            <nav id="nav">
                <ul>
                    <li><router-link to="/professor" :class="{ active: navActive === 'index' }">Perfil de Professor</router-link></li>
                    <li><router-link to="/professor/projetos" :class="{ active: navActive === 'projetos' }">Projetos</router-link></li>
                    <li><router-link to="/professor/Palestras" :class="{ active: navActive === 'palestras' }">Palestras</router-link></li>
                    <li><a href="#" class="out"><i class="fa-solid fa-power-off"></i> Sair</a></li>

                </ul>
            </nav>
            <div id="btn-toggle-nav" class="btn-to-close">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
export default {
    props: {
        navActive: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="css" scoped>
header#header {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.200);
    padding: 10px 30px;
    background-color: var(--second-color);
}

#inside-header {
    width: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
}

.header-picture>img {
    height: 35px;
}

nav#nav {
    display: flex;
    align-items: center;
    justify-content: center;
}

#nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 5px;
}

#nav a {
    color: var(--black-color);
    text-decoration: none;
    padding: 5px 10px;
    transition: background-color 0.3s;
    border-radius: 30px;
    padding: 5px 20px;
    font-size: .75rem;
}

#nav a.out {
    color: rgb(224, 0, 0);
}

#nav a.active {
    background-color: rgba(128, 128, 128, 0.282);
}

#nav a:hover {
    background-color: rgba(200, 200, 200, 0.300);
}

#btn-toggle-nav {
    display: none;
}


@media (max-width: 999px) {

    nav#nav {
        display: none;
    }

    #btn-toggle-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        cursor: pointer;
    }

    #btn-toggle-nav>div {
        width: 30px;
        height: 3px;
        background-color: var(--first-color);
        border-radius: 3px;
        transition: .3s
    }
}

</style>

