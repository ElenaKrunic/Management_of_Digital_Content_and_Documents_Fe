<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">УЕС </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-if="buyer != '' && tokenn" id="a" class="navbar-nav">
            <a href="/selectSearchType" class="nav-link">Изабери претрагу</a>
        </li>
        <li v-if="tokenn" id="a" class="navbar-nav">
            <a href="/store" class="nav-link"> Радња </a>
        </li>
        <li v-if="buyer != '' && tokenn" id="a" class="navbar-nav">
            <a href="/myErrands" class="nav-link">Моје поруџбине</a>
        </li>
        <li v-if="seller || admin != '' && tokenn" id="a" class="navbar-nav">
            <a href="/addArticle" class="nav-link"> Додавање производа</a>
        </li>
        <li v-if="tokenn" id="a" class="navbar-nav">
            <a href="/allUsers" class="nav-link"> Сви корисници</a>
        </li>
        <li v-if="buyer != '' && tokenn" id="a" class="navbar-nav">
            <a href="/changeBuyer" class="nav-link">Измијени податке о налогу</a>
        </li>
         <li v-if="seller != '' && tokenn" id="a" class="navbar-nav">
            <a href="/changeSeller" class="nav-link">Измијени податке о налогу</a>
        </li>
        <li v-if="tokenn" id="a" class="navbar-nav">
            <a href="/logout" class="nav-link">Одјави се</a>
        </li>
        <li v-if="!tokenn" id="a" class="navbar-nav">
            <a href="/login" class="nav-link">Пријави се</a>
        </li>
        <li v-if="seller || buyer != '' && tokenn">
          <router-link to="/cart" class="btn btn-success navbar-btn" tag="button">
            Погледај корпу <span class="badge badge-light">{{ numItems }} ($ {{ cartValue }})</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:'TheNavigation',
  created(){
    if(this.tokenn)
      this.whichRole()
  },
  data(){
    return {
      id:'',
      putanja:'',
      tokenn: localStorage.getItem('token'),
      buyer:'',
      seller:'',
      admin: ''
    }
  },
  computed : {
    ...mapGetters(['cartValue', 'cartItemList']),
    numItems() {
       return this.cartItemList.reduce((total, item) => {
        total += item.quantity;
        return total
      }, 0);
    }
  },
  methods:{
    whichRole(){
      let jwtData = this.tokenn.split('.')[1]
      let decodedJwtJsonData = window.atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      let role = decodedJwtData.role

      if(role == 'SELLER')
        this.seller = role
      else if(role == 'BUYER')
        this.buyer = role
      else 
        this.admin = role
    },
  }
}
</script>

<style scoped>
  #a{
    margin: 3px;
    background-color: #b6becc;
  }
</style>