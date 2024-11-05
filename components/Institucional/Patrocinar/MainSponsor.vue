<template>
    <section id="main-sponsor">
        <div id="inside-main-sponsor">
            <p class="text-center">Torne-se parceiro da semana das engenharias do Centro Universitário Senac Santo
                Amaro.</p>
            <p class="text-center">Preencha as informações abaixo, e em breve nós entraremos em contato.</p>
            <br>
            <form action="" method="post" id="sponsor-form">
                <div class="form-control">
                    <label for="fullname">Seu nome completo*</label>
                    <input type="text" name="fullname" id="fullname" required>
                </div>
                <div class="form-control">
                    <label for="email">Seu melhor e-mail*</label>
                    <input type="email" name="email" id="email" placeholder="fulano@gmail.com" required>
                </div>
                <div class="form-control">
                    <label for="cellphone">Whatsapp*</label>
                    <input type="text" name="cellphone" id="cellphone" placeholder="(11) 98765-4321" required>
                </div>
                <div class="form-control">
                    <label for="business-name">Nome da empresa*</label>
                    <input type="text" name="business-name" id="business-name" required>
                </div>
                <div class="form-control">
                    <label for="cnpj">CNPJ da empresa*</label>
                    <input type="text" name="cnpj" id="cnpj" placeholder="XX.XXX.XXX/XXXX-XX" required>
                </div>
                <div class="form-control">
                    <label for="business-name">Sobre a empresa*</label>
                    <textarea name="business-name" id="business-name" placeholder="Conte um pouco sobre a empresa"
                        rows="4" required></textarea>
                </div>
                <div class="form-control">
                    <input type="submit" value="Enviar">
                </div>
            </form>
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    mounted() {
        const cellphoneInput = document.getElementById("cellphone") as HTMLInputElement | null;
        const cnpjInput = document.getElementById("cnpj") as HTMLInputElement | null;

        if (cellphoneInput) {
            cellphoneInput.addEventListener("input", (event: Event) => {
                const target = event.target as HTMLInputElement;
                let value = target.value.replace(/\D/g, "");

                // Aplica a máscara
                if (value.length > 11) value = value.slice(0, 11);
                value = value.replace(/^(\d{2})(\d)/, "($1) $2");
                value = value.replace(/(\d{5})(\d)/, "$1-$2");

                target.value = value;
            });
        }

        if (cnpjInput) {
            cnpjInput.addEventListener("input", (event: Event) => {
                const target = event.target as HTMLInputElement;
                let value = target.value.replace(/\D/g, "");

                // Aplica a máscara
                if (value.length > 14) value = value.slice(0, 14);
                value = value.replace(/^(\d{2})(\d)/, "$1.$2");
                value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
                value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
                value = value.replace(/(\d{4})(\d)/, "$1-$2");

                target.value = value;
            });
        }
    }
});
</script>

<style lang="css" scoped>
p {
    margin: 20px 0;
    text-indent: 20px;
}

section#main-sponsor {
    width: 100%;
    padding: 30px 15px;
}

#inside-main-sponsor {
    width: 100%;
    margin: auto;
    max-width: 1440px;
    overflow: hidden;
}

#sponsor-form {
    width: 100%;
    max-width: 600px;
    margin: auto;
}

.form-control {
    width: 100%;
    display: block;
    margin: 20px auto;
}

.form-control>label {
    display: block;
    width: 100%;
    margin-bottom: 5px;
    font-size: .9rem;
    opacity: .9;
}

.form-control>input,
.form-control>textarea {
    display: block;
    width: 100%;
    padding: 10px;
}

.form-control>input[type="submit"] {
    background-color: var(--first-color);
    color: var(--second-color);
    cursor: pointer;
}

@media (max-width: 1000px) {

    #inside-main-sponsor {
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
        align-items: center;
    }
}
</style>