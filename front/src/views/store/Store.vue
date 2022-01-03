<template>
<div class="container pull-right"> 
  <div class="row action-panel">
      <button v-on:click="indexingArticles()" class="btn btn-outline-dark"> Index all articles from store </button>
      <p></p>    
  </div>  

  <div class="row action-panel">
    <div class="col-12">
      <div class="btn-group btn-group-sm pull-right">
				<button id="list" class="btn btn-outline-dark" @click.prevent="changeDisplay(true)">
          <i class="fa fa-list" aria-hidden="true"></i> List
				</button>
				<button id="grid" class="btn btn-outline-dark" @click.prevent="changeDisplay(false)">
          <i class="fa fa-th" aria-hidden="true"></i> Grid
				</button>
      </div>
    </div>
  </div>

  <div class="row" >
    <appArticleItem v-for="art in articles" :item="art" :key="art.id" :displayList="displayList"></appArticleItem>
  </div>

</div>
</template>

<script> 
import axios from '../../../axiosConfig'
import ArticleItem from '../article/ArticleItem.vue'

export default {
    props : ['article'],
    data() {
        return {
        loaderColor: "#5cb85c",
        loaderSize: "50px",
        displayList: false,
        articles: [],
        indexes : []
        } 
    },
    created() {
        this.getAllArticles()
    },
    computed: {
     // ...mapGetters(['isArticleLoading'])
    },
    components: {
        appArticleItem: ArticleItem,
        //GridLoader
    },
    methods: {
        getAllArticles() {
            axios.get('/api/articles/all')
            .then((response) => {
                this.articles = response.data
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        },
        changeDisplay(isList) {
            this.displayList = isList;
        },
        indexingArticles() {
           axios.get('/api/index/reindexArticles/seller/' + 1)
            .then((response) => {
                this.indexes = response.data
                alert('Products indexed!')
                }).catch((error) => {
                console.log(error)
                this.errorMessage = 'Erorr indexing articles'
            })
        }
    }
}
</script>

<style>
.loadingItem {
  align-items: center;
  justify-content: center;
  display: flex;
}

.action-panel {
  margin-bottom: 10px;
  margin-right: 5px;
}
</style>