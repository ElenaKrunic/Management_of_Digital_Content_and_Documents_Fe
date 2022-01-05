export const updateCart = ({
    commit, 
}, {item, quantity, isAdd}) => {
    commit('UPDATE_CART', {item, quantity, isAdd});
    if(isAdd) {
        let message_obj = {
            message: `Added ${item.name} to cart successfully`,
            messageClass: 'success',
            autoClose: true
        }
        commit('ADD_MESSAGE', message_obj);
    }
}

export const removeItemInCart = ({commit}, {item}) => {
	commit('REMOVE_CART_ITEM', {item});
}

