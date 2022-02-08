<template>
<div class="container pull-right">

    <div class="row action-panel">
        <button v-on:click="indexingErrands()" class="btn btn-outline-dark"> Index all your orders </button>
        <p></p>    
    </div>  

   <div class="row" >
    <appErrandItem v-for="err in errands" :item="err" :key="err.id" :displayList="displayList"></appErrandItem>
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
        this.getMyErrands()
    },
    components: {
        appErrandItem : ErrandItem
    },

    methods: {
            getMyErrands() {
                axios.get('api/errands/myErrands')
                .then((response) => {
                    this.errands = response.data
                    console.log('lalalaal ispisani errandi')
                    //alert('ok')
                }).catch((error) => {
                    alert('nije ok')
                    console.log(error)
                    this.errorMsg = 'greska tokom ucitavanja erands '
                })
            },

            indexingErrands() {
                axios.get('/api/index/reindexErrands/buyer/' + 2)
                .then((response) => {
                    this.indexes = response.data
                    alert("Errands indexed! ")
                }).catch((error) => {
                    console.log(error)
                })
            }
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