<template>
    <section id="schedule-home">
        <div id="inside-schedule-home">
            <h2 data-aos="fade-up">Palestras da 10º Semana das Engenharias</h2>
            <div id="events">
                <div class="event" v-for="(event, index) in 4" :key="index" data-aos="fade-up">
                    <div class="event-img">
                        <img src="/public/img/picture_senac_engineer03.jpg" alt="Foto do palestrante">
                    </div>
                    <div class="event-data">
                        <div class="event-local">01/12/2024 19:10 / Sala E285</div>
                        <h3>Título da palestra</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus incidunt voluptatibus
                            adipisci.</p>
                    </div>
                </div>
            </div>
            <RouterLink to="programacao" class="btn btn-primary margin-auto">Ver programação completa</RouterLink>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
p {
    font-size: .9rem;
    opacity: .8;
}

section#schedule-home {
    width: 100%;
    padding: 30px 15px;
}

#inside-schedule-home {
    width: 100%;
    margin: auto;
    max-width: 1440px;
    overflow: hidden;
}

#events {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    padding: 5px;
}

#events>.event:first-child::after {
    content: 'Finalizada';
    position: absolute;
    width: 100%;
    height: 30px;
    top: 0;
    left: 0;
    background-color: rgba(255, 0, 0, 0.578);
    color: white;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: bold;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}


#events>.event:first-child::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.43);
    z-index: 10;
}

.event {
    width: 100%;
    overflow: hidden;
    border-radius: 15px;
    background-color: var(--second-color);
    transition: .3s;
    position: relative;
}

.event:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.event-img {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: black;
    border-radius: 15px;
    transition: .3s;
}

.event:hover>.event-img {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.event-img>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.event-data {
    padding: 15px 10px;
}

.event-data>h3 {
    margin-bottom: 5px;
}

.event-local {
    opacity: .7;
    font-size: .8rem;
    margin-bottom: 10px
}

.btn-more>a {
    display: block;
    width: 100%;
    color: var(--second-color);
    background-color: var(--first-color);
    text-align: center;
    padding: 8px;
    border-radius: 15px;
    text-decoration: none;
    opacity: .8;
    font-size: .8rem;
    transition: .3s;
}

.event:hover>.btn-more>a {
    opacity: 1;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

@media (max-width: 900px) {
    #events {
        grid-template-columns: repeat(2, 1fr);
    }

}

@media (max-width: 600px) {
    #events {
        grid-template-columns: repeat(1, 1fr);
    }

}
</style>