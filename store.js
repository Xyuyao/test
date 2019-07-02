import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    count:0,
    name:"张三"
  },
  mutations:{
    inc(state){
      state.count++
    }
  },
  getters: {
    count(state){
      return state.count
    },
    name(state){
      return state.name
    }
  },
  actions: {
    
  }
})

export default store