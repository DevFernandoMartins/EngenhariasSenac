<template>
    <section id="main-contact">
        <div id="inside-main-contact">
            <p class="text-center">Preencha as informações abaixo, e em breve nós entraremos em contato.</p>
            <p class="text-center">Você também pode entrar em contato enviando um e-mail para <strong>suporte@engenhariassenac.com</strong>.</p>
            <br>
            <form action="" method="post" id="contact-form">
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
                    <label for="student">Você é aluno das Engenharias do Senac?*</label>
                    <select name="student" id="student" @change="VerifyIsStudent()" required>
                        <option value="" disabled selected>Selecione uma opção...</option>
                        <option value="s">Sim</option>
                        <option value="n">Não</option>
                    </select>
                </div>
                <div class="form-control" id="course">
                    <label for="student">Qual o seu curso?*</label>
                    <select name="student" id="student" required>
                        <option value="" disabled selected>Selecione uma opção...</option>
                        <option value="comp">Engenharia de Computação</option>
                        <option value="prod">Engenharia de Produção</option>
                    </select>
                </div>
                <div class="form-control" id="semester">
                    <label for="student">Qual o seu semestre?*</label>
                    <select name="student" id="student" required>
                        <option value="" disabled selected>Selecione uma opção...</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="business-name">Mensagem*</label>
                    <textarea name="business-name" id="business-name" placeholder="Como podemos te ajudar?" rows="4" required></textarea>
                </div>
                <div class="form-control">
                    <input type="submit" value="Enviar">
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        const cellphoneInput = document.getElementById("cellphone");

        cellphoneInput.addEventListener("input", function (event) {
            let value = event.target.value.replace(/\D/g, "");

            // Aplica a máscara
            if (value.length > 11) value = value.slice(0, 11);
            value = value.replace(/^(\d{2})(\d)/, "($1) $2");
            value = value.replace(/(\d{5})(\d)/, "$1-$2");

            event.target.value = value;
        });
    },
    methods: {
        VerifyIsStudent() {
            const divCourse = document.getElementById('course')
            const divSemester = document.getElementById('semester')

            if (document.getElementById('student').value == 's') {
                divCourse.style.display = "block"
                divSemester.style.display = "block"
            } else {
                divCourse.style.display = "none"
                divSemester.style.display = "none"
            }
        }
    }
}
</script>

<style lang="css" scoped>
p {
    margin: 20px 0;
    text-indent: 20px;
}

section#main-contact {
    width: 100%;
    padding: 30px 15px;
}

#inside-main-contact {
    width: 100%;
    margin: auto;
    max-width: 1440px;
    overflow: hidden;
}

#contact-form {
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
.form-control>select,
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

#course,
#semester {
    display: none;
}

@media (max-width: 1000px) {

    #inside-main-contact {
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
        align-items: center;
    }
}
</style>