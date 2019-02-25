import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

import GoalieTable from './GoalieTable';
import SkaterTable from './SkaterTable';

class PlayoffStats extends React.Component { // eslint-disable-line no-undef
  state = {
    stats: [],
    career: {},
    loaded: false,
  };

  static propTypes = {
    id: PropTypes.string,
    position: PropTypes.string,
  };

  static defaultProps = {
    id: '',
    position: '',
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

  render() {
    let { position } = this.props;
    const { stats, career, loaded } = this.state;
    if (position !== 'Goalie') {
      position = 'Skater';
    }

    return (
      <div>
        {loaded && position === 'Goalie' && (
          <GoalieTable stats={stats} career={career} />
        )}
        {loaded && position === 'Skater' && (
          <SkaterTable stats={stats} career={career} />
        )}
      </div>
    );
  }
}

export default PlayoffStats;
