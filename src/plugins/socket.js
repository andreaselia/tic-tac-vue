import { io } from 'socket.io-client'

export default {
  install: (app, options) => {
    const socket = io('http://localhost:1992', options)

    app.config.globalProperties.$socket = socket

    app.provide('socket', socket)
  }
}
