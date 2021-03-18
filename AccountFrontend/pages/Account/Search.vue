<template>
<div>
<search-account  @dataAccount="getData($event)" :title="title"></search-account>
<table-account :dataAccount="dataAccount"></table-account>
</div>
</template>

<script>
import SearchAccount from "../../components/Account/SearchAccount.vue";
import TableAccount from '../../components/Account/Table.vue';
export default {
    data() {
        return {
            dataAccount: [],
            title: "Search"
        }
    },
    components: {
        SearchAccount,
        TableAccount
    },
    methods: {
        getData(data) {
            this.dataAccount = data;
        },
    },
}
</script>
