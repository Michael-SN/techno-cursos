export default {
  data() {
    return {
      api: null,
      loading: true,
    };
  },
  methods: {
    fetchData(param) {
      this.loading = true;
      this.api = null;
      fetch(`http://localhost:3000${param}`)
        .then((res) => res.json())
        .then((respJson) => {
          setTimeout(() => {
            this.api = respJson;
            this.loading = false;
          }, 1000);
        });
    },
  },
};
