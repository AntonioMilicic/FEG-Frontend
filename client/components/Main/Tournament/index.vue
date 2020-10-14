<template>
  <div>
    <status-list :status="status" />
    <router-view />
  </div>
</template>

<script>
import { getGames } from '@/helpers/api/UserGames';
import { mapActions } from 'vuex';
import StatusList from './StatusList';

const max = 2000;
const min = 1000;

export default {
  name: 'tournament-view',
  data: () => ({
    status: '',
    activeGames: '',
    upcomingGames: '',
    finishedGames: ''
  }),
  methods: {
    calculateRank: total => Math.floor(Math.random() * total),
    calculatePlayers(id) {
      const totalPlayers = Math.floor(Math.random() * (max - min + 1)) + min;
      const data = id
        ? { totalPlayers, userRank: this.calculateRank(totalPlayers) }
        : totalPlayers;
      return data;
    },
    submitToStore(game) {
      if (game[0].type === 'active') this.submitActive(this.activeGames);
      else if (game[0].type === 'finished') this.submitFinished(this.finishedGames);
      else this.submitUpcoming(this.upcomingGames);
    },
    ...mapActions({
      submitActive: 'submitActiveGames',
      submitFinished: 'submitFinishedGames',
      submitUpcoming: 'submitUpcomingGames'
    })
  },
  watch: {
    activeGames: {
      handler: 'submitToStore',
      deep: true
    },
    finishedGames: {
      handler: 'submitToStore',
      deep: true
    },
    upcomingGames: {
      handler: 'submitToStore',
      deep: true
    }
  },
  created() {
    const { activeGames, finishedGames, upcomingGames } = getGames;

    const status = {
      active: activeGames.length,
      upcoming: upcomingGames.length,
      finished: finishedGames.length
    };
    this.status = status;

    this.upcomingGames = upcomingGames;

    const finished = finishedGames.map(game => {
      const { totalPlayers, userRank } = this.calculatePlayers(game.id);
      game.description[2].desc = userRank;
      game.description[3].desc = totalPlayers;
      return game;
    });
    this.finishedGames = finished;

    const active = activeGames.map(game => {
      const totalPlayers = this.calculatePlayers();
      game.description[3].desc = totalPlayers;
      return game;
    });
    this.activeGames = active;
  },
  components: { StatusList }
};
</script>
