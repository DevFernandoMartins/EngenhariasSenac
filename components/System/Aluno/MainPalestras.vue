<template>
    <main id="main">
        <div id="inside-main">
            <div class="form-text">* Atinja 75% de frequência em cada palestra para validar sua participação</div>
            <div class="space" id="events">
                <div class="event" v-for="event in 8">
                    <div class="event-img">
                        <img src="/public/img/no-image.jpg" alt="Imagem da palestra" />
                    </div>
                    <div class="event-data">
                        <div class="event-local">28/11/2024 19h10 - E285</div>
                        <h3 class="event-title">Inteligência Artificial</h3>
                        <h4 class="speaker-name">Fulano de tal</h4>
                        <p class="event-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tenetur
                            obcaecati consequuntur ipsum quo facere. Cumque quod at distinctio, eaque delectus error
                            odit, minus iure nesciunt deleniti temporibus excepturi voluptatibus?</p>
                        <div class="div-progress-bar">
                            <div></div>
                            <span>100%</span>
                        </div>
                        <a href="#" class="btn-system btn-primary text-center width-cem">Emitir Certificado</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<style lang="css" scoped>

#events {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 10px;
}

.event {
    flex: 0 0 auto;
    width: 100%;
    border-radius: 15px;
    background-color: var(--second-color);
    transition: .3s;
    position: relative;
}

.event:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
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
    font-size: .7rem;
}

.speaker-name {
    opacity: .7;
    font-weight: 600;
    margin-bottom: 5px;
}

.div-progress-bar {
    width: 100%;
    height: 15px;
    background-color: rgb(228, 228, 228);
    border-radius: 20px;
    position: relative;
    margin: 10px 0;
}

.div-progress-bar > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(5, 212, 57);
    border-radius: 20px;
    z-index: 2;
}

.div-progress-bar > span {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translate(0,-50%);
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 10px;
    font-size: .7rem;
    font-weight: 700;
    opacity: .8;
    color: var(--black-color);
    z-index: 5;
}

.emit {
    width: 100%;
    margin-top: 10px;
}

.emit.disabled {
    pointer-events: none;
    cursor: default;
    color: gray;
    text-decoration: none;
    opacity: 0.6; 
}

@media (max-width: 600px) {
    #events {
        grid-template-columns: repeat(1, 1fr);
    }
    
}

</style>