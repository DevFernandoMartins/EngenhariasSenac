<template>
  <main id="main">
    <div id="inside-main">
      <div class="space">
        <div id="perfil">
          <div class="user-data">
            <form action="" method="post">
              <div class="mb-3">
                <label for="input-fullname" class="form-label"
                  >Nome Completo</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="input-fullname"
                  name="input-fullname"
                  value="Alexandre Aparecido Neves"
                  disabled
                />
              </div>
              <div class="mb-3">
                <label for="input-fullname" class="form-label"
                  >E-mail Institucional</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="input-fullname"
                  name="input-fullname"
                  value="alexandre.neves@senacsp.edu.br"
                  disabled
                />
              </div>
              <div class="mb-3">
                <label for="input-fullname" class="form-label"
                  >E-mail Pessoal (opcional)</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="input-fullname"
                  name="input-fullname"
                />
                <div class="form-text">
                  Se estiver com o seu e-mail pessoal cadastrado, receberá todas
                  as novidades nele também
                </div>
              </div>
              <div class="options">
                <a
                  href="https://wa.me/5511975669706"
                  target="_blank"
                  class="btn-system btn-secondary"
                  >Falar com o suporte</a
                >
                <input
                  type="submit"
                  class="btn-system btn-primary"
                  value="Salvar alterações"
                />
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

.user-picture > img {
  width: 300px;
  min-width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
}

.user-data {
  width: 100%;
}

@media (max-width: 999px) {
  #perfil {
    flex-direction: column;
  }

  .user-picture {
    text-align: center;
  }

  .user-picture > img {
    margin: 0 auto 20px;
  }
}

@media (max-width: 500px) {
  .user-picture > img {
    width: 250px;
    min-width: 250px;
    max-width: 250px;
    height: 250px;
  }
}
</style>
