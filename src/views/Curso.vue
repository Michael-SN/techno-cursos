<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="content">
        <div class="content-box">
          <h1>{{ api.nome }}</h1>
          <p>{{ api.descricao }}</p>

          <h2>Aulas</h2>
          <ul class="aulas">
            <li v-for="aula in api.aulas" :key="aula.id">
              <router-link :to="{ name: 'aula', params: { aula: aula.id } }">
                {{ aula.nome }}
              </router-link>
            </li>
          </ul>
        </div>
        <router-view class="content-dynamic" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/commons/fetchData.js";
import PageLoading from "@/components/PageLoading.vue";
export default {
  components: { PageLoading },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Curso",
  props: ["curso"],
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
    this.fetchData(`/curso/${this.curso}`);
  },
};
</script>

<style>
.aulas li a {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 1.25rem;
  margin-bottom: 0.625rem;
  border-radius: 4px;
}

.aulas li a.router-link-active {
  background: #4b8;
  color: #fff;
}
</style>