import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

import GoalieTable from './GoalieTable';
import SkaterTable from './SkaterTable';

class SeasonStats extends React.Component { // eslint-disable-line no-undef
    state = {
      stats: [],
      loaded: false,
    }

    static propTypes = {
      id: PropTypes.string,
      position: PropTypes.string,
    }

    static defaultProps = {
      id: '',
      position: '',
    }

    async componentDidMount() {
      try {
        const { id } = this.props;
        const res = await fetch(
          `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=yearByYear`,
        );
        const json = await res.json();

        const nhlStats = json.stats[0].splits.filter(obj => (
          obj.league.name === 'National Hockey League'
        ));

        this.setState({
          stats: nhlStats,
          loaded: true,
        });
      } catch (err) {
        console.error(err);
      }
    }

    render() {
      let { position } = this.props;
      const { stats, loaded } = this.state;
      if (position !== 'Goalie') {
        position = 'Skater';
      }

      return (
        <div>
          { loaded && position === 'Goalie' && <GoalieTable stats={stats} />}
          { loaded && position === 'Skater' && <SkaterTable stats={stats} />}
        </div>
      );
    }
}

export default SeasonStats;
