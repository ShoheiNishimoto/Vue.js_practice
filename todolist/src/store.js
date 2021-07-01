import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    id: 0
  },
  getters: {
    allTasks: function(state) {
      return state.tasks;
    },
    doneTasks: function(state) {
      return state.tasks.filter((task) => task.done);
    },
    notDoneTasks: function(state) {
      return state.tasks.filter((task) => !task.done);
    },
  },
  mutations: {
    changeDone: function(state, id) {
      const index = state.tasks.findIndex((task) => task.id === id);
      state.tasks[index].done = !state.tasks[index].done;
    },
    addTask: function(state, val) {
      const id = state.id;
      state.id ++;
      state.tasks.push({
        id: id,
        content: val,
        done: false,
      });
    },
    deleteTask: function(state, id) {
      const index = state.tasks.findIndex((task) => task.id === id);
      state.tasks.splice(index, 1);
    },
  },
  actions: {
    changeDone({ commit }, id) {
      commit('changeDone', id);
    },
    addTask({ commit }, val) {
      commit('addTask', val.coment);
      val.coment = '';
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id);
    },
  },
});
