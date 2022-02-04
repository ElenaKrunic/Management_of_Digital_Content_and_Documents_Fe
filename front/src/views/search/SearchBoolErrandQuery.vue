<template>
<form @submit.prevent="getMyErrandsAdvanced">
    <div class="container pull-left">
    <div>
        <div style="display: block;">
            <p style="margin-bottom:-0.5px;">Select a field for searching:</p>
            <select @change="setFormDataAdv($event)" class="form-control">
                <option value="comment"> КОМЕНТАР </option>
                <option value="grade"> ОЦЈЕНА </option>
            </select>
        </div>
            <div class="mb-3">
                <label class="form-label" for="value">Value 1:</label>
                <input class="form-control" type="text" id="value" v-model="formDataAdvanced.value1" />
            </div>
        
            <div style="display: block;">
                <p>Select a boolean operator:</p>
                <select @change="setOperation($event)" class="form-control">
                    <option value="AND">AND</option>
                    <option value="OR">OR</option>
                    <option value="NOT">NOT</option>
                </select>
            </div>
            <div style="display: block;">
                <p>Select a field for searching:</p>
                <select @change="setFormDataAdv1($event)" class="form-control">
                    <option value="comment"> КОМЕНТАР </option>
                    <option value="grade"> ОЦЈЕНА </option>
                </select>
            </div>
                <div class="mb-3">
                    <label class="form-label" for="value">Value 2:</label>
                    <input class="form-control" type="text" id="value" v-model="formDataAdvanced.value2" />
                </div>
        </div>
        <br>
        <button class="btn btn-outline-dark">Submit</button>
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
            errands:[], 
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
        getMyErrandsAdvanced(){
            axios
            .post('api/search/boolean/errands', this.formDataAdvanced)
            .then((response) => {
                this.errands = response.data 
                this.setSearch(response.data)
                this.$router.push('/errandResult')
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
