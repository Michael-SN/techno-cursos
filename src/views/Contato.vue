<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h1>{{ api.titulo }}</h1>
        <p>{{ api.descricao }}</p>
        <ul>
          <li v-for="(value, key) in api.contato" :key="key">
            <strong> {{ key }}: </strong> {{ value }}
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
    this.fetchData("/contato");
  },
};
</script>

<style scoped>
ul li + li {
  margin-top: 0.8rem;
}
ul li > strong {
  text-transform: capitalize;
}
</style>