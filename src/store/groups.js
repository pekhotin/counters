import Axios from 'axios'

const url = 'http://my-api.ptpit.ru'

const state = {
  groups: []
}

const getters = {
  GROUPS: state => {
    return state.groups
  }
}

const mutations = {
  SET_GROUPS: (state, payload) => {
    state.groups = payload
  },
  ADD_GROUP: (state, payload) => {
    state.groups.push(payload)
  },
  EDIT_GROUP: (state, payload) => {
    const index = state.groups.findIndex(subject => subject.id === payload.id)
    state.groups[index].index = payload.index
    state.groups[index].name = payload.name
    state.groups[index].shortName = payload.short_name
  },
  DELETE_GROUP: (state, payload) => {
    state.groups.splice(state.groups.findIndex(subject => subject.id === payload.id), 1)
  }
}

const actions = {
  GET_GROUPS: async (context, payload) => {
    let {data} = await Axios.get(url + '/groups')
    context.commit('SET_GROUPS', data.groups)
  },
  SAVE_GROUP: async (context, payload) => {
    let {data} = await Axios.post(url + '/groups', payload)
    context.commit('ADD_GROUP', data)
  },
  UPDATE_GROUP: async (context, payload) => {
    let {data} = await Axios.put(url + '/groups/' + payload.id, {
      name: payload.name,
      short_name: payload.short_name,
      index1: payload.index
    })
    context.commit('EDIT_GROUP', data)
  },
  REMOVE_GROUP: async (context, payload) => {
    await Axios.delete(url + '/groups/' + payload.id)
    context.commit('DELETE_GROUP', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
