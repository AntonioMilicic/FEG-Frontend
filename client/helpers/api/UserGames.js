export const getGames = {
  activeGames: [{
    id: 1,
    type: 'active',
    image: 'games/game-image-1.jpg',
    description: [
      { desc: 'Spinmaster' },
      { title: 'Tournament ends', desc: '9h 50m' },
      { title: 'Registration ends', desc: '9h 49m' },
      { title: 'Players', desc: '' }
    ]
  }],
  upcomingGames: [{
    id: 1,
    type: 'upcoming',
    image: 'games/game-image-3.png',
    description: [
      { desc: 'Spinmaster' },
      { title: 'Tournament begins', desc: '22h 51m' },
      { title: 'Registration begins', desc: '10h 51m' },
      { title: 'Players', desc: 0 }
    ]
  }],
  finishedGames: [
    {
      id: 1,
      type: 'finished',
      image: 'games/game-image-1.jpg',
      description: [
        { desc: 'Spinmaster' },
        { title: 'Registration', desc: 'Finished' },
        { title: 'Your position', desc: '' },
        { title: 'Registered', desc: '' }
      ]
    },
    {
      id: 2,
      type: 'finished',
      image: 'games/game-image-2.jpg',
      description: [
        { desc: 'Spinmaster' },
        { title: 'Registration', desc: 'Finished' },
        { title: 'Your position', desc: '' },
        { title: 'Registered', desc: '' }
      ]
    }
  ]
};
