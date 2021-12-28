<template>
    <div>
        <button v-on:click="indexingArticles()"> Index articles </button>
        <p></p>    
    </div>    
</template>

<script>
import axios from '../../../axiosConfig'

export default {
    name: 'Indexing',
    data() {
        return {
            indexes: [],
            errorMessage: ''
        }
    },
    methods: {
        indexingArticles() {
            //poslije dodati prosljedjivanje po id-u
            axios.get('/api/index/reindexArticles/seller/' + 1)
            .then((response) => {
                this.indexes = response.data
                console.log(this.indexes + ' indexes')
            }).catch((error) => {
                console.log(error)
                this.errorMessage = 'Erorr indexing articles'
            })
        }
    }
}
</script>

<style scoped>

</style>