import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
    isAuthenticated: null
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = user !== null; 
    }
  }
});

export default store;
