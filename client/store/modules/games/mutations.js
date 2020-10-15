export const SUBMIT_ACTIVE_GAMES = (state, payload) => {
  state.activeGames = payload;
};

export const SUBMIT_FINISHED_GAMES = (state, payload) => {
  state.finishedGames = payload;
};

export const SUBMIT_UPCOMING_GAMES = (state, payload) => {
  state.upcomingGames = payload;
};
