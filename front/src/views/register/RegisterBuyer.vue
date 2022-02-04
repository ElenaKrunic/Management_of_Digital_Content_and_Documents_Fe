<template>
    <form @submit.prevent="addBuyer">
        <div style="width: 50%; background:white; padding: 5%; border-radius:2%;">
            <div class="mb-3">
                <label class="form-label" for="firstName">Име:</label>
                <input class="form-control" type="text" id="firstName" v-model="formData.firstName" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="lastName">Презиме:</label>
                <input class="form-control" type="text" id="lastName" v-model="formData.lastName" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="userName">Корисничко име:</label>
                <input class="form-control" type="text" id="userName" v-model="formData.username" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="password">Шифра:</label>
                <input class="form-control" type="password" id="password" v-model="formData.pass" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="phone">Број телефона:</label>
                <input class="form-control" type="text" id="phone" v-model="formData.phone" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="email">Адреса електронске поште:</label>
                <input class="form-control" type="text" id="email" v-model="formData.email" />
            </div>
            <button class="btn btn-primary">Региструј се</button>
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
                email: ''
            },
            errorMsg: '',
            jwt: localStorage.getItem('token')
        }
    },

    methods: {
        addBuyer() {
            axios.post('/api/user/registerBuyer', this.formData)
            .then(response => {
                console.log(response)
                alert('Uspjesno registrovan kupac')
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
