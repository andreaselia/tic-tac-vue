const state = {
  view: 'welcome',
  connected: false
}

const getters = {}

const actions = {
  setView (context, view) {
    context.commit('setView', view)
  }
}

const mutations = {
  setView (state, view) {
    state.view = view
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
