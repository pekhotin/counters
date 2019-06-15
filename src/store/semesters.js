import Axios from 'axios'

const url = 'http://my-api.ptpit.ru'

const state = {
  semesters: []
}

const getters = {
  SEMESTERS: state => {
    return state.semesters
  }
}

const mutations = {
  SET_SEMESTER: (state, payload) => {
    state.semesters = payload
  },
  ADD_SEMESTER: (state, payload) => {
    state.semesters.push(payload)
  },
  EDIT_SEMESTER: (state, payload) => {
    const index = state.semesters.findIndex(semesters => semesters.id === payload.id)
    state.semesters[index].start_date = payload.start_date
    state.semesters[index].end_date = payload.end_date
  }
}

const actions = {
  GET_SEMESTERS: async (context, payload) => {
    let {data} = await Axios.get(url + '/curriculum/semesters')
    context.commit('SET_SEMESTER', data.semesters)
  },
  SAVE_SEMESTER: async (context, payload) => {
    let {data} = await Axios.post(url + '/curriculum/semesters', payload)
    context.commit('ADD_SEMESTER', data)
  },
  UPDATE_SEMESTER: async (context, payload) => {
    let {data} = await Axios.put(url + '/curriculum/semesters/' + payload.id, {
      start_date: payload.start_date,
      end_date: payload.end_date
    })
    context.commit('EDIT_SEMESTER', data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
