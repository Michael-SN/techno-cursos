<template>
  <div id="app">
    <Header />
    <router-view class="container" />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>
<style>
body {
  margin: 0px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #234;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

img {
  max-width: 100%;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

a.router-link-active {
  color: #4b8;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.25rem;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all 0.35s;
}

@media screen and (min-width: 479px) {
  .content {
    display: grid;
    grid-template-columns: 1fr minmax(200px, 400px);
    grid-gap: 1.875rem;
  }
}
</style>
