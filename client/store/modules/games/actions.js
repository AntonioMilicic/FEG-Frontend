export const submitActiveGames = ({ commit }, payload) => {
  commit('SUBMIT_ACTIVE_GAMES', payload);
};

export const submitFinishedGames = ({ commit }, payload) => {
  commit('SUBMIT_FINISHED_GAMES', payload);
};

export const submitUpcomingGames = ({ commit }, payload) => {
  commit('SUBMIT_UPCOMING_GAMES', payload);
};
