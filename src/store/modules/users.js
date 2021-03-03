const state = {
 users: []
}
 
const getters = {
 users: state => {
     return state.users
 }
}
 
const mutations = {
    'SET_USERS' (state, data) {
        state.users = data
    }
}
 
const actions = {
    initUsers: ({commit}) => {
        var vm = this
        axiosProxyS.get('/users')
          .then(function (res) {
            console.dir(res.data)
            commit('SET_USERS', res.data)
          })
          .catch(function (err) {
            console.log(err)
          })
    }
}
 
export default {
  state,
  getters,
  mutations,
  actions
}