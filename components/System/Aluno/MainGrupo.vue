<template>
    <main id="main">
        <div id="inside-main">
            <div class="space">
                <div id="perfil">
                    <div class="user-data">
                        <form action="" method="post">
                            <div class="mb-3">
                                <label for="input-fullname" class="form-label">Nome do grupo</label>
                                <input type="text" class="form-control" id="input-fullname" name="input-fullname"
                                    value="Smoke" disabled>
                            </div>
                            <div class="mb-3">
                                <label for="input-fullname" class="form-label">Código do Grupo</label>
                                <input type="text" class="form-control" id="input-fullname" name="input-fullname"
                                    value="W2F1Y3" disabled>
                            </div>
                            <div class="mb-3">
                                <label for="input-fullname" class="form-label">Líder</label>
                                <input type="text" class="form-control" id="input-fullname" name="input-fullname"
                                    value="Rafael Pequino Freire" disabled>
                            </div>
                            <div class="mb-3">
                                <label for="input-fullname" class="form-label">Integrantes</label>
                                <input type="text" class="form-control" id="input-fullname" name="input-fullname"
                                    value="André Richard" disabled>
                                <input type="text" class="form-control" id="input-fullname" name="input-fullname"
                                    value="Fernando Martins" disabled>
                                <input type="text" class="form-control" id="input-fullname" name="input-fullname"
                                    value="Gustavo Nathan" disabled>
                                <input type="text" class="form-control" id="input-fullname" name="input-fullname"
                                    value="Higor Cabral" disabled>
                                <input type="text" class="form-control" id="input-fullname" name="input-fullname"
                                    value="Isabela Marques" disabled>
                                <input type="text" class="form-control" id="input-fullname" name="input-fullname"
                                    value="Matheus Roman" disabled>
                                <input type="text" class="form-control" id="input-fullname" name="input-fullname"
                                    value="Pablo Cremm" disabled>
                            </div>
                            <br>
                            <div class="form-text">Está faltando algum integrante? Envie o código do grupo e peça para
                                que se cadastre</div>
                            <br>
                            <div class="form-text">* Para alterar dados bloqueados, entre em contato com o suporte</div>
                            <div class="options">
                                <a href="wa.me/+5511975669706" class="btn-system btn-secondary">Falar com o suporte</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="css" scoped>
#perfil {
  width: 100%;
  max-width: 600px;
  display: flex;
  gap: 30px;
  margin: auto;
}
</style>