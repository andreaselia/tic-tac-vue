const state = {
  board: new Array(9).fill(null),
  me: null,
  turn: null,
  winner: null
}

const getters = {}

const actions = {
  markCell (context, { index, turn }) {
    context.commit('markCell', { index, turn })
  },
  setBoard (context, board) {
    context.commit('setBoard', board)
  },
  setMe (context, turn) {
    context.commit('setMe', turn)
  },
  setTurn (context, turn) {
    context.commit('setTurn', turn)
  },
  setWinner (context, winner) {
    context.commit('setWinner', winner)
  }
}

const mutations = {
  markCell (state, { index, turn }) {
    state.board[index] = turn
  },
  setBoard (state, board) {
    state.board = board
  },
  setMe (state, turn) {
    state.me = turn
  },
  setTurn (state, turn) {
    state.turn = turn
  },
  setWinner (state, winner) {
    state.winner = winner
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
