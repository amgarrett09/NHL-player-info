import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

class SeasonStats extends React.Component { // eslint-disable-line no-undef
    state = {
      stats: [],
    }

    static propTypes = {
      id: PropTypes.string,
    }

    static defaultProps = {
      id: '',
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
        });
      } catch (err) {
        console.error(err);
      }
    }

    render() {
      return <h2>Regular Season Stats</h2>;
    }
}

export default SeasonStats;
