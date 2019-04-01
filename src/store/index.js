import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as modules from './modules'

export default new Vuex.Store({
  modules: { ...modules },
  state: {
    loading: false
  },
  mutations: {
    setLoading (state, data = true) {
      state.loading = data
    }
  }
})
