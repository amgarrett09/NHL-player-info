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
};
