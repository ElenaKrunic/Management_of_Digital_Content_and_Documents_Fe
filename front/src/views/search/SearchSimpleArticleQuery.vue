<template>
<form @submit.prevent="getSellerArticles">
      <div class="container pull-left">
         <div style="display: block;">
                <p style="margin-bottom:-0.5px">Select search type:</p>
                <select @change="setApi($event)" class="form-control">
                    <option value="term">REGULAR</option>
                    <option value="fuzzy">FUZZY</option>
                    <option value="phrase">PHRASE</option>
                    <option value="prefix">PREFIX</option>
                </select>
      </div>
      <div style="display: block;">
              <p style="margin-bottom:-0.5px;">Select field for search:</p>
              <select @change="setFormData($event)" class="form-control">
                  <option value="name"> Name </option>
                  <option value="description"> Description </option>
              </select>
      </div>
       <div style="display: block;">
        <p style="margin-bottom:-0.5px;"> </p>
        <div class="mb-3">
              <label class="form-label" for="value">Enter some value for search:</label>
              <input class="form-control" type="text" id="value" v-model="formData.value"/>
        </div>
    </div>
        <button class="btn btn-outline-dark"> Search </button>
      </div>
</form>
    
</template>

<script>
import axios from '../../../axiosConfig'
import { mapMutations } from "vuex";

export default {
    name: 'SearchSimpleArticleQuery',
    data() {
        return {
            articles:[], 
            errorMsg: '', 
            api: '',
            formData: {
                field : '', 
                value : ''
            }
        }
    },
    methods: {
        ...mapMutations(['setSearch']),
        getSellerArticles() {
            axios
            .post(this.api, this.formData)
            .then((response) => {
                this.articles = response.data
                this.setSearch(response.data)
                this.$router.push("/articleResult");
                //console.log(JSON.stringify(this.articles) + ' articles')
            })
            .catch((error) => {
                console.log(error)
                this.errorMsg = 'Error retrieving articles'
            })
        }, 
        setFormData(event) {
            this.formData.field = event.target.value; 
        }, 
        setApi(event) {
            console.log('api je ' + event)
            this.api = 'api/search/' + event.target.value + '/articles';
        }
    }
}

</script>

<style scoped>

</style>