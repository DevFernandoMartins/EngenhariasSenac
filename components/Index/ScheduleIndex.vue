<template>
    <section id="schedule-home">
        <div id="inside-schedule-home">
            <h2>Palestras da 10º Semana das Engenharias</h2>
            <div id="events">
                <div class="event" v-for="(event, index) in 6" :key="index">
                    <div class="event-img">
                        <img src="/public/img/picture_senac_engineer03.jpg" alt="Foto do palestrante">
                    </div>
                    <div class="event-data">
                        <h3>Título da palestra</h3>
                        <div class="event-date">01/12/2024 - 19:10</div>
                        <div class="event-local">Sala E285</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus incidunt voluptatibus adipisci perspiciatis tenetur illo saepe dicta tempore. Eum consectetur molestias voluptas vel esse aliquam quaerat maiores tenetur autem dolores?</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
h2 {
    text-align: center;
    color: var(--second-color);
}

h3 {
    font-size: 2rem;
    letter-spacing: .1px;
    color: var(--black-color);
}

section#schedule-home {
    width: 100%;
    padding: 80px 30px;
    background-color: var(--first-color);
}

#inside-schedule-home {
    width: 100%;
    margin: auto;
    max-width: 930px;
    overflow: hidden;
}

#events {
    width: 100%;
}

.event {
    width: calc(100% - 10px);
    margin: 10px auto 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
    border-radius: 30px;
    margin: 20px 0;
    background-color: var(--second-color);
}

.event-img {
    width: 300px;
    min-width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: black;
    border-radius: 30px;
}

.event-img>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.event-data {
    padding: 15px 40px 15px 20px;
}

.event-date {
    margin: 5px 0;
}
</style>