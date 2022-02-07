<template>
<div class="container">
  <div class="col-md-12">
    <div class="card">
      <div class="row">
        <div class="col-12 col-md-4 offset-md-4">
          <div class="intrinsic">
            <img class="img-fluid intrinsic-item" :src="article.path" alt="">
          </div>
        </div>
      </div>

      <div class="caption-full">
        <h4 class="pull-right">$ {{ article.price }}</h4>
        <h4> {{ article.title }}</h4>
        <p> {{ article.description }} </p>
      </div>
      <div class="ratings">
        <p class="pull-right">
          <router-link :to="'/updateArticle/' + article.id" tag="h5" class="card-title"><a> Update this product </a></router-link>
          <v-btn @click="generatePDF" class="btn btn-outline-dark"> Download PDF document </v-btn>
        </p>
      </div>
    </div>
  </div>
  <v-row>
    <v-col align="center" justify="center">
      <v-card dark style="width: 40%; margin-top: 2.5%">
        <v-card-title justify="center">
          <v-col>
            <h3> Find this product and add it to the index </h3>
          </v-col>
        </v-card-title>
        <form>
         
          <v-file-input
            v-model="form.file"
            accept=".pdf"
            name="file"
            label="Find document from your file system"
            style="width: 65.5%; margin-left: -5%"
          ></v-file-input>

          <br />
          <v-btn class="mr-4" @click="submit"> Submit </v-btn>
          <br />
          <br />
        </form>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
import axios from '../../../axiosConfig'

export default {
    created(){
        this.getArticle()
    },
    data(){
        return {
        form: {
          name: "",
          description: "",
          firstname: "",
          file: ""
        },
            article: {
              path : ""
            },
            errorMsg: '',
            loaderColor: "#5cb85c",
            loaderSize: "50px",
            //ovako cu poslije da prosljedjujem id kad kliknem da vidim detalje
            id: this.$route.params.id
        }
    },
    
    methods:{
        getArticle(){
            axios
            .get('api/articles/article/' + this.id)
            .then((response) => {
              
                //ovo ispise sadrzaj u konzolu
                this.article = response.data
            })
            .catch((error) => {
                console.log(error)
                this.errorMsg = 'Error retriving data'
            })
        },
        generatePDF() { 
          axios
            .get('api/articles/pdf/' + this.id, { responseType: 'blob'})
            .then((response) => {
              //alert('ok');
              console.log(response);
              this.article = response.data;
              const url = window.URL.createObjectURL(new Blob([response.data]));
              console.log('>>> ovo je url >>>' + url)
              const link = document.createElement("a");
              console.log('>>> ovo je link >>>' + link);
              console.log('>>> link.href >>>' + link.href);
              link.href = url;
              link.setAttribute("download", "article.pdf");
              document.body.appendChild(link);
              link.click();
              link.parentNode.removeChild(link);
              //this.$router.push('/articleDetails/:' + this.id);
              this.$router.push('/store');
            })
            .catch((error) => {
              alert('nije ok')
              console.log(error)
              this.errorMsg = 'Error retriving data'
            })
        },
           submit() {
      let fd = new FormData();
      fd.append("name", this.form.name);
      fd.append("description", this.form.description);
      fd.append("firstname", this.form.firstname);
      fd.append("file", this.form.file);
      axios
        .post("api/index/add", fd)
        .then((response) => {
          alert(response.data);
          this.$router.push("/store");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    }
}
</script>


<style scoped>

</style>