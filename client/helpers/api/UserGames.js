export const getGames = {
  activeGames: [{
    id: 1,
    type: 'active',
    image: 'games/large/game-1.jpg',
    title: 'Spinmaster',
    rules: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    tournamentEnds: '9h 50m',
    registerEnds: '9h 49m',
    totalPlayers: '' // calculated with random (it would have been sent from server as well)
  }],
  upcomingGames: [{ // Don't have this view so I'll just send some data there for now
    id: 1,
    type: 'upcoming',
    image: 'games/large/game-3.png',
    title: 'Spinmaster',
    rules: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    begins: '22h 51m',
    registerBegins: '10h 51m',
    players: '0'
  }],
  finishedGames: [
    {
      id: 1,
      type: 'finished',
      image: 'games/large/game-1.jpg',
      title: 'Spinmaster',
      rules: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      registration: 'Finished',
      userRank: '',
      totalPlayers: ''
    },
    {
      id: 2,
      type: 'finished',
      image: 'games/large/game-2.jpg',
      title: 'Spinmaster',
      rules: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      registration: 'Finished',
      userRank: '',
      totalPlayers: ''
    }
  ]
};

export const getRanking = {
  players: [
    { rank: 1, username: 'Tonitest1', score: 1000, prize: 1000 },
    { rank: 2, username: 'Tonitest2', score: 1000, prize: 1000 },
    { rank: 3, username: 'Tonitest3', score: 1000, prize: 1000 },
    { rank: 4, username: 'Tonitest4', score: 1000, prize: 1000 },
    { rank: 5, username: 'Tonitest5', score: 1000, prize: 1000 },
    { rank: 6, username: 'Tonitest6', score: 1000, prize: 1000 },
    { rank: 7, username: 'Tonitest7', score: 1000, prize: 1000 },
    { rank: 8, username: 'Tonitest8', score: 1000, prize: 1000 },
    { rank: '', username: 'Tonitest9', score: 0, prize: '-' } // rank of the last player is calculated with random in each game
  ]
};

export const gameCarousel = {
  images: [
    { image: 'games/small/game-1.png', position: 1 },
    { image: 'games/small/game-2.jpg', position: 2 },
    { image: 'games/small/game-3.jpg', position: 3 },
    { image: 'games/small/game-4.jpg', position: 4 }
  ],
  total: 16
};
