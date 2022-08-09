<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="content">
        <div class="content-texts">
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link tag="button" to="/cursos" class="btn-cursos"
            >Cursos</router-link
          >
          <div class="reviews">
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="content-img">
          <img src="@/assets/3dobject.png" alt="Computer" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/commons/fetchData.js";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  mixins: [fetchData],
  data() {
    return {
      //
    };
  },
  methods: {
    //
  },
  created() {
    this.fetchData("/home");
  },
};
</script>

<style scoped>
.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: #fff;
  padding: 0.9375rem 2.5rem;
  font-size: 1rem;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
}
</style>