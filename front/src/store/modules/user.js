
const state = {
    user: null,
    search: null
};

const getters = {
    user : state => state.user,
    search: state => state.search
};

const actions = {

};

const mutations = {
    setUser: (state,data) => {
        state.user = data;
    },
    setSearch: (state,data) => {
        state.search = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}