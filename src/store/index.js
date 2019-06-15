import Vue from 'vue'
import Vuex from 'vuex'
import semesters from './semesters'
import subjects from './subjects'
import groups from './groups'

Vue.use(Vuex)

// const url = 'http://my-api.ptpit.ru'

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    semesters,
    subjects,
    groups
  }
})
