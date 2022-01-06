<template>
<form @submit.prevent="getErrandRange">
    <div class="container pull-left">
        <div style="display: block">
            <p style="margin-bottom:-0.5px"> Search </p>
            <select @change="setApi($event)"  class="form-control">
                <option value="gteRange">Greater then or equals</option>
                <option value="gtRange"> Greater then</option>
                <option value="lteRange">Less then or equals</option>
                <option value="ltRange">Less then</option>
            </select>
        </div>

        <div style="display :block">
            <p style="margin: bottom -0.5px;"> Select search value
            </p>
            <select @change="setFormData($event)" class="form-control">
                <option value="grade"> GRADE </option>
                <option value="price"> PRICE </option>
            </select>
        </div>

        <div style="display: block;">
        <p style="margin-bottom:-0.5px;"> </p>
        <div class="mb-3">
              <label class="form-label" for="value">Type search price:</label>
              <input class="form-control" type="text" id="value" v-model="formData.value"/>
        </div>
    </div>
    <button class="btn btn-outline-dark">Submit</button>
    </div>
</form>
</template>

<script>
import axios from '../../../axiosConfig'
import { mapMutations } from 'vuex'
export default {
    name : 'SearchRangeErrandQuery',
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
    getErrandRange() {
         axios
         .get(this.api + this.formData.value + '/errands')
         .then((response ) => {
             this.errands = response.data 
             this.setSearch(response.data)
             this.$router.push('/errandResult')
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