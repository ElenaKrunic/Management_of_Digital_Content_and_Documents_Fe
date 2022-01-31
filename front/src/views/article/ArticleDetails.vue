<template>
<div class="container">
  <div class="col-md-12">
    <div class="card">
      <div class="row">
        <div class="col-12 col-md-4 offset-md-4">
          <div class="intrinsic">
            <img class="img-fluid intrinsic-item" :src="article.path" alt="">
          </div>
        </div>
      </div>

      <div class="caption-full">
        <h4 class="pull-right">$ {{ article.price }}</h4>
        <h4> {{ article.title }}</h4>
        <p> {{ article.description }} </p>
      </div>
      <div class="ratings">
        <p class="pull-right">
          <router-link :to="'/updateArticle/' + article.id" tag="h5" class="card-title"><a> Update article </a></router-link>
          <!-- 
             <button v-on:click="generatePDF()" class="btn btn-outline-dark"> Generate PDF </button>
          -->
          <v-btn @click="generatePDF" class="btn btn-outline-dark"> Preuzmi PDF </v-btn>

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
        this.getArticle()
    },
    data(){
        return {
            article: {
              path : ""
            },
            errorMsg: '',
            loaderColor: "#5cb85c",
            loaderSize: "50px",
            //ovako cu poslije da prosljedjujem id kad kliknem da vidim detalje
            id: this.$route.params.id
        }
    },
    
    methods:{
        getArticle(){
            axios
            .get('api/articles/article/' + this.id)
            .then((response) => {
              
                //ovo ispise sadrzaj u konzolu
                this.article = response.data
            })
            .catch((error) => {
                console.log(error)
                this.errorMsg = 'Error retriving data'
            })
        },
        generatePDF() { 
          axios
            .get('api/articles/pdf/' + this.id, { responseType: 'blob'})
            .then((response) => {
              //alert('ok');
              console.log(response);
              this.article = response.data;
              const url = window.URL.createObjectURL(new Blob([response.data]));
              console.log('>>> ovo je url >>>' + url)
              const link = document.createElement("a");
              console.log('>>> ovo je link >>>' + link);
              console.log('>>> link.href >>>' + link.href);
              link.href = url;
              link.setAttribute("download", "article.pdf");
              document.body.appendChild(link);
              link.click();
              link.parentNode.removeChild(link);
            })
            .catch((error) => {
              alert('nije ok')
              console.log(error)
              this.errorMsg = 'Error retriving data'
            })
        }
    }
}
</script>


<style scoped>

</style>