const defaultSelections = () => (['Road Closure', 'Lane Closure'])

export default {
  state: {
    searchTerm: '',
    selections: defaultSelections()
  },
  actions: {
    search ({ dispatch, getters }) {
      dispatch('fetchClosures', {
        where: getters.whereClause
      })
    }
  },
  mutations: {
    setFilterSelections (state, data) {
      state.selections = data
    },
    resetFilterSelections (state) {
      state.selections = defaultSelections()
    }
  },
  getters: {
    whereClause: state => {
      var whereArr = [`CLOSURE_TYPE IN ('${state.selections.join("', '")}')`]
      if (state.searchTerm) {
        whereArr.push(`STREET LIKE '%${state.searchTerm}%'`)
      }
      return whereArr.join(' AND ')
    }
  }
}
