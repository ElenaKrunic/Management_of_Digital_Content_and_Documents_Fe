<template>
<form @submit.prevent="updateArticle">
        <div style="width: 50%; background:white; padding: 5%; border-radius:2%;">
              <div class="img-event intrinsic">
                  <!--
                <img :src="article.path" alt="" class="grow thumbnail-image card-img-top intrinsic-item p-3">


                   -->
            </div>
             <div class="mb-3">
                <label class="form-label" for="path">Article path:</label>                
                <input class="form-control" id="path" v-model="article.path" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="name">Name:</label>                
                <input class="form-control" type="text" id="name" v-model="article.name" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="description">Description:</label>
                 <input class="form-control" type="text" id="description" v-model="article.description" /> 
            </div>
            <div class="mb-3">
                <label class="form-label" for="price">Price:</label>
                 <input class="form-control" type="number" id="price" v-model="article.price" /> 
            </div>                  
            <button class="btn btn-primary"> Save changes </button>
            <button class="btn btn-danger" @click="deleteArticle">Delete</button>
        </div>  
</form>
</template>

<script>
import axios from '../../../axiosConfig'

export default {
    name: 'UpdateArticle',
    data() {
        return {
            article: {},
            articles: [], 
            errorMsg: '',
            id : this.$route.params.id,
            isModalVisible: false,
        }
    },
    created() {
        this.getOneArticle(1);
    },
    methods: {
        getOneArticle() {
            axios.get('api/articles/article/1')
            .then((response) => {
                 this.article = response.data;
                 console.log(this.article)
                 alert(this.article)
            }).catch((error => {
                console.log(error)
            })) 
        },

        updateArticle() {
            axios.put('api/articles/updateArticle/1', this.article) 
            .then((response) => {
                console.log(response)
                this.$router.push('/store');
            }).catch(error => {
                console.log(error)
                this.errorMsg = 'greakakakakaka'
            })
        },

        deleteArticle() {
            axios.delete('api/articles/deleteArticle/1')
            .then((response) => {
                console.log(response)
                alert('deleted')
                window.location.href = '/store';
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>