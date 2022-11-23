import axios from 'axios'
import { createStore } from 'vuex'


export default createStore({
  state: {
    todos: []
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    },
    storeTodo(state, payload) {
      const index = state.todos.findIndex(todo => todo.id === payload.id) //acha o index do objeto
      if(index >= 0){
        state.todos.splice(index, 1, payload)
      }else{
        state.todos.push(payload)
      }
    }
  },
  actions: {
    getTodos({commit}){
      return axios.get('http://localhost:3000/todos')
      .then((response) =>{
        commit('storeTodos', response.data)
      })
    },
    addTodo({commit}, data) {
      return axios.post('http://localhost:3000/todos', data).then((response) => {
        commit('storeTodo', response.data)
      })
    },
    updateTodo({commit}, {id, data}) {
      return axios.put(`http://localhost:3000/todos/${id}`, data).then((response) => {
        commit('storeTodo', response.data)
      })
    },
  },
  getters: {
  },
  modules: {
  }
})
