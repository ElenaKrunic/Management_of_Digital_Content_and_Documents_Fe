<template>
<div class="container">
  <div class="col-md-12">
    <div class="card">

        <h1> Details about delivery </h1>

      <div class="caption-full">
        <p> {{errand.orderedAtDate}} </p>
        <p> {{errand.isDelivered}} </p>
        <p> {{errand.grade }} </p>
        <p> {{errand.comment }} </p>
        <p> {{errand.anonymousComment }} </p>
        <p> {{errand.archivedComment }} </p>
      </div>

    </div>

          <input type="button" value="Back" onclick="window.history.back()"  class="btn btn-primary" /> 

  </div>
</div>
</template>

<script>
import axios from '../../../axiosConfig'

export default {
    created(){
        this.getErrand()
    },
    data(){
        return {
            errand: {},
            errorMsg: '',
            loaderColor: "#5cb85c",
            loaderSize: "50px",
            //ovako cu poslije da prosljedjujem id kad kliknem da vidim detalje
            id: this.$route.params.id
        }
    },
    
    methods:{
        getErrand(){
            axios
            .get('api/errands/errand/' + this.id)
            .then((response) => {
                this.errand = response.data
            })
            .catch((error) => {
                console.log(error)
                this.errorMsg = 'Error retriving data'
            })
        }
    }
}
</script>


<style scoped>

</style>