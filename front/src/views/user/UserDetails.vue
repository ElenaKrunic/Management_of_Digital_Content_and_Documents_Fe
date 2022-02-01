<template>
<div class="container">
  <div class="col-md-12">
    <div class="card">
      <div class="row">
        <div class="col-12 col-md-4 offset-md-4">
        </div>
      </div>

      <div class="caption-full">
        <h4 class="pull-right"> {{ user.firstname }}</h4>
        <h4> {{ user.lastname }}</h4>
        <p> {{ user.email }} </p>
      </div>
      <div class="ratings">
        <p class="pull-right">
          <v-btn @click="blockUser" class="btn btn-outline-dark"> Block user </v-btn>
        </p>
      </div>
    </div>
  </div>
</div>
    
</template>

<script>
import axios from '../../../axiosConfig'

export default {
    created(){
        this.getUser()
    },
    data(){
        return {
            errorMsg: '',
            loaderColor: "#5cb85c",
            loaderSize: "50px",
            id: this.$route.params.id, 
            user: ''
        }
    },
    
    methods:{
        getUser(){
            axios
            .get('api/user/getUser/' + this.id)
            .then((response) => {
                this.user = response.data
            })
            .catch((error) => {
                console.log(error)
                this.errorMsg = 'Error retriving data'
            })
        },
          blockUser() {
       axios.
            put('/api/user/ban/' + this.id).
            then((response) => {
                this.user = response.data
                alert('blokiran korisnik')
            }).
            catch((error) => {
                console.log(error)
            })
    }
    }
}
</script>


<style scoped>

</style>