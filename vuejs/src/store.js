import Vue from 'vue';
import Vuex from 'vuex';
import { answer } from './helpers/definition';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      gender: null,
      year: null,
      month: null,
      date: null,
      q1: null,
      q2: null,
      q3: null,
      text: null,
    },
  },
  getters: {
    getGender(state) {
      return state.userInfo.gender === 'male' ? '男性' : '女性';
    },
    getBirthday(state) {
      return `${state.userInfo.year}年${state.userInfo.month}月${state.userInfo.date}日`;
    },
    getQ1(state) {
      return answer(state.userInfo.q1);
    },
    getQ2(state) {
      return answer(state.userInfo.q2);
    },
    getQ3(state) {
      return answer(state.userInfo.q3);
    },
    getText(state) {
      return state.userInfo.text;
    },
    getUserObj(state) {
      return state.userInfo;
    }
  },
  mutations: {
    selectGender(state, value) {
      state.userInfo.gender = value;
    },
    selectYear(state, value) {
      state.userInfo.year = value;
    },
    selectMonth(state, value) {
      state.userInfo.month = value;
    },
    selectDate(state, value) {
      state.userInfo.date = value;
    },
    selectQ1(state, value) {
      state.userInfo.q1 = value;
    },
    selectQ2(state, value) {
      state.userInfo.q2 = value;
    },
    selectQ3(state, value) {
      state.userInfo.q3 = value;
    },
    inputText(state, value) {
      state.userInfo.text = value;
    },
  },
  actions: {
    selectGender({ commit }, value) {
      commit('selectGender', value);
    },
    selectYear({ commit }, value) {
      commit('selectYear', value);
    },
    selectMonth({ commit }, value) {
      commit('selectMonth', value);
    },
    selectDate({ commit }, value) {
      commit('selectDate', value);
    },
    selectQ1({ commit }, value) {
      commit('selectQ1', value);
    },
    selectQ2({ commit }, value) {
      commit('selectQ2', value);
    },
    selectQ3({ commit }, value) {
      commit('selectQ3', value);
    },
    inputText({ commit }, value) {
      commit('inputText', value);
    },
  },
});
