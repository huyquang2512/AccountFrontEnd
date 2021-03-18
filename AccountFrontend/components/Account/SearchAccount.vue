<template>
<nav class="navbar navbar-light bg-light">
    <div class="tilie">
        <h1>{{ title }}</h1>
    </div>

    <div class="form-inline">
        <input class="form-control mr-sm-2" id="search" type="search" placeholder="Search" aria-label="Search" v-model="searchString" />
        <button class="btn btn-outline-success my-2 my-sm-0" @click="search()">
            Search
        </button>
    </div>
</nav>
</template>

<script>
import axios from "axios";
export default {
    props: ["title"],
    data() {
        return {
            searchString: "",
        }
    },
    methods: {
        search() {
            axios.get("http://127.0.0.1:8000/api/search/" + this.searchString).then((response) => {
                this.$emit("dataAccount", response.data);
            });
        },
    }
}
</script>
