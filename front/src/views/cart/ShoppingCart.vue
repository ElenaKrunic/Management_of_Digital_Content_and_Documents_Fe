<template>
  <div class="container table-responsive">
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
    <button @click="getArticleRange" class="btn btn-outline-dark">Submit</button>
    <table id="cart" class="table table-hover table-sm">
      <thead>
        <tr>
          <th style="width:50%">Product</th>
          <th style="width:10%">Price</th>
          <th style="width:8%">Quantity</th>
          <th style="width:22%" class="text-center">Subtotal</th>
          <th style="width:10%"></th>
        </tr>
      </thead>

      <transition-group name="list-shopping-cart" tag="tbody">
        <app-cart-item
          v-for="cartItem in cartItemList"
          :cartItem="cartItem"
          :key="cartItem.id"
        ></app-cart-item>
      </transition-group>

      <tfoot>
        <tr class="d-table-row d-sm-none">
          <td class="text-center">
            <strong>Total ${{ cartValue }}</strong>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="d-none d-sm-table-cell"></td>
          <td class="d-none d-sm-table-cell text-center">
            <strong>Total ${{ cartValue }}</strong>
          </td>
          <td class="px-0">
            <button class="btn btn-success" @click="checkoutElena">
              <span class="text-nowrap"
                >Checkout <i class="fa fa-angle-right d-inline"></i
              ></span>
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import axios from '../../../axiosConfig'
import { mapActions, mapGetters } from 'vuex'
import CartItem from '../cart/CartItem.vue'
import { mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'cartItemList',
      'isLoggedIn',
      'products',
      'currentUser',
      'cartValue',
    ]),
  },
  components: {
    appCartItem: CartItem,
  },
  props: ['article'],
  data(){ 
    return {
      cartItem: {
        id: localStorage.getItem('articleId'),
        quantity: localStorage.getItem('quantityAdded')
      },  
       articles: [],
            errorMsg: '', 
            api : '',
            formData : {
                field: '',
                value: ''
      }    
    }
  },
  methods: {
    ...mapActions([
      'saveShoppingCart',
      'addMessage',
      'saveToTransaction',
      'clearCart',
    ]),
     ...mapMutations(['setSearch']),
    checkoutElena() {
      //http://localhost:8085/api/articles/orderArticle/?id=1&quantity=20
          axios.post('api/articles/orderArticle/?id=' + this.cartItem.id + "&quantity=" + this.cartItem.quantity)
          .then((response) => {
            this.articles = response.data
            console.log(response)
            alert("Uspjesno ste izvrsiti naruzbu!")
          })
          .catch((error) => {
            console.log(error)
          })
    },
    checkValidCart(itemList, prodList) {
      let isValid = true
      let message = ''

      itemList.map((item) => {
        for (let prodIdx = 0; prodIdx < prodList.length; prodIdx++) {
          if (prodList[prodIdx].id == item.id) {
            if (prodList[prodIdx].quantity < item.quantity) {
              message = `Only ${prodList[prodIdx].quantity} ${item.title} available in stock`
              isValid = false
              return
            }
            break
          }
        }
      })
      return {
        isValid,
        message,
      }
    },
    checkout() {
      if (this.isLoggedIn) {
        if (!this.cartItemList || this.cartItemList.length == 0) {
          this.addMessage({
            messageClass: 'warning',
            message: 'Your cart is empty!',
          })
          return
        }
        let { isValid, message } = this.checkValidCart(
          this.cartItemList,
          this.products
        )

        if (isValid) {
          this.saveToTransaction({
            cartItemList: this.cartItemList,
            uid: this.currentUser.uid,
          }).then(() => {
            this.addMessage({
              messageClass: 'success',
              message: 'Your order has been successfully processed!',
            })
            this.saveShoppingCart({
              cartItemList: [],
              uid: this.currentUser.uid,
            })
            this.clearCart()
            this.$router.push('/')
          })
        } else {
          this.addMessage({
            messageClass: 'danger',
            message: message,
          })
        }
      } else {
        this.addMessage({
          messageClass: 'warning',
          message: 'Please login to checkout',
        })
      }
    },
     getArticleRange() {
         axios
         .get(this.api + this.formData.value + '/articles')
         .then((response ) => {
             this.articles = response.data 
             this.setSearch(response.data)
             this.$router.push('/articleResult')
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
  },
}
</script>

<style lang="scss" scoped>
.list-shopping-cart-leave-active {
  transition: all 0.4s;
}

.list-shopping-cart-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.table-sm {
  font-size: 0.875rem;
  ::v-deep h4 {
    font-size: 1.25rem;
  }
}
</style>
