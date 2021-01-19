const state = {
  board: new Array(9).fill(null),
  turn: 'X',
  winner: null
}

const getters = {}

const actions = {
  setBoard (context, board) {
    context.commit('setBoard', board)
  },
  setTurn (context, turn) {
    context.commit('setTurn', turn)
  }
}

const mutations = {
  setBoard (state, board) {
    state.board = board
  },
  setTurn (state, turn) {
    state.turn = turn
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
