<template>
<div class="container" :class="{loadingItem: isArticleLoading}">
  <div class="row text-center" v-if="isArticleLoading">
    <grid-loader :loading="isArticleLoading" :color="loaderColor" :size="loaderSize"></grid-loader>
  </div>
  <div v-else class="row action-panel">
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

<div class="row" v-if="!isArticleLoading">
<app-article-item v-for="art in articles" :item="art" :key="art.id" :displayList="displayList"></app-article-item>
</div>

</div>
</template>

<script> 
import axios from '../../../axiosConfig'
import { mapGetters } from 'vuex'
import GridLoader from 'vue-spinner/src/GridLoader.vue'
import ArticleItem from '../article/ArticleDetails.vue'

export default {
    props : ['article'],
    data() {
        return {
        loaderColor: "#5cb85c",
        loaderSize: "50px",
        displayList: false,
        articles: []
        } 
    },
    created() {
        this.getAllArticles()
    },
    computed: {
        ...mapGetters(['isArticleLoading'])
    },
    components: {
        appArticleItem: ArticleItem,
        GridLoader
    },
    methods: {
        getAllArticles() {
            axios.get('/api/articles/all')
            .then((response) => {
                this.articles = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        },
        changeDisplay(isList) {
            this.display = isList;
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
