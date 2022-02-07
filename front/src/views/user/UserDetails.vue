<template>
<div class="container">
  <div class="col-md-12">
    <div class="card">
      <div class="row">
        <div class="col-12 col-md-4 offset-md-4">
        </div>
      </div>

      <div class="caption-full">
        <p style="text-align:center"> {{ user.firstname }}</p>
        <p style="text-align:center"> {{ user.lastname }}</p>
        <p style="text-align:center"> {{ user.username }} </p>
        <p style="text-align:center"> {{ user.address }} </p>
        <p style="text-align:center"> {{ user.email }} </p>
      </div>
          
      <div class="ratings" style="text-align:center">
         <button class="btn btn-success pull-right" @click="blockUser()">
            Block user
          </button>
      </div>
      <br>
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
                alert('This user is banned from the system!')
                this.$router.push('/login')
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