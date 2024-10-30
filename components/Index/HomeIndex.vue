<template>
    <section id="main-home">
        <div id="inside-main-home">
            <div id="countdown" data-aos="fade-up"></div>
            <p data-aos="fade-up">Explore as inovações, participe das palestras e se conecte com empresas parceiras em uma semana dedicada
                ao futuro da engenharia!</p>
            <RouterLink to="/" class="btn btn-primary" data-aos="fade-up">Saiba mais</RouterLink>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        const targetDate = new Date('2024-11-25T19:10:00');

        function updateCountdown() {
            const now = new Date();
            const difference = targetDate - now;

            const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));

            if (daysLeft > 3) {
                document.getElementById('countdown').innerHTML = `Faltam <span>${daysLeft}</span> dias`;
            } else {
                const hoursLeft = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
                const minutesLeft = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
                const secondsLeft = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0');

                document.getElementById('countdown').innerHTML = `Faltam <span>${hoursLeft}</span>:<span>${minutesLeft}</span>:<span>${secondsLeft}</span>`;
            }
        }


        setInterval(updateCountdown, 1000);


    },
}
</script>

<style lang="css" scoped>
#inside-main-home>p {
    color: var(--black-color);
    text-align: center;
    font-weight: 500;
}

section#main-home {
    width: 100%;
    padding: 30px 15px;
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
    font-size: 50px;
    text-align: center;
    margin: 30px auto 10px;
    max-width: 1280px;
    letter-spacing: .1rem;
    font-weight: 600;
    color: var(--black-color);
}

@media (max-width: 500px) {
    #countdown {
        font-size: 35px;
    }
}
</style>