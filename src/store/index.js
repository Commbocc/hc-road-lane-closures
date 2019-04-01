import Vue from 'vue'
import Vuex from 'vuex'
import { loadCss } from 'esri-loader'

loadCss('https://js.arcgis.com/4.10/esri/css/main.css')

Vue.use(Vuex)

import * as modules from './modules'

export default new Vuex.Store({
  modules: { ...modules },
  state: {
    loading: true
  },
  mutations: {
    setLoading (state, data = true) {
      state.loading = data
    }
  }
})
