<template>
    <form @submit.prevent="addArticle">
        <div style="width: 50%; background:white; padding: 5%; border-radius: 2%">
              <div class="mb-3">
                <label class="form-label" for="name"> Photo path:</label>                
                <input class="form-control" id="path" v-model="formData.path" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="name"> Name: </label>
                <input class="form-control" type="text" id="name" v-model="formData.name"/>
            </div>
              <div class="mb-3">
                <label class="form-label" for="description"> Description: </label>
                <input class="form-control" type="text" id="description" v-model="formData.description"/>
            </div>
              <div class="mb-3">
                <label class="form-label" for="price"> Price: </label>
                <input class="form-control" type="number" id="price" v-model="formData.price"/>
            </div>

            <button class="btn btn-primary"> Add  </button>
        </div>
    </form>
</template>

<script>
import axios from '../../../axiosConfig'

export default {
    name: 'AddArticle',
    created(){
        //rad sa tokenom
    }, 
    data() {
        return { 
            formData: {
                name: '',
                description: '',
                price: 0,
                path: '',
                //za pocetak zakucana vrijednost
                id : 1
            },
            
            errorMsg: ''
        }
    },

    methods: {
        addArticle() {
            axios
            .post('/api/articles/saveArticle/1', this.formData)
            .then(response => {
                console.log('response je ' + response)
                this.errorMsg = "Product successfully added";
                alert('dodan proizvod')
                this.$router.push('/store');
            })
            .catch(error => {
                console.log(error);
                this.errorMsg="Greska kod dodavanja proizvoda"
            })
        }
    }
}
</script>

