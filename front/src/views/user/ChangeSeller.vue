<template>
    <form @submit.prevent="changeSellerData">
        <div style="width: 50%; background:white; padding: 5%; border-radius:2%;">
            <div class="mb-3">
                <label class="form-label" for="pass">Password:</label>                
                <input class="form-control" type="password" id="pass" v-model="myProfile.pass" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="address">Address:</label>
                 <input class="form-control" type="text" id="address" v-model="myProfile.address" /> 
            </div>
            <div class="mb-3">
                <label class="form-label" for="firstname"> First name:</label>
                <input class="form-control" type="text" id="firstname" v-model="myProfile.firstname" /> 
            </div>
            <div class="mb-3">
                <label class="form-label" for="lastname"> Last name:</label>
                <input class="form-control" type="text" id="lastname" v-model="myProfile.lastname" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="email"> Email:</label>
                <input disabled="disabled" class="form-control" type="email" id="email" v-model="myProfile.email" /> 
            </div>
            <div class="mb-3">
                <label class="form-label" for="email"> Name of the store:</label>
                <input disabled="disabled" class="form-control" type="text" id="storeName" v-model="myProfile.storeName" /> 
            </div>
            <button class="btn btn-primary"> Save changes </button>
        </div>
    </form>
</template>

<script>
import axios from '../../../axiosConfig'

export default {
    name : 'ChangeSeller',
    created() {
        this.getMySellerProfile();
    },
    data() {
        return {
            myProfile: {}
        }
    },
    methods: {
        getMySellerProfile() {
            axios.
            get('/api/user/mySellerProfile').
            then((response) => {
                this.myProfile = response.data
                //alert('ok')
            }).
            catch((error) => {
                console.log(error)
            })
        },
        changeSellerData() {
            axios
            .put('api/user/changeSellerPassword', this.myProfile)
            .then((response) => {
                console.log('response je ' + response)
                alert('You have changed user information successfully')
                //alert('ok izmjena')
            }).catch((error) => {
                console.log(error)
            })
        }

    }
}
</script>