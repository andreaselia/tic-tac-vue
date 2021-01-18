import { createStore, createLogger } from 'vuex'
import app from './modules/app'
import game from './modules/game'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    app,
    game
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
