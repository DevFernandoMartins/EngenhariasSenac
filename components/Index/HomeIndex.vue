<template>
    <section id="picture">
        <div id="inside-picture">
            <h1>10º Semana das Engenharias</h1>
        </div>
    </section>
    <section id="main-home">
        <div id="inside-main-home">
            <div id="countdown"></div>
            <p>Explore as inovações, participe das palestras e se conecte com empresas parceiras em uma semana dedicada
                ao futuro da engenharia!</p>
            <a href="#" class="btn-primary">Saiba mais</a>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        const targetDate = new Date('2024-12-01T19:10:00');

        function updateCountdown() {
            const now = new Date();
            const difference = targetDate - now;

            const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));

            if (daysLeft > 3) {
                document.getElementById('countdown').innerHTML = `Faltam <span>${daysLeft}</span> dias`;
            } else {
                const hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

                document.getElementById('countdown').innerHTML = `Faltam <span>${hoursLeft}</span>:<span>${minutesLeft}</span>:<span>${secondsLeft}</span>`;
            }
        }

        setInterval(updateCountdown, 1000);


    },
}
</script>

<style lang="css" scoped>
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
    max-width: 1600px;
    z-index: 2;
    padding-top: 80px
}

#inside-picture>h1 {
    text-align: center;
    margin: 0 0 15px;
    font-size: 3.5rem;
    letter-spacing: .1rem;
    color: #fff;
    font-weight: 600;
}

#inside-main-home>p {
    color: var(--black-color);
    text-align: center;
    font-weight: 500;
}

section#main-home {
    width: 100%;
    padding: 30px;
    position: relative;
}

div#inside-main-home {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

#countdown {
    font-size: 3rem;
    text-align: center;
    margin: 30px auto 10px;
    max-width: 1280px;
    letter-spacing: .1rem;
    font-weight: 600;
    color: var(--black-color);
}
</style>