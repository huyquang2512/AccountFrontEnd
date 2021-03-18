<template>
<div>
    <div class="tilie">
        <h1>{{ title }}</h1>
    </div>

    <div>
        <table v-if="dataAccount.length > 0" class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Password</th>
                    <th scope="col">Email</th>
                    <th scope="col">address</th>
                    <th scope="col">age</th>
                    <th scope="col">sex</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(account,index) in dataAccount" :key="account.id">
                    <th scope="row">{{index + 1 }}</th>
                    <td>{{ account.username }}</td>
                    <td>{{ account.password }}</td>
                    <td>{{ account.email }}</td>
                    <td>{{ account.address }}</td>
                    <td>{{ account.age }}</td>
                    <td>{{ account.sex }}</td>
                    <td>
                        <nuxt-link :to="`/Account/${account.id}`">
                            <button type="button" class="btn btn-info" style="margin-left: 3%" data-toggle="modal" data-target="#Edit">
                                Edit
                            </button></nuxt-link>
                        <div class="btn btn-danger" @click="deleteAccount(account.id)">
                            Delete
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    props: ["title", "dataAccount"],

    methods: {
        deleteAccount(id) {
            const url = "http://127.0.0.1:8000/api/account/" + id;
            axios.delete(url)
                .then(
                    this.$router.push({
                        path: "/Account/List",
                    })
                )
        },
    },
};
</script>
