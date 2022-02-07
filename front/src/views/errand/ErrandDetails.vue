<template>
<div style="width: 50%; background:white; padding: 5%; border-radius:2%;"> 
    <h1> Details about your order </h1>
    <div class="mb-3">
        <label class="form-label" for="path"> Ordered at date:</label>                
        <input readonly class="form-control" id="date" type="text" v-model="errand.orderedAtDate" />
    </div>
     <div class="mb-3">
        <label class="form-label" for="path">Grade:</label>                
        <input required  class="form-control" id="path" v-model="errand.grade" />
    </div>
     <div class="mb-3">
        <label class="form-label" for="path"> Comment:</label>                
        <input required class="form-control" id="path" v-model="errand.comment" />
    </div>

    <div class="caption-full">
        <p>Is this errand delivered (T/F)?</p>
        <input readonly class="form-control" id="path" v-model="errand.delivered" />
        <p></p>
        <p>Is there an anonymous comment for this errand (T/F)?</p>
        <input readonly class="form-control" id="path" v-model="errand.anonymousComment" />
    </div>
    <br />
    <button class="btn btn-primary" @click="putCommentAndGrade"> Save changes </button>
    &nbsp;

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
            errand: {
                comment: "",
                grade:0,
                date: ""
            },
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
        },
        putCommentAndGrade(){
            //http://localhost:8085/api/articles/orderArticle/?id=1&quantity=20
            axios.put('api/errands/commentAndGrade/?id=' + this.id + "&comment=" + this.errand.comment+"&grade=" + this.errand.grade)
            .then((response) => {
                console.log(response)
                this.$router.push('/myErrands');
            }).catch((error) => {
                console.log(error)
            })
        }

    }
}
</script>


<style scoped>

</style>