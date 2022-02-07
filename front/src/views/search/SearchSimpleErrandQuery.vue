<template>
<form @submit.prevent="getBuyerErrands">
    <div class="container pull-left">
        <div style="display: block">
            <p style="margin-bottom:-0.5px"> Search </p>
            <select @change="setApi($event)"  class="form-control">
                 <option value="term">REGULAR</option>
                <option value="fuzzy">FUZZY</option>
                <option value="phrase">PHRASE</option>
                <option value="prefix">PREFIX</option>
            </select>
        </div>

        <div style="display :block">
            <p style="margin: bottom -0.5px;"> Select field for search
            </p>
            <select @change="setFormData($event)" class="form-control">
                <option value="comment"> Comment </option>
                <option value="grade"> Grade </option>
            </select>
        </div>

        <div style="display: block;">
        <p style="margin-bottom:-0.5px;"> </p>
        <div class="mb-3">
              <label class="form-label" for="value"> Enter value for search:</label>
              <input class="form-control" type="text" id="value" v-model="formData.value"/>
        </div>
    </div>
    <button class="btn btn-outline-dark"> Search</button>
    </div>
</form>
</template>

<script>
import axios from '../../../axiosConfig'
import { mapMutations } from 'vuex'

export default {
    name : 'SearchSimpleErrandQuery',
    data() {
        return { 
            errands: [],
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
    getBuyerErrands() {
         axios
         .post(this.api, this.formData)
         .then((response ) => {
             this.errands = response.data 
             this.setSearch(response.data)
             this.$router.push('/errandResult')
         }).catch((error) => {
             console.log(error)
             this.errorMsg = 'lalalal'
         })
     }   ,
    setFormData(event) {
         this.formData.field = event.target.value;
         console.log('form data ' + this.formData.field);
     },
    setApi(event) {
        this.api = 'api/search/' + event.target.value + '/errands' 
        console.log('api ' + this.api)
    }
}
}
</script>

<style></style>