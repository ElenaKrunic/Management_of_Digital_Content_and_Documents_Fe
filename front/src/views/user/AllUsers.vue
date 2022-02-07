<template>
<div class="container pull-right">

   <div class="row" >
    <appUser v-for="user in users" :item="user" :key="user.id" :displayList="displayList"></appUser>
  </div>
</div>
</template>

<script>
import axios from '../../../axiosConfig'
import User from '../user/User.vue'

export default {
    props: ['user'],
    data() {
        return {
            loaderColor: "#5cb85c",
            loaderSize: "50px",
            displayList: false,
            users: [],
            indexes : []
        }
    },
    created() {
        this.getAllUsers()
    },
    components: {
        appUser : User
    },

    methods: {
            getAllUsers() {
                //http://localhost:8085/api/user/getUsers
                axios.get('api/user/getUsers')
                .then((response) => {
                    this.users = response.data
                    //alert('ok')
                }).catch((error) => {
                    //alert('nije ok')
                    console.log(error)
                })
            },
        }

}

</script>

<style scoped>
.loadingItem {
  align-items: center;
  justify-content: center;
  display: flex;
}

.action-panel {
  margin-bottom: 10px;
  margin-right: 5px;
}</style>