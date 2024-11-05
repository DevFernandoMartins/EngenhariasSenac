<template>
    <section id="partners-home">
        <div id="inside-partners-home" data-aos="fade-up">
            <h2>Empresas Parceiras</h2>

            <div id="partners">
                <a v-for="partner in parceiros" :href="partner.link" target="_blank" class="partner" >
                    <div class="partner-img">
                        <nuxt-img :src="partner.img" alt="Logo do parceiro" />
                    </div>
                    <div class="partner-data">
                        <h3>{{ partner.nome }}</h3>
                    </div>
                </a>
            </div>
            <RouterLink to="patrocinar" class="btn btn-primary margin-auto">Quero ser parceiro</RouterLink>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Parceiros from '~/public/json/Parceiros.json';

export default defineComponent({
    data() {
        return {
            parceiros: Parceiros
        }
    }
});
</script>


<style lang="css" scoped>
section#partners-home {
    width: 100%;
    padding: 30px 15px;
    border-top: 30px;
}

#inside-partners-home {
    width: 100%;
    margin: auto;
    max-width: 1440px;
    overflow: hidden;
}

#partners {
    width: calc(100% - 20px);
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 50px 30px;
    margin: 40px 10px 50px;
}

.partner {
    width: 100%;
    overflow: hidden;
    text-decoration: none;
}

.partner-img {
    width: 100%;
}

.partner-img>img {
    width: 100%;
}

.partner-data>h3 {
    text-align: center;
    color: var(--black-color);
    margin-top: 20px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: .1em;
    opacity: .7;
}

@media (max-width: 900px) {
    #partners {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 500px) {
    #partners {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>