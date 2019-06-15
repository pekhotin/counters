import Axios from 'axios'

const url = 'http://my-api.ptpit.ru'

const state = {
  subjects: []
}

const getters = {
  SUBJECTS: state => {
    return state.subjects
  }
}

const mutations = {
  SET_SUBJECTS: (state, payload) => {
    state.subjects = payload
  },
  ADD_SUBJECT: (state, payload) => {
    state.subjects.push(payload)
  },
  EDIT_SUBJECT: (state, payload) => {
    const index = state.subjects.findIndex(subject => subject.id === payload.id)
    state.subjects[index].index = payload.index
    state.subjects[index].name = payload.name
    state.subjects[index].shortName = payload.short_name
  },
  DELETE_SUBJECT: (state, payload) => {
    state.subjects.splice(state.subjects.findIndex(subject => subject.id === payload.id), 1)
  }
}

const actions = {
  GET_SUBJECTS: async (context, payload) => {
    let {data} = await Axios.get(url + '/subjects')
    context.commit('SET_SUBJECTS', data.subjects)
  },
  SAVE_SUBJECT: async (context, payload) => {
    let {data} = await Axios.post(url + '/subjects', payload)
    context.commit('ADD_SUBJECT', data)
  },
  UPDATE_SUBJECT: async (context, payload) => {
    let {data} = await Axios.put(url + '/subjects/' + payload.id, {
      name: payload.name,
      short_name: payload.short_name,
      index1: payload.index
    })
    context.commit('EDIT_SUBJECT', data)
  },
  REMOVE_SUBJECT: async (context, payload) => {
    await Axios.delete(url + '/subjects/' + payload.id)
    context.commit('DELETE_SUBJECT', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
