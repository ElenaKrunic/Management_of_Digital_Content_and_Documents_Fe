<template>
    <form @submit.prevent="addBuyer">
        <div style="width: 50%; background:white; padding: 5%; border-radius:2%;">
            <div class="mb-3">
                <label class="form-label" for="firstname">First name:</label>
                <input class="form-control" type="text" id="firstName" v-model="formData.firstname" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="lastname"> Last name:</label>
                <input class="form-control" type="text" id="lastName" v-model="formData.lastname" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="userName">Username:</label>
                <input class="form-control" type="text" id="userName" v-model="formData.username" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="password">Password:</label>
                <input class="form-control" type="password" id="password" v-model="formData.pass" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="phone">Phone number:</label>
                <input class="form-control" type="text" id="phone" v-model="formData.phone" />
            </div>
             <div class="mb-3">
                <label class="form-label" for="operatesSince">Store operates since:</label>
                <input class="form-control" type="text" id="operatesSince" v-model="formData.operatesSince" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="storeName">Name of the store:</label>
                <input class="form-control" type="text" id="storeName" v-model="formData.storeName" />
            </div>
             <div class="mb-3">
                <label class="form-label" for="address">Store address:</label>
                <input class="form-control" type="text" id="address" v-model="formData.address" />
            </div>
             <div class="mb-3">
                <label class="form-label" for="email">Email:</label>
                <input class="form-control" type="text" id="email" v-model="formData.email" />
            </div>
            <button class="btn btn-primary"> Register</button>
        </div>
    </form>
</template>

<script>
import axios from '../../../axiosConfig'

export default {
    name: 'RegisterBuyer',
    crated() {
        let token = localStorage.getItem('token')
        axios.defaults.headers['Authorization'] = `${token}`
    },
    data() {
        return {
            formData: {
                firstname: '',
                lastname: '', 
                username: '', 
                pass: '',
                address:'', 
                phone: '',
                email: '',
                operatesSince: '',
                storeName: ''
            },
            errorMsg: '',
            jwt: localStorage.getItem('token')
        }
    },

    methods: {
        addBuyer() {
            axios.post('/api/user/registerSeller', this.formData)
            .then(response => {
                console.log(response)
                alert('Uspjesno registrovan prodavac')
                this.$router.push({ path: '/login' })
            })
            .catch(error => {
                alert('Korisnik vec postoji ili niste unijeli validne podatke!')
                console.log(error)
            })
        }
    }
}



</script>

<style></style>
