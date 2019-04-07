const stats = [
  {
    season: '20162017',
    stat: {
      timeOnIce: '63:45',
      assists: 0,
      goals: 0,
      pim: 0,
      shots: 3,
      games: 7,
      hits: 12,
      powerPlayGoals: 0,
      powerPlayPoints: 0,
      powerPlayTimeOnIce: '00:22',
      evenTimeOnIce: '63:23',
      penaltyMinutes: '0',
      faceOffPct: 50.0,
      shotPct: 0.0,
      gameWinningGoals: 0,
      overTimeGoals: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '00:00',
      blocked: 0,
      plusMinus: -1,
      points: 0,
      shifts: 90,
    },
    team: {
      id: 17,
      name: 'Detroit Red Wings',
      link: '/api/v1/teams/17',
    },
    league: {
      id: 133,
      name: 'National Hockey League',
      link: '/api/v1/league/133',
    },
    sequenceNumber: 1,
  },
  {
    season: '20162017',
    stat: {
      assists: 25,
      goals: 12,
      pim: 37,
      games: 48,
      penaltyMinutes: '37',
      plusMinus: 15,
      points: 37,
    },
    team: {
      name: 'Grand Rapids Griffins',
      link: '/api/v1/teams/null',
    },
    league: {
      name: 'AHL',
      link: '/api/v1/league/null',
    },
    sequenceNumber: 978,
  },
  {
    season: '20172018',
    stat: {
      timeOnIce: '691:12',
      assists: 17,
      goals: 7,
      pim: 39,
      shots: 83,
      games: 48,
      hits: 53,
      powerPlayGoals: 1,
      powerPlayPoints: 2,
      powerPlayTimeOnIce: '68:25',
      evenTimeOnIce: '617:34',
      penaltyMinutes: '39',
      faceOffPct: 12.5,
      shotPct: 8.4,
      gameWinningGoals: 1,
      overTimeGoals: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '05:13',
      blocked: 38,
      plusMinus: -7,
      points: 24,
      shifts: 901,
    },
    team: {
      id: 17,
      name: 'Detroit Red Wings',
      link: '/api/v1/teams/17',
    },
    league: {
      id: 133,
      name: 'National Hockey League',
      link: '/api/v1/league/133',
    },
    sequenceNumber: 1,
  },
  {
    season: '20172018',
    stat: {
      assists: 7,
      goals: 7,
      pim: 34,
      games: 16,
      penaltyMinutes: '34',
      plusMinus: -5,
      points: 14,
    },
    team: {
      name: 'Grand Rapids Griffins',
      link: '/api/v1/teams/null',
    },
    league: {
      name: 'AHL',
      link: '/api/v1/league/null',
    },
    sequenceNumber: 978,
  },
  {
    season: '20182019',
    stat: {
      timeOnIce: '1184:04',
      assists: 26,
      goals: 21,
      pim: 36,
      shots: 130,
      games: 72,
      hits: 74,
      powerPlayGoals: 3,
      powerPlayPoints: 6,
      powerPlayTimeOnIce: '121:37',
      evenTimeOnIce: '1061:16',
      penaltyMinutes: '36',
      faceOffPct: 33.33,
      shotPct: 16.2,
      gameWinningGoals: 4,
      overTimeGoals: 1,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '01:11',
      blocked: 38,
      plusMinus: 12,
      points: 47,
      shifts: 1525,
    },
    team: {
      id: 17,
      name: 'Detroit Red Wings',
      link: '/api/v1/teams/17',
    },
    league: {
      id: 133,
      name: 'National Hockey League',
      link: '/api/v1/league/133',
    },
    sequenceNumber: 1,
  },
];

const career = {
  timeOnIce: '1939:01',
  assists: 43,
  goals: 28,
  pim: 75,
  shots: 216,
  games: 127,
  hits: 139,
  powerPlayGoals: 4,
  powerPlayPoints: 8,
  powerPlayTimeOnIce: '190:24',
  evenTimeOnIce: '1742:13',
  penaltyMinutes: '75',
  faceOffPct: 30.0,
  shotPct: 13.0,
  gameWinningGoals: 5,
  overTimeGoals: 1,
  shortHandedGoals: 0,
  shortHandedPoints: 0,
  shortHandedTimeOnIce: '06:24',
  blocked: 76,
  plusMinus: 4,
  points: 71,
  shifts: 2516,
  timeOnIcePerGame: '15:16',
  evenTimeOnIcePerGame: '13:43',
  shortHandedTimeOnIcePerGame: '00:03',
  powerPlayTimeOnIcePerGame: '01:29',
};

const lastFive = [
  {
    season: '20182019',
    stat: {
      timeOnIce: '20:25',
      assists: 0,
      goals: 0,
      pim: 4,
      shots: 4,
      games: 1,
      hits: 1,
      powerPlayGoals: 0,
      powerPlayPoints: 0,
      powerPlayTimeOnIce: '02:40',
      evenTimeOnIce: '17:45',
      penaltyMinutes: '4',
      shotPct: 0.0,
      gameWinningGoals: 0,
      overTimeGoals: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '00:00',
      blocked: 0,
      plusMinus: -1,
      points: 0,
      shifts: 24,
    },
    team: {
      id: 17,
      name: 'Detroit Red Wings',
      link: '/api/v1/teams/17',
    },
    opponent: {
      id: 5,
      name: 'Pittsburgh Penguins',
      link: '/api/v1/teams/5',
    },
    date: '2019-04-04',
    isHome: false,
    isWin: false,
    isOT: false,
    game: {
      gamePk: 2018021245,
      link: '/api/v1/game/2018021245/feed/live',
      content: {
        link: '/api/v1/game/2018021245/content',
      },
    },
  }, {
    season: '20182019',
    stat: {
      timeOnIce: '19:26',
      assists: 1,
      goals: 2,
      pim: 0,
      shots: 5,
      games: 1,
      hits: 0,
      powerPlayGoals: 1,
      powerPlayPoints: 1,
      powerPlayTimeOnIce: '00:22',
      evenTimeOnIce: '18:48',
      penaltyMinutes: '0',
      shotPct: 40.0,
      gameWinningGoals: 1,
      overTimeGoals: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '00:16',
      blocked: 0,
      plusMinus: 2,
      points: 3,
      shifts: 27,
    },
    team: {
      id: 17,
      name: 'Detroit Red Wings',
      link: '/api/v1/teams/17',
    },
    opponent: {
      id: 5,
      name: 'Pittsburgh Penguins',
      link: '/api/v1/teams/5',
    },
    date: '2019-04-02',
    isHome: true,
    isWin: true,
    isOT: false,
    game: {
      gamePk: 2018021233,
      link: '/api/v1/game/2018021233/feed/live',
      content: {
        link: '/api/v1/game/2018021233/content',
      },
    },
  }, {
    season: '20182019',
    stat: {
      timeOnIce: '16:18',
      assists: 3,
      goals: 0,
      pim: 0,
      shots: 1,
      games: 1,
      hits: 0,
      powerPlayGoals: 0,
      powerPlayPoints: 2,
      powerPlayTimeOnIce: '04:20',
      evenTimeOnIce: '11:51',
      penaltyMinutes: '0',
      shotPct: 0.0,
      gameWinningGoals: 0,
      overTimeGoals: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '00:07',
      blocked: 1,
      plusMinus: 1,
      points: 3,
      shifts: 22,
    },
    team: {
      id: 17,
      name: 'Detroit Red Wings',
      link: '/api/v1/teams/17',
    },
    opponent: {
      id: 6,
      name: 'Boston Bruins',
      link: '/api/v1/teams/6',
    },
    date: '2019-03-31',
    isHome: true,
    isWin: true,
    isOT: false,
    game: {
      gamePk: 2018021219,
      link: '/api/v1/game/2018021219/feed/live',
      content: {
        link: '/api/v1/game/2018021219/content',
      },
    },
  }, {
    season: '20182019',
    stat: {
      timeOnIce: '16:19',
      assists: 2,
      goals: 1,
      pim: 0,
      shots: 4,
      games: 1,
      hits: 2,
      powerPlayGoals: 0,
      powerPlayPoints: 0,
      powerPlayTimeOnIce: '01:00',
      evenTimeOnIce: '15:19',
      penaltyMinutes: '0',
      shotPct: 25.0,
      gameWinningGoals: 0,
      overTimeGoals: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '00:00',
      blocked: 0,
      plusMinus: 3,
      points: 3,
      shifts: 20,
    },
    team: {
      id: 17,
      name: 'Detroit Red Wings',
      link: '/api/v1/teams/17',
    },
    opponent: {
      id: 1,
      name: 'New Jersey Devils',
      link: '/api/v1/teams/1',
    },
    date: '2019-03-29',
    isHome: true,
    isWin: true,
    isOT: false,
    game: {
      gamePk: 2018021199,
      link: '/api/v1/game/2018021199/feed/live',
      content: {
        link: '/api/v1/game/2018021199/content',
      },
    },
  }, {
    season: '20182019',
    stat: {
      timeOnIce: '16:58',
      assists: 1,
      goals: 2,
      pim: 0,
      shots: 4,
      games: 1,
      hits: 0,
      powerPlayGoals: 1,
      powerPlayPoints: 1,
      powerPlayTimeOnIce: '02:46',
      evenTimeOnIce: '14:12',
      penaltyMinutes: '0',
      shotPct: 50.0,
      gameWinningGoals: 1,
      overTimeGoals: 1,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '00:00',
      blocked: 0,
      plusMinus: 1,
      points: 3,
      shifts: 21,
    },
    team: {
      id: 17,
      name: 'Detroit Red Wings',
      link: '/api/v1/teams/17',
    },
    opponent: {
      id: 7,
      name: 'Buffalo Sabres',
      link: '/api/v1/teams/7',
    },
    date: '2019-03-28',
    isHome: false,
    isWin: true,
    isOT: false,
    game: {
      gamePk: 2018021189,
      link: '/api/v1/game/2018021189/feed/live',
      content: {
        link: '/api/v1/game/2018021189/content',
      },
    },
  },
];

module.exports = {
  stats,
  career,
  lastFive,
};