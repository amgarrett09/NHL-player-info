import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

const Player = ({ name, currentTeam }) => (
  <main>
    <h1>{name}</h1>
    <h2>{currentTeam}</h2>
  </main>
);

Player.propTypes = {
  name: PropTypes.string,
  currentTeam: PropTypes.string,
};

Player.defaultProps = {
  name: '',
  currentTeam: '',
};

Player.getInitialProps = async ({ query }) => {
  try {
    const res = await fetch(
      `https://statsapi.web.nhl.com/api/v1/people/${query.id}`,
    );
    const json = await res.json();

    return ({
      name: json.people[0].fullName,
      currentTeam: json.people[0].currentTeam.name,
    });
  } catch {
    return {};
  }
};

export default Player;
