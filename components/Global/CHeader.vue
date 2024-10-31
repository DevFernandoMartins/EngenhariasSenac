<template>
    <header id="header">
        <div id="inside-header">
            <ul>
                <li id="btn-toggle-nav" class="btn-to-close" @click="toggleNavbar">
                    <div></div>
                    <div></div>
                    <div></div>
                </li>
                <li id="div-logo-senac">
                    <a href="/">
                        <img src="/public/img/logo-engenharias_senac-azul.png"
                            alt="Logo dos cursos de Engenharia do Centro Universitário Senac" id="logo-senac">
                    </a>
                </li>
                <li id="navbar-lg">
                    <RouterLink v-for="link in navbarList" :to="'/' + link.link">{{ link.text }}</RouterLink>
                </li>
                <li id="div-route-login">
                    <RouterLink to="/login" id="route-login"><i class="fa-solid fa-lock"></i> <span>Entrar</span>
                    </RouterLink>
                </li>
            </ul>
        </div>

        <nav id="navbar-sm" class="navbar-close" data-status="closed">
            <ul>
                <li v-for="navbarLink in navbarList" :key="navbarLink.text">
                    <a :href="navbarLink.link" v-html="navbarLink.text"></a>
                </li>
            </ul>
        </nav>

    </header>
    <section id="picture">
        <div id="inside-picture">
            <h1 data-aos="fade-up">{{ title }}</h1>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            navbarList: [
                { link: "", text: "Saiba Mais" },
                { link: "programacao", text: "Programação" },
                { link: "patrocinar", text: "Patrocinar" },
                { link: "contato", text: "Fale Conosco" }
            ]
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        toggleNavbar() {
            const navbarSm = document.getElementById('navbar-sm')
            const btnToggleNav = document.getElementById('btn-toggle-nav')
            if (btnToggleNav) {
                btnToggleNav.classList.toggle('active');
            }
            if (navbarSm) {
                navbarSm.classList.toggle('navbar-open');
                navbarSm.classList.toggle('navbar-close');
                if (navbarSm.getAttribute('data-status') == "closed") {
                    navbarSm.setAttribute('data-status', 'opened');
                    this.headerToColor()
                    setTimeout(() => {
                        navbarSm.style.minHeight = "max-content";
                    }, 300);
                } else {
                    navbarSm.setAttribute('data-status', 'closed');
                    navbarSm.style.minHeight = "";
                    this.handleScroll()
                }
                
            }
        },
        handleScroll() {

            if (window.scrollY > 50) {
                this.headerToColor()
            } else {
                this.headerToWhite()
            }
        },
        headerToColor() {
            const header = document.getElementById('header');
            const logo = document.getElementById('logo-senac');
            const links = header.querySelectorAll('div#inside-header ul li a');
            const btnOpenNav = document.querySelectorAll('#btn-toggle-nav>div')

            header.style.backgroundColor = '#fff';
            header.style.borderBottom = '1px solid #999999';
            logo.style.filter = 'none';
            btnOpenNav.forEach(div => {
                div.style.backgroundColor = "var(--first-color)"
            })
            links.forEach(link => {
                link.style.color = 'var(--black-color)';
            });

        },
        headerToWhite() {
            const header = document.getElementById('header');
            const logo = document.getElementById('logo-senac');
            const links = header.querySelectorAll('div#inside-header ul li a');
            const btnOpenNav = document.querySelectorAll('#btn-toggle-nav>div')

            header.style.backgroundColor = 'transparent';
            header.style.borderBottom = 'none';
            logo.style.filter = 'brightness(0) invert(1)';
            btnOpenNav.forEach(div => {
                div.style.backgroundColor = "var(--second-color)"
            })
            links.forEach(link => {
                link.style.color = '#fff';
            });
        }
    }
};
</script>

<style scoped>
header#header {
    width: 100%;
    background-color: transparent;
    padding: 15px;
    position: fixed;
    z-index: 30;
    transition: background-color 0.2s ease;
}

nav {
    z-index: 30;
}

#link-logo-senac-sm,
#btn-toggle-nav,
nav#navbar-sm {
    display: none;
}

nav#inside-header {
    width: 100%;
    max-width: 1440px;
    margin: auto;
}

#inside-header>ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#inside-header>ul>li,
#navbar-sm>ul>li {
    list-style: none;
    margin: 0;
    padding: 0;
}

li#navbar-lg {
    display: flex;
    gap: 5px;
}

li#navbar-lg>a,
#navbar-sm>ul>li>a,
li#div-route-login>a {
    display: block;
    width: max-content;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    transition: .3s;
    padding: 10px 20px;
    border-radius: 30px;
    transition: color 0.2s ease;
}

li#div-route-login>a {
    border: 2px solid #d4d4d4;
}

li#navbar-lg>a:hover,
li#div-route-login>a:hover {
    background-color: rgba(197, 197, 197, 0.553);
}

img#logo-senac {
    height: 40px;
    filter: brightness(0) invert(1);
    transition: filter 0.2s ease;
    margin: auto;
}

#picture {
    width: 100%;
    height: max-content;
    min-height: 300px;
    background-color: var(--first-color);
    background-image: url('/public/img/picture_senac_engineer01.jpg');
    background-size: cover;
    background-position: top center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 30px;
}

#picture::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
}

#inside-picture {
    width: 100%;
    max-width: 1440px;
    z-index: 2;
    padding-top: 80px
}

@media (max-width: 999px) {
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
        background-color: #fff;
        border-radius: 3px;
        transition: .3s
    }

    #inside-header>ul {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 2fr);
        align-items: center;
        justify-content: space-between;
    }

    #inside-header>ul>li#navbar-lg {
        display: none;
        visibility: hidden;
    }

    nav#navbar-sm {
        display: block;
        position: absolute;
        top: 80px;
        width: 100%;
        height: calc(100vh - 80px);
        overflow: hidden;
        background-color: var(--first-color);
        transition: .3s;
    }

    nav#navbar-sm>ul {
        height: 100%;
        padding: 100px 0;
        min-height: 500px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

    }

    .navbar-open {
        left: 0;
    }

    .navbar-close {
        left: -100%;
    }

    .btn-to-close div:nth-child(1) {
        transform: rotate(0);
    }

    .btn-to-close div:nth-child(3) {
        transform: rotate(0);
    }

    .btn-to-close.active div:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .btn-to-close.active div:nth-child(2) {
        opacity: 0;
    }

    .btn-to-close.active div:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
    }

    #btn-toggle-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        width: max-content;
    }

    #btn-toggle-nav>div {
        width: 35px;
        height: 3px;
        background-color: var(--second-color);
        border-radius: 3px;
    }

    #div-logo-senac {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #div-logo-senac>a {
        padding-top: 8px;
    }

    #div-route-login {
        display: flex;
        align-items: center;
        justify-content: end;
    }

    #route-login>span {
        display: none;
    }

}

@media (max-width: 500px) {

    nav#navbar-sm {
        top: 70px;
        height: calc(100vh - 70px);
    }

    #btn-toggle-nav>div {
        width: 28px;
        height: 3px;
    }

    li#div-route-login>a {
        padding: 10px 14px;
        font-size: .8rem;
        border: 1px solid #d4d4d4;
    }

    img#logo-senac {
        height: 30px;
    }

}
</style>
