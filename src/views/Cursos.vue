<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="content">
        <div>
          <h1>{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
        </div>
        <ul>
          <li v-for="curso in api.cursos" :key="curso.id">
            <h2>
              <router-link :to="{ name: 'curso', params: { curso: curso.id } }">
                {{ curso.nome }} - {{ curso.totalAula }} aulas |
                {{ curso.horas }} horas
              </router-link>
            </h2>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/commons/fetchData.js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contato",
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
    this.fetchData("/cursos");
  },
};
</script>

<style>
</style>