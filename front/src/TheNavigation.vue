<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">UES </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-if="!tokenn" id="a" class="navbar-nav">
            <a href="/login" class="nav-link">Log In</a>
        </li>
        <li id="a" class="navbar-nav">
          <a href="/registerSeller" class="nav-link">Register seller</a>
        </li>
        <li id="a" class="navbar-nav">
          <a href="/registerBuyer" class="nav-link">Register buyer</a>
        </li>
        <li v-if="tokenn" id="a" class="navbar-nav">
            <a href="/logout" class="nav-link">Log out</a>
        </li>
        <li v-if="buyer != '' && tokenn" id="a" class="navbar-nav">
            <a href="/searchSimpleArticleQuery" class="nav-link"> Search simple article query </a>
        </li>
        <li v-if="seller != '' && tokenn" id="a" class="navbar-nav">
            <a href="/addArticle" class="nav-link"> Add article</a>
        </li>
        <li v-if="tokenn" id="a" class="navbar-nav">
            <a href="/store" class="nav-link">Store</a>
        </li>
         <li v-if="tokenn" id="a" class="navbar-nav">
            <a href="/articleDetails" class="nav-link">Article details</a>
        </li>
         <li v-if="tokenn" id="a" class="navbar-nav">
            <a href="/updateArticle" class="nav-link">UpdateArticle</a>
        </li>
         <li v-if="tokenn" id="a" class="navbar-nav">
            <a href="/articleResult" class="nav-link"> Article result </a>
        </li>
        <li v-if="buyer != '' && tokenn" id="a" class="navbar-nav">
            <a href="/myErrands" class="nav-link">My errands</a>
        </li>
        <li v-if="buyer != '' && tokenn" id="a" class="navbar-nav">
            <a href="/searchSimpleErrandQuery" class="nav-link">Search simple errand query</a>
        </li>
        <li v-if="buyer != '' && tokenn" id="a" class="navbar-nav">
            <a href="/searchRangeArticleQuery" class="nav-link">Search range article query</a>
        </li>
        <li v-if="buyer != '' && tokenn" id="a" class="navbar-nav">
            <a href="/searchRangeErrandQuery" class="nav-link">Search range errand query</a>
        </li>
         <li v-if="buyer != '' && tokenn" id="a" class="navbar-nav">
            <a href="/changeBuyer" class="nav-link">Change buyer data</a>
        </li>
         <li v-if="seller != '' && tokenn" id="a" class="navbar-nav">
            <a href="/changeSeller" class="nav-link">Change seller data</a>
        </li>
        <li v-if="tokenn" id="a" class="navbar-nav">
            <a href="/indexArticle" class="nav-link">Index article</a>
        </li>
         <li v-if="tokenn" id="a" class="navbar-nav">
            <a href="/allUsers" class="nav-link">All users</a>
        </li>
        
        <li>
          <router-link to="/cart" class="btn btn-success navbar-btn" tag="button">
            Checkout <span class="badge badge-light">{{ numItems }} ($ {{ cartValue }})</span>
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
      seller:''
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
    }
  }
}
</script>

<style scoped>
  #a{
    margin: 3px;
    background-color: #b6becc;
  }
</style>