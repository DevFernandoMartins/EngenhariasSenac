<template>
    <section id="about-home">
        <div id="inside-about-home">
            <div class="img">
                <img src="/public/img/picture_senac_engineer07.jpg"
                    alt="Foto da Laboratório de Design Industrial do Centro Universitário Senac Santo Amaro">
            </div>

            <div class="text-about">
                <h2>Sobre a Semana das Engenharias</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ut molestiae quo. Nam harum
                    mollitia labore? Culpa quo quaerat animi officiis provident laudantium? Molestias ipsam aut adipisci
                    eum deleniti saepe.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ut molestiae quo. Nam harum
                    mollitia labore? Culpa quo quaerat animi officiis provident laudantium? Molestias ipsam aut adipisci
                    eum deleniti saepe.</p>
                <RouterLink to="programacao" class="btn-primary">Ver programação</RouterLink>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
p {
    margin: 20px 0;
    text-indent: 20px;
}
section#about-home {
    width: 100%;
    padding: 30px 15px;
}

#inside-about-home {
    width: 100%;
    margin: auto;
    max-width: 1440px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    align-items: center;
}

.img {
    width: 100%;
    border-radius: 30px;
    overflow: hidden;
    height: 500px;
}

.img>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 1000px) {

    #inside-about-home {
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
        align-items: center;
    }
}
</style>