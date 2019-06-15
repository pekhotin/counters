import Axios from 'axios'

const url = 'http://my-api.ptpit.ru'

const state = {
  teachers: []
}

const getters = {
  TEACHERS: state => {
    return state.teachers
  }
}

const mutations = {
  SET_TEACHERS: (state, payload) => {
    state.teachers = payload
  },
  ADD_TEACHER: (state, payload) => {
    state.teachers.push(payload)
  },
  EDIT_TEACHER: (state, payload) => {
    const index = state.teachers.findIndex(subject => subject.id === payload.id)
    state.teachers[index].index = payload.index
    state.teachers[index].name = payload.name
    state.teachers[index].shortName = payload.short_name
  },
  DELETE_TEACHER: (state, payload) => {
    state.teachers.splice(state.teachers.findIndex(subject => subject.id === payload.id), 1)
  }
}

const actions = {
  GET_TEACHERS: async (context, payload) => {
    let {data} = await Axios.get(url + '/teachers')
    context.commit('SET_TEACHERS', data.teachers)
  },
  SAVE_TEACHER: async (context, payload) => {
    let {data} = await Axios.post(url + '/teachers', payload)
    context.commit('ADD_TEACHER', data)
  },
  UPDATE_TEACHER: async (context, payload) => {
    let {data} = await Axios.put(url + '/teachers/' + payload.id, {
      name: payload.name,
      short_name: payload.short_name,
      index1: payload.index
    })
    context.commit('EDIT_TEACHER', data)
  },
  REMOVE_TEACHER: async (context, payload) => {
    await Axios.delete(url + '/teachers/' + payload.id)
    context.commit('DELETE_TEACHER', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
