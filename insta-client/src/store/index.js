import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:3000/',
    isAuthenticated: false,
    feed: [
      {
        id: 0,
        user_id: 0,
        display_name: 'Fred Flintstone',
        desc: 'Look at my car...',
        image:
          'http://img.timeinc.net/time/photoessays/2008/10_cars/flintstones.jpg',
        timestamp: 1551052800000
      },
      {
        id: 1,
        user_id: 1,
        display_name: 'Scooby Doo',
        desc: 'Pizza',
        image:
          'https://media.wired.com/photos/5932b90ea312645844996a81/master/pass/scoobydoheader.jpg',
        timestamp: 1549065600000
      },
      {
        id: 2,
        user_id: 2,
        display_name: 'Goku Son',
        desc: 'KaaaMeeee',
        image:
          'https://res.cloudinary.com/teepublic/image/private/s--jJPfa04l--/t_Preview/b_rgb:ffffff,c_lpad,f_jpg,h_630,q_90,w_1200/v1494044514/production/designs/1573056_1.jpg',
        timestamp: 1545696000000
      }
    ]
  },
  mutations: {
    isAuthenticated(state) {
      if (localStorage.getItem('jwt') != null) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
    login(state, token) {
      state.isAuthenticated = true;
      localStorage.setItem('jwt', token);
      this.$router.push('/');
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('jwt');
      this.$router.push('/login');
    }
  }
});
