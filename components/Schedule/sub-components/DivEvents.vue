<template>
    <section id="schedule-home">
        <div id="inside-schedule-home">
            <h2>{{ title }}</h2>
            <div id="schedule-registers">
                <div id="go-to-left" @click="scrollLeft">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div id="events" ref="eventsContainer">
                    <div class="event" v-for="(event, index) in 12" :key="index">
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
                <div id="go-to-right" @click="scrollRight">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
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
    methods: {
        scrollLeft() {
            const container = this.$refs.eventsContainer;
            const itemWidth = container.querySelector('.event').clientWidth + 15;
            container.scrollBy({ left: -itemWidth, behavior: 'smooth' }); 
        },
        scrollRight() {
            const container = this.$refs.eventsContainer;
            const itemWidth = container.querySelector('.event').clientWidth + 15;
            container.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
    }
}
</script>

<style lang="css" scoped>
p {
    font-size: .9rem;
    opacity: .8;
}

section#schedule-home {
    width: 100%;
    padding: 30px;
}

#inside-schedule-home {
    width: 100%;
    margin: auto;
    max-width: 1440px;
}

#schedule-registers {
    overflow: hidden;
    display: grid;
    grid-template-columns: 30px auto 30px;
    align-items: center;
}

#events {
    display: flex;
    flex-wrap: nowrap;
    gap: 15px;
    align-items: center;
    padding: 5px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    overflow-y: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

#events::-webkit-scrollbar {
    display: none;
}

#go-to-right {
    display: flex;
    align-items: center;
    justify-content: end;
}

.event {
    flex: 0 0 auto;
    width: 100%;
    max-width: 300px;
    border-radius: 15px;
    background-color: var(--second-color);
    transition: .3s;
    position: relative;
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

.event:hover > .event-img {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.event-img > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.event-data {
    padding: 15px 10px;
}

.event-local {
    opacity: .5;
    font-size: .9rem;
    margin-bottom: 10px;
}

.fa-solid {
    font-size: 1.6rem;
    opacity: .5;
    cursor: pointer;
    transition: .3s;
}

.fa-solid:hover {
    opacity: 1;
}

@media (max-width: 1200px) {
    .event {
        max-width: 250px;
    }
}

@media (max-width: 650px) {
    .event {
        max-width: 100%;
    }
}
</style>
