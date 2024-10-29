<template>
    <footer id="footer">
        <div id="inside-footer">
            <div id="div-logo-senac">
                <a href="/">
                    <img src="/public/img/logo-engenharias_senac-azul.png"
                        alt="Logo dos cursos de Engenharia do Centro Universitário Senac" id="logo-senac">
                </a>
            </div>

            <div id="copyright">
                © Comitê das Engenharias Senac
            </div>
        </div>
    </footer>
</template>

<style lang="css" scoped>
footer#footer {
    width: 100%;
    background-color: var(--first-color);
    padding: 15px;
    z-index: 30;
    transition: background-color 0.2s ease;
    margin-top: 50px;
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
    gap: 30px;
}

#copyright {
    color: var(--second-color);
    font-size: .7rem;
    opacity: .8;
}


@media (max-width: 1000px) {
    #inside-footer {
        flex-direction: column;
    }

    #copyright {
        text-align: center;
    }
}

@media (max-width: 500px) {
    img#logo-senac {
        height: 30px;
    }

}
</style>