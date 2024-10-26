<template>
<section id="partners-home">
    <div id="inside-partners-home">
        <h2>Empresas Parceiras</h2>

        <div id="partners">
            <a href="#" class="partner" v-for="partner in 3">
                <div class="partner-img">
                    <img src="/public/img/logo-engenharias_senac-azul.png" alt="Logo do parceiro">
                </div>
                <div class="partner-data">
                    <h3>Senac Santo Amaro</h3>
                </div>
            </a>
        </div>
    </div>
</section>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
section#partners-home {
    width: 100%;
    padding: 30px;
    border-top: 30px;
}

#inside-partners-home {
    width: 100%;
    margin: auto;
    max-width: 1600px;
    overflow: hidden;
}

#partners {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 20px;
}

.partner {
    width: 100%;
    overflow: hidden;
    text-decoration: none;
}

.partner-img {
    width: 100%;
}

.partner-img > img {
    width: 100%;
}

.partner-data > h3 {
    text-align: center;
    color: var(--black-color);
    margin-top: 20px;
}
</style>