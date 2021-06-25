import { createStore } from 'vuex'

export default createStore({
  state: {
    number:100
  },
  mutations: {
    SET_NUMBER(state,value){
      state.number = value
    }
  },
  actions: {
  },
  modules: {
    a:{
      state:{
        a:11
      },
      mutations:{
        SET_A(state,value) {
          state.a = value
        }
      }
    },
    b:{}
  }
})
