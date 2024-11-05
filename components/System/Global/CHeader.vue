<template>
    <header id="header">
        <div id="inside-header">
            <a href="#" class="header-picture"><img src="/public/img/logo-engenharias_senac-azul.png"
                    alt="Logo dos cursos de Engenharia do Centro Universitário Senac Santo Amaro"></a>
            <nav id="nav">
                <ul>
                    <li><a href="/index" class="active">Meu perfil</a></li>
                    <li><a href="/grupo">Meu grupo</a></li>
                    <li><a href="/notas">Notas</a></li>
                    <li><a href="/palestras">Palestras</a></li>
                    <li><a href="#" class="out"><i class="fa-solid fa-power-off"></i> Sair</a></li>
                </ul>
            </nav>
            <div id="btn-toggle-nav" class="btn-to-close" onclick="toggleNavbar">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </header>
</template>

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

.header-picture > img {
    height: 40px;
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
    gap: 20px;
}

#nav a {
    color: var(--black-color);
    text-decoration: none;
    padding: 5px 10px;
    transition: background-color 0.3s;
    border-radius: 30px;
    padding: 5px 20px;
}

#nav a.out {
    color: rgb(224, 0, 0);
}

#nav a.active {
    background-color: rgba(128, 128, 128, 0.282);
}

#nav a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;  
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