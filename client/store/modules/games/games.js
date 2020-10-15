import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const state = {
  activeGames: [],
  finishedGames: [],
  upcomingGames: []
};

export default {
  state,
  mutations,
  actions,
  getters
};
