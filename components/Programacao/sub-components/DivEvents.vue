<template>
    <section id="schedule-home">
        <div id="inside-schedule-home">
            <h2>{{ title }}</h2>

            <div id="carrossel-control">
                <div id="go-to-left" @click="scrollLeft">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div id="go-to-right" @click="scrollRight">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>

            <div id="schedule-registers">
                <div id="events" ref="eventsContainer">
                    <div class="event" v-for="(event, index) in palestras" :key="index">
                        <div class="event-img">
                            <img :src="event.img" alt="Imagem da palestra">
                        </div>
                        <div class="event-data">
                            <div class="event-local">{{ event.data + ' ' + event.horario + ' / ' + event.sala }}</div>
                            <h3 class="event-title">{{ event.titulo }}</h3>
                            <p class="event-desc">{{ event.descricao }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Palestras from '~/json/Palestras.json';

export default {
    data() {
        return {
            palestras: Palestras
        }
    },
    props: {
        title: {
            type: String,
            required: true
        }
    },
    methods: {
        scrollLeft() {
            const btnGoToLeft = document.getElementById('go-to-left')
            btnGoToLeft.style.pointerEvents = "none";

            const container = this.$refs.eventsContainer;
            const itemWidth = container.querySelector('.event').clientWidth + 15;
            container.scrollBy({ left: -itemWidth, behavior: 'smooth' });

            setTimeout(() => {
                btnGoToLeft.style.pointerEvents = "auto";
            }, 500);

        },
        scrollRight() {
            const btnGoToRigth = document.getElementById('go-to-right')
            btnGoToRigth.style.pointerEvents = "none";

            const container = this.$refs.eventsContainer;
            const itemWidth = container.querySelector('.event').clientWidth + 15;
            container.scrollBy({ left: itemWidth, behavior: 'smooth' });

            setTimeout(() => {
                btnGoToRigth.style.pointerEvents = "auto";
            }, 500);
        }
    }
}
</script>

<style lang="css" scoped>
h2 {
    padding-right: 50px;
}

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
    position: relative;
}

#carrossel-control {
    position: absolute;
    top: 8px;
    right: 0;
    display: flex;
    align-items: center;
    gap: 5px;
}

#carrossel-control>div>i {
    font-size: .8rem;
    opacity: .5;
    cursor: pointer;
    transition: .3s;
    background-color: var(--first-color);
    border-radius: 50%;
    color: var(--second-color);
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#carrossel-control>div>i:hover {
    opacity: 1;
}

#schedule-registers {
    overflow: hidden;
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

.event {
    flex: 0 0 auto;
    width: calc((100% - (15px * 3)) / 4);
    border-radius: 15px;
    background-color: var(--second-color);
    transition: .3s;
    position: relative;
}

.event-img {
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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

.event-local {
    opacity: .5;
    font-size: .9rem;
    margin-bottom: 10px;
}

.event-title {
    margin-bottom: 5px;
}

.event-desc {
    opacity: .6;
    font-size: .8rem
}

@media (max-width: 1000px) {
    .event {
        width: calc((100% - (15px * 2)) / 3);
    }
}

@media (max-width: 800px) {
    .event {
        width: calc((100% - (15px * 1)) / 2);
    }
}

@media (max-width: 550px) {
    .event {
        width: 99%;
    }
}
</style>
