import { createStore, createLogger } from 'vuex'
import counter from './modules/counter'
import game from './modules/game'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    counter,
    game
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
