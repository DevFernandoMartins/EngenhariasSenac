<template>
  <main id="main">
    <div id="inside-main">
      <div class="space">
        <div id="notes">
          <p>
            Status da avaliação:
            <strong style="color: red">Não iniciada</strong>
          </p>
          <p>Nota média atual: <strong>0,00</strong></p>
          <p>Professores avaliadores: <strong>0</strong></p>
          <p>Colegas avaliadores: <strong>0</strong></p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
#notes {
  width: 100%;
  max-width: 600px;
  margin: auto;
}

p {
  margin-bottom: 20px;
  font-size: 1.1rem;
}
</style>
