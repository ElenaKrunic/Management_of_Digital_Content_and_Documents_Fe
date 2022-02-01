<template>
    <form @submit.prevent="changeBuyerData">
        <div style="width: 50%; background:white; padding: 5%; border-radius:2%;">
            <div class="mb-3">
                <label class="form-label" for="pass">Password:</label>                
                <input class="form-control" type="text" id="pass" v-model="myProfile.pass" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="address">Address:</label>
                 <input class="form-control" type="text" id="address" v-model="myProfile.address" /> 
            </div>
            <div class="mb-3">
                <label class="form-label" for="firstname">Firstname:</label>
                <input class="form-control" type="text" id="firstname" v-model="myProfile.firstname" /> 
            </div>
            <div class="mb-3">
                <label class="form-label" for="lastname">Lastname:</label>
                <input class="form-control" type="text" id="lastname" v-model="myProfile.lastname" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="email">Email:</label>
                <input disabled="disabled" class="form-control" type="email" id="email" v-model="myProfile.email" /> 
            </div>
            <button class="btn btn-primary"> Update information </button>
        </div>
    </form>
</template>

<script>
import axios from '../../../axiosConfig'

export default {
    name : 'ChangeBuyer',
    created() {
        this.getMyBuyerProfile();
    },
    data() {
        return {
            myProfile: {}
        }
    },
    methods: {
        getMyBuyerProfile() {
            axios.
            get('/api/user/myBuyerProfile').
            then((response) => {
                this.myProfile = response.data
                //alert('ok')
            }).
            catch((error) => {
                console.log(error)
            })
        },
        changeBuyerData() {
            axios
            .put('api/user/changeBuyerPassword', this.myProfile)
            .then((response) => {
                this.response = this.myProfile
                console.log('response je ' + response)
                alert('ok izmjena')
            }).catch((error) => {
                console.log(this.myProfile)
                console.log(error)
            })
        }

    }
}
</script>