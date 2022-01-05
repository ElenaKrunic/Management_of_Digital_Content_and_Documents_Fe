import Vue from 'vue';
import Vuex from 'vuex'

import article from './modules/article';
import cart from './modules/cart';
import user from './modules/user';
import messages from './modules/messages'
import * as actions from './actions'

Vue.use(Vuex)

//alert('pozvan store js')

export default new Vuex.Store({
    actions, 
    modules: {
        article,
        cart,
        user,
        messages
    }
})