<template>
    <form @submit.prevent="getSellerArticles">
        <div style="display: inline-flex;margin-right:20px">
             <h3 v-if="errorMsg"> {{errorMsg}} </h3>
        <div style="display:block;">
            <p style="margin-bottom:-0.5px"> Select a search type: </p>
            <select @change="setApi($event)" class="form-control">
                <option value="term"> REGULAR </option>
                <option value="fuzzy"> FUZZY </option>
                <option value="phrase"> PHRASE </option>
            </select>
        </div>
        <div style="display:block;">
            <p style="margin-bottom:-0.5px; margin-left:15px;"> Select a field for searching: </p>
            <select @change="setFormData($event)" class="form-control" style="margin-left:15px">
                <option value="name"> Name </option>
                <option value="description"> Description </option>
                <option value="price"> Price</option>
            </select>
        </div>
        <div style="display:block;">
            <div class="mb-3">
                <label class="form-label" for="value" style="margin-left:20px; margin-right:10px"> Type a search value: </label>
                <input class="form-control" type="text" id="value" v-model="formData.value"/>
            </div>
        </div>
        </div>
        <button> Submit </button>
    </form>    
</template>

<script>
import axios from '../../../axiosConfig'
export default {
    name: 'SearchSimpleQuery',
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
        getSellerArticles() {
            axios
            //.post(this.api , this.formData)
            .post(this.api, this.formData)
            .then((response) => {
                this.articles = response.data
                console.log(JSON.stringify(this.articles) + ' articles')
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