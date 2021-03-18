<template>
<div class="container-fluid">
    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="mr-3">
            <nuxt-link class="btn btn-info" to="/Account/New" style="width: 70px">New</nuxt-link>
        </div>
         <div class="mr-3">
            <nuxt-link class="btn btn-info" to="/Account/Search" style="width: 70px">Search</nuxt-link>
        </div>
    </div>
    <table-account :dataAccount="dataAccount" :title="title"></table-account>
</div>
</template>

<script>
import axios from "axios";
import TableAccount from '../../components/Account/Table.vue';

export default {
    components: {
        TableAccount
    },

    data() {
        return {
            dataAccount: [],
            title: "List Account",
        };
    },

    /**
     * Call listData Function
     */
    mounted() {
        this.getDetail();
    },

    methods: {
        /**
         * Get All Team
         */
        getDetail() {
            axios({
                    method: "GET",
                    url: "http://127.0.0.1:8000/api/account",
                    data: null,
                })
                .then((res) => {
                    this.dataAccount = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>
