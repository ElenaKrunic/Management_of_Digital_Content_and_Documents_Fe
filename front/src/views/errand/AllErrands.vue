<template>
<div class="container pull-right">

   <div class="row" >
    <appErrandItem v-for="errand in errands" :item="errand" :key="errand.id" :displayList="displayList"></appErrandItem>
  </div>
</div>
</template>

<script>
import axios from '../../../axiosConfig'
import ErrandItem from '../errand/ErrandItem.vue'

export default {
    props: ['errand'],
    data() {
        return {
            loaderColor: "#5cb85c",
            loaderSize: "50px",
            displayList: false,
            errands: [],
            indexes : []
        }
    },
    created() {
        this.getAllErrands()
    },
    components: {
        appErrandItem : ErrandItem
    },

    methods: {
            getAllErrands() {
                //http://localhost:8085/api/user/getUsers
                axios.get('api/errands/getErrands')
                .then((response) => {
                    this.errands = response.data
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
