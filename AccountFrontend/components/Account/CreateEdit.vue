<template>
<div class="container-fluid">
    <div class="tilie">
        <h1>{{ title }}</h1>
    </div>

    <div class="container-fluid">
        <div class="form-group" v-if="title == 'Edit Account'">
            <label>UserName:</label>
            <input type="text" class="form-control" v-model="form.username" disabled />
        </div>
    </div>
    <div class="container-fluid">
        <div class="form-group" v-if="title == 'Create Account'">
            <label>UserName:</label>
            <input type="text" class="form-control" v-model="form.username" />
        </div>
    </div>
    <div class="container-fluid">
        <div class="form-group">
            <label>Password:</label>
            <input type="text" class="form-control" v-model="form.password" />
        </div>
    </div>

    <div class="container-fluid">
        <div class="form-group">
            <label>Email:</label>
            <input type="text" class="form-control" v-model="form.email" />
        </div>
    </div>
    <div class="container-fluid">
        <div class="form-group">
            <label>Address:</label>
            <input type="text" class="form-control" v-model="form.address" />
        </div>
    </div>
    <div class="container-fluid">
        <div class="form-group">
            <label>Age:</label>
            <input type="text" class="form-control" v-model="form.age" />
        </div>
    </div>
    <div class="container-fluid">
        <div class="form-group">
            <label>Sex:</label>
            <input type="text" class="form-control" v-model="form.sex" />
        </div>
    </div>
    <div style="margin-left: 47%">
        <button type="button" v-if="title == 'Edit Account'" id="a" class="btn btn-primary" @click="updateAccount()">
            Edit
        </button>
    </div>

    <div style="margin-left: 47%">
        <button type="button" v-if="title == 'Create Account'" id="a" class="btn btn-primary" @click="createAccount()">
            Create
        </button>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    props: ["title"],

    data() {
        return {
            form: {
                username: "",
                password: "",
                address: "",
                age: "",
                sex: "",
                email: "",
            },
            errors: [],
        };
    },

    /**
     * Call ListData Function
     */
    mounted() {
        if (this.$route.params.id != null) {
            this.getDetail();
        }
    },

    methods: {
        /**
         * Get Team By ID
         */
        getDetail() {
            axios({
                    method: "GET",
                    url: `http://127.0.0.1:8000/api/account/` + this.$route.params.id,
                })
                .then((res) => {
                    this.form = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        /**
         * Update Team
         */
        updateAccount() {
            this.errors = [];
            this.validate();
            console.log(this.error)
            if (this.errors.length > 0) {
                alert(this.errors)
            } else {
                axios.put("http://127.0.0.1:8000/api/account/update/" + this.$route.params.id, this.form);
                console.log(this.$route.params.id)
                this.$router.push({
                    path: "/Account/List",
                });
            }
        },

        /**
         * Create Team
         */
        createAccount() {
            this.errors = [];
            this.validate();
            console.log(this.error)
            if (this.errors.length > 0) {
                alert(this.errors)
            } else {
                axios.post("http://127.0.0.1:8000/api/insert", this.form);
                this.$router.push({
                    path: "/Account/List",
                });
            }
        },
        validate() {
            if (this.form.username = "") {
                this.errors.push("Không Được Để Trống UserName")
            }
            if (this.form.password = "") {
                this.errors.push("Không Được Để Trống Password")
            }
            if (this.form.email = "") {
                this.errors.push("Không Được Để Trống Email")
            }
            if (this.form.address = "") {
                this.errors.push("Không Được Để Trống Address")
            }
            if (this.form.age = "") {
                this.errors.push("Không Được Để Trống Age")
            }
            if (this.form.sex = "") {
                this.errors.push("Không Được Để Trống Sex")
            }
        }
    },
};
</script>
