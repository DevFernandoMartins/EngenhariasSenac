<template>
  <main id="main">
    <div id="inside-main">
      <div class="space">
        <div id="input-code-group">
          <form action="" method="post">
            <div class="mb-3">
              <label for="input-code" class="form-label"
                >Informe o código do grupo</label
              >
              <input
                type="text"
                class="form-control"
                id="input-code"
                name="codigoGrupo"
                placeholder="X0X0X0"
                @input="applyDecimalMask"
              />
            </div>
            <br />
            <h3>Informe as notas para cada critério de avaliação abaixo:</h3>
            <br />
            <div id="check-points">
              <div class="mb-3" v-for="(label, id) in labels" :key="id">
                <label :for="`input-${id}`" class="form-label">{{
                  label
                }}</label>
                <input
                  type="text"
                  class="form-control"
                  :id="`input-${id}`"
                  :name="`nota${id.charAt(0).toUpperCase() + id.slice(1)}`"
                  placeholder="0,00"
                  @input="applyDecimalMask"
                />
              </div>
            </div>
            <div class="options">
              <input
                type="submit"
                class="btn-system btn-primary"
                value="Avaliar grupo"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      labels: {
        intro: "Introdução ao tema desenvolvido",
        objetivos: "Apresentação clara dos objetivos",
        metodologia: "Apresentação da metodologia desenvolvida",
        resultados: "Resultados obtidos no projeto",
        conclusoes: "Discussões e conclusões",
        apresentacao: "Apresentação pública do grupo",
        tempo: "Cumprimento do tempo de apresentação",
      },
    };
  },
};
</script>

<style lang="css" scoped>
#input-code-group {
  width: 100%;
  max-width: 600px;
  margin: auto;
}

#check-points {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
  gap: 10px;
}

@media (max-width: 750px) {
  #check-points {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
