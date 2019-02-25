import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

import GoalieTable from './GoalieTable';

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
      const { position } = this.props;
      const { stats, loaded } = this.state;
      return (
        <div>
          <h2>Regular Season Stats</h2>
          { loaded && position === 'Goalie' && <GoalieTable stats={stats} />}
        </div>
      );
    }
}

export default SeasonStats;
