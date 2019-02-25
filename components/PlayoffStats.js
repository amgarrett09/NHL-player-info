import fetch from 'isomorphic-unfetch';
import SeasonStats from './SeasonStats';

class PlayoffStats extends SeasonStats {
  state = {
    stats: [],
    career: {},
    loaded: false,
  };

  async componentDidMount() {
    try {
      const { id } = this.props;
      const [statsRes, careerRes] = await Promise.all([
        fetch(
          `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=yearByYearPlayoffs`,
        ),
        fetch(
          `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=careerPlayoffs`,
        ),
      ]);

      const [statsJson, careerJson] = await Promise.all([
        statsRes.json(),
        careerRes.json(),
      ]);

      const nhlStats = statsJson.stats[0].splits.filter(
        obj => obj.league.name === 'National Hockey League',
      );

      const careerStats = careerJson.stats[0].splits[0].stat;

      this.setState({
        stats: nhlStats,
        career: careerStats,
        loaded: true,
      });
    } catch (err) {
      this.setState({
        stats: [],
        career: {},
        loaded: false,
      });
    }
  }
}

export default PlayoffStats;
