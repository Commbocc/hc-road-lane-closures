import Closure from '../Closure'

export default {
  state: {
    index: [],
    active: null,
    detour: null
  },
  actions: {
    fetchClosures ({ dispatch, commit, getters }, params) {
      commit('setClosures', [])

      params = Object.assign({
        ...getters.defaultParams,
        orderByFields: ['Date_Closed desc', 'STREET']
      }, params)

      params.where = [
        params.where,
        'STREET is not NULL',
        `Date_Opened >= CURRENT_TIMESTAMP+1`,
        "CLOSED not in ('', 'Other', 'Detour')",
        // `Extend_Notes <> 'B'`
      ].join(' AND ')

      return dispatch('fetchFromLayer', params).then(response => {
        commit('setLoading', false)
        return commit('setClosures', response.features.map(x => new Closure(x)))
      })
    },
    fetchClosure ({ dispatch, commit, getters }, id) {
      commit('setActiveClosure', null)
      commit('setActiveDetour', null)

      let params = {
        ...getters.defaultParams,
        where: `OBJECTID='${id}'`
      }

      return new Promise((resolve, reject) => {
        dispatch('fetchFromLayer', params).then(response => {
          let closure = (response.features.length) ? new Closure(response.features[0]) : null
          commit('setActiveClosure', closure)

          if (closure) {
            dispatch('fetchDetour').then(() => {
              resolve(closure)
            })
          }

        }).catch(err => reject(err)).then(() => {
          commit('setLoading', false)
        })
      })
    },
    fetchDetour ({ state, dispatch, commit, getters }) {
      commit('setActiveDetour', null)

      let params = {
        ...getters.defaultParams,
        where: [
          `CLOSURE_TYPE='Detour'`,
          `TTC_NBR='${state.active.TTC_NBR}'`
        ].join(' AND ')
      }

      return new Promise((resolve, reject) => {
        dispatch('fetchFromLayer', params).then(response => {
          let detour = (response.features.length) ? new Closure(response.features[0]) : null
          commit('setActiveDetour', detour)
          resolve(detour)
        }).catch(err => reject(err))
      })
    }
  },
  mutations: {
    setClosures (state, data) {
      state.index = data
    },
    setActiveClosure (state, data) {
      state.active = data
    },
    setActiveDetour (state, data) {
      state.detour = data
    }
  }
}
