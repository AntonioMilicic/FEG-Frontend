export const getGames = {
  activeGames: [{
    id: 1,
    type: 'active',
    image: 'games/game-image-1.jpg',
    title: 'Spinmaster',
    tournamentEnds: '9h 50m',
    registerEnds: '9h 49m',
    totalPlayers: '' // calculated with random (it would have been sent from server as well)
  }],
  upcomingGames: [{ // Don't have this view so I'll just send some data there for now
    id: 1,
    type: 'upcoming',
    image: 'games/game-image-3.png',
    title: 'Spinmaster',
    begins: '22h 51m',
    registerBegins: '10h 51m',
    players: '0'
  }],
  finishedGames: [
    {
      id: 1,
      type: 'finished',
      image: 'games/game-image-1.jpg',
      title: 'Spinmaster',
      registration: 'Finished',
      userRank: '',
      totalPlayers: ''
    },
    {
      id: 2,
      type: 'finished',
      image: 'games/game-image-2.jpg',
      title: 'Spinmaster',
      registration: 'Finished',
      userRank: '',
      totalPlayers: ''
    }
  ]
};
