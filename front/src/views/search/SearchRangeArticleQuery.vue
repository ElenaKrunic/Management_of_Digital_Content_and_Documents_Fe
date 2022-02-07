<template>
<form @submit.prevent="getArticleRange">
    <div class="container pull-left">
        <div style="display: block">
            <p style="margin-bottom:-0.5px"> Search </p>
            <select @change="setApi($event)"  class="form-control">
                 <option value="gteRange"> Greater then or equals</option>
                <option value="gtRange"> Greater then </option>
                <option value="lteRange"> Less then or equals</option>
                <option value="ltRange"> Less then </option>
            </select>
        </div>

        <div style="display :block">
            <p style="margin: bottom -0.5px;"> Select a field for search
            </p>
            <select @change="setFormData($event)" class="form-control">
                <option value="price"> Price </option>
            </select>
        </div>

        <div style="display: block;">
        <p style="margin-bottom:-0.5px;"> </p>
        <div class="mb-3">
              <label class="form-label" for="value">Enter some value:</label>
              <input class="form-control" type="text" id="value" v-model="formData.value"/>
        </div>
    </div>
    <button class="btn btn-outline-dark"> Search </button>
    </div>
</form>
</template>

<script>
import axios from '../../../axiosConfig'
import { mapMutations } from 'vuex'
export default {
    name : 'SearchRangeArticleQuery',
    data() {
        return { 
            articles: [],
            errorMsg: '', 
            api : '',
            formData : {
                field: '',
                value: ''
            }
        }
    },

    methods: {
     ...mapMutations(['setSearch']),
    getArticleRange() {
         axios
         .get(this.api + this.formData.value + '/articles')
         .then((response ) => {
             this.articles = response.data 
             this.setSearch(response.data)
             this.$router.push('/articleResult')
         }).catch((error) => {
             console.log(error)
             //console.log(this.formData)
             this.errorMsg = 'lalalal'
         })
     }   ,
    setFormData(event) {
         this.formData.field = event.target.value;
         console.log('polje je' + this.formData.field)
         //console.log('form data ' + this.formData.field);
     },
    setApi(event) {
        this.api = 'api/search/' + event.target.value + '/'; 
        //console.log('api izgleda ' + this.api)
        //console.log('api ' + this.api)
    }
}
}
</script>