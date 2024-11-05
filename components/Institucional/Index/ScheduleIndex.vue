<template>
    <section id="schedule-home">
        <div id="inside-schedule-home">
            <h2 data-aos="fade-up">Palestras da 10º Semana das Engenharias</h2>
            <div id="events">
                <div class="event" v-for="(event, index) in limitedPalestras" :key="index">
                    <div class="event-img">
                        <nuxt-img :src="event.img" alt="Imagem da palestra" />
                    </div>
                    <div class="event-data">
                        <div class="event-local">{{ event.data + ' ' + event.horario + ' / ' + event.sala }}</div>
                        <h3 class="event-title">{{ event.titulo }}</h3>
                        <h4 class="speaker-name">{{ event.nome_palestrante }}</h4>
                        <p class="event-desc">{{ event.descricao }}</p>
                    </div>
                </div>
            </div>
            <NuxtLink to="/programacao" class="btn btn-primary margin-auto">
                Ver programação completa
            </NuxtLink>
        </div>
    </section>
</template>

<script>
import { ref, computed } from 'vue'
import Palestras from '~/public/json/Palestras.json'

export default {
    setup() {
        const palestras = ref(Palestras)
        const limitedPalestras = computed(() => {
            return palestras.value.slice(0, 4)
        })

        return {
            palestras,
            limitedPalestras
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
    align-items: start;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    padding: 5px;
}

#events>.event.finished::after {
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


#events>.event.finished::before {
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
    font-size: .8rem;
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
    font-size: .8rem;
}

.speaker-name {
    opacity: .7;
    font-weight: 600;
    margin-bottom: 5px;
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