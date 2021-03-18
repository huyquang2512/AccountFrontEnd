<template>
  <nav class="navbar navbar-light bg-light">
    <div class="tilie">
      <h1>{{ title }}</h1>
    </div>

    <div class="form-inline">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="searchPhrase"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" @click="search()">
        Search
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["title"],

  data() {
    return {
      searchPhrase: "",
    };
  },

  /**
   * Send searchPhrase to Search Report Page
   */
  methods: {
    search() {
      this.$emit("search", this.searchPhrase);
    },
  },
};
</script>
