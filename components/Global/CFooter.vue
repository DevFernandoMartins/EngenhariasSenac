<template>
    <footer id="footer">
        <div id="inside-footer">
            <div id="div-logo-senac">
                <a href="/">
                    <img src="/public/img/logo-engenharias_senac-azul.png"
                        alt="Logo dos cursos de Engenharia do Centro Universitário Senac" id="logo-senac">
                </a>
            </div>

            <div id="copyrigth">
                © Centro Universitário Senac Santo Amaro. Todos os Direitos Reservados
            </div>
        </div>
    </footer>
</template>

<style lang="css" scoped>
footer#footer {
    width: 100%;
    background-color: var(--first-color);
    padding: 15px 40px;
    z-index: 30;
    transition: background-color 0.2s ease;
}

img#logo-senac {
    height: 40px;
    filter: brightness(0) invert(1);
    transition: filter 0.2s ease;
    margin: auto;
}

#inside-footer {
    width: 100%;
    max-width: 1440px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#copyrigth {
    color: var(--second-color);
    font-size: .9rem;
}


</style>