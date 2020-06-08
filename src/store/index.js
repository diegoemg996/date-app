import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios : [],
    coins: 3
    
  },
  mutations: {
    setUsuarios(state, usuarios){
      state.usuarios = usuarios
    },

    quitarMoneda(state){
      state.coins --
    },
    recargaMonedas(state, cantidad){
      state.coins = state.coins + cantidad
    }
  },
  actions: {
    async obtenerUsuarios({commit}){
      const resp = await fetch('https://reqres.in/api/users?page=2')
      const {data} = await resp.json()
      console.log(data);
      commit('setUsuarios', data)

    }
    
  },
  modules: {
  }
})
