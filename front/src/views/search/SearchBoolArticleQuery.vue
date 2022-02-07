<template>
<form @submit.prevent="getMyArticlesAdvanced">
    <div class="container pull-left">
    <div>
        <div style="display: block;">
            <p style="margin-bottom:-0.5px;">Choose a field for search:</p>
            <select @change="setFormDataAdv($event)" class="form-control">
                <option value="name"> Name </option>
                <option value="description"> Description </option>
            </select>
        </div>
            <div class="mb-3">
                <label class="form-label" for="value"> First value:</label>
                <input class="form-control" type="text" id="value" v-model="formDataAdvanced.value1" />
            </div>
        
            <div style="display: block;">
                <p>Select an operator:</p>
                <select @change="setOperation($event)" class="form-control">
                    <option value="AND"> and </option>
                    <option value="OR"> or </option>
                    <option value="NOT"> not </option>
                </select>
            </div>
            <div style="display: block;">
                <p> Choose second field for search:</p>
                <select @change="setFormDataAdv1($event)" class="form-control">
                    <option value="name"> Name </option>
                    <option value="description"> Description </option>
                </select>
            </div>
                <div class="mb-3">
                    <label class="form-label" for="value">Second value:</label>
                    <input class="form-control" type="text" id="value" v-model="formDataAdvanced.value2" />
                </div>
        </div>
        <br>
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
            formDataAdvanced:{
                field1:'',
                value1:'',
                field2:'',
                value2:'',
                operation:''
            }
        }
    },
    methods: {
        ...mapMutations(['setSearch']),
        getMyArticlesAdvanced(){
            axios
            .post('api/search/boolean/articles', this.formDataAdvanced)
            .then((response) => {
                this.articles = response.data
                this.setSearch(response.data)
                console.log(this.articles + ' articles')
                this.$router.push("/articleResult");
            })
            .catch((error) => {
                console.log(error)
                this.errorMsg = 'Error retriving data'
            })
        },

        setFormDataAdv(event){
            this.formDataAdvanced.field1 = event.target.value;
            console.log(event.target.value + ' field')
        },
        setFormDataAdv1(event){
            this.formDataAdvanced.field2 = event.target.value;
            console.log(event.target.value + ' field')
        },
        setOperation(event){
            this.formDataAdvanced.operation = event.target.value
        }
    }
}

</script>

<style scoped>

</style>