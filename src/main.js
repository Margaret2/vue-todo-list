import Vue from 'vue'
import App from './App.vue'

const STORED_LIST = 'vue-todo-list-fCb8AKPOwQ'
const STORED_ID = 'vue-todo-id-ZkPjMLQCI8'

let storedTodoList = JSON.parse(window.localStorage.getItem(STORED_LIST))
let storedId = window.localStorage.getItem(STORED_ID)

new Vue({
  el: '#app',
  components: { App },
  data: {
    storedId: storedId,
    storedData: storedTodoList
  },
  methods: {
    updateId: function(id){
      window.localStorage.setItem(STORED_ID, id)
    },
    updateList: function(list){
      window.localStorage.setItem(STORED_LIST, JSON.stringify(list))
    }
  }
})
