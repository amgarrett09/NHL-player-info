export default {
  prepareBasicInfo(data) {
    try {
      const person = data.people ? data.people[0] : {};
      return {
        name: person.fullName || '',
        position: person.primaryPosition ? person.primaryPosition.name : '',
        shootsCatches: person.shootsCatches || '',
        height: person.height || '',
        weight: person.weight || undefined,
        nationality: person.nationality || '',
        active: person.active || false,
        currentTeam: person.currentTeam ? person.currentTeam.name : undefined,
      };
    } catch (err) {
      throw new Error(err.message);
    }
  },
  preparePlayerStats(data) {
    try {
      // Testing if relevant data exists before doing operations with it
      let seasonStatsExists;
      let careerSeasonExists;
      let playoffStatsExists;
      let careerPlayoffsExists;
      let lastFiveExists;

      if (data.stats) {
        seasonStatsExists = data.stats[0] && data.stats[0].splits;
        careerSeasonExists = data.stats[1] && data.stats[1].splits[0];
        playoffStatsExists = data.stats[2] && data.stats[2].splits;
        careerPlayoffsExists = data.stats[3] && data.stats[3].splits[0];
        lastFiveExists = data.stats[4] && data.stats[4].splits;
      }

      const seasonStats = seasonStatsExists ? data.stats[0].splits.filter(split => (
        split.league.name === 'National Hockey League'
      )) : [];

      const careerSeason = careerSeasonExists ? data.stats[1].splits[0].stat : {};

      const playoffStats = playoffStatsExists ? data.stats[2].splits.filter(split => (
        split.league.name === 'National Hockey League'
      )) : [];

      const careerPlayoffs = careerPlayoffsExists ? data.stats[3].splits[0].stat : {};

      const lastFive = lastFiveExists ? data.stats[4].splits.slice(0, 5) : [];

      return {
        seasonStats,
        careerSeason,
        playoffStats,
        careerPlayoffs,
        lastFive,
      };
    } catch (err) {
      throw new Error(`There was a problem parsing the data: ${err.message}`);
    }
  },
};
