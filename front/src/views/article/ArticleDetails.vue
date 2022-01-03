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
          <!--           <button @click="addArticle" class="btn btn-success">Add to cart</button>
 -->
        </p>
          <router-link :to="'/updateArticle/' + article.id" tag="h5" class="card-title"><a> Update article </a></router-link>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</div>
<!-- ovako se ucitava 

<div style="width: 50%; background:white; padding: 5%; border-radius:2%;">        
        <div class="mb-3">
            <label class="form-label" for="name">name:</label>
            <h4>{{article.name}}</h4>
        </div>
    </div>
 -->
    
</template>

<script>
import axios from '../../../axiosConfig'

export default {
    created(){
        this.getArticle()
    },
    data(){
        return {
            article: {},
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
                this.article = response.data
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