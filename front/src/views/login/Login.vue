<template>
    <form @submit.prevent="logIn">
        <div style="width: 50%; background:white; padding: 5%; border-radius:2%;">
            <div class="mb-3" >
                <label for="username" class="form-label"> Username</label>
                <input type="text" class="form-control" id="username" aria-describedby="emailHelp" v-model="formData.username">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label"> Password</label>
                <input type="password" class="form-control" id="password" v-model="formData.password">
            </div>
            <button type="submit" class="btn btn-primary">Log in</button>
            &nbsp;&nbsp;&nbsp;
            <br/>
            <br/>
            <router-link :to="'/registerBuyer'"><a> Register buyer </a></router-link>
            &nbsp;&nbsp;&nbsp;
            <br/>
            <router-link :to="'/registerSeller'"><a> Register seller </a></router-link>
        </div>
    </form>
</template>

<script>
import axios from '../../../axiosConfig'

export default {
    name: "Login",
    data() {
        return {
            formData : {
                username: "",
                password: ""
            },
        }
    },
    methods: {
        async logIn() {
            await axios
            .post('/api/user/login', this.formData)
            .then((response) => {
                localStorage.setItem('token', response.data)
                //console.log(response.data + ' token')
                //alert('Hello ' + this.formData.username)
                this.$router.push({ path : '/store'})
            })
            .catch((error) => {
                console.log(error)
                alert('ne valjaju podaci')
            })
        }
    }
}

</script>

<style></style>