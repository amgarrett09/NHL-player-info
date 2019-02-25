import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import SeasonStats from '../components/SeasonStats';

const Player = ({
  id, name, currentTeam, position, shootsCatches,
}) => (
  <main>
    <section>
      <h1>{name}</h1>
      <p><strong>{currentTeam}</strong></p>
      <p>{`Position: ${position} • Shoots/Catches: ${shootsCatches}`}</p>
    </section>

    <section>
      <SeasonStats id={id} />
    </section>
  </main>
);

Player.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  currentTeam: PropTypes.string,
  position: PropTypes.string,
  shootsCatches: PropTypes.string,
};

Player.defaultProps = {
  id: '',
  name: '',
  currentTeam: '',
  position: '',
  shootsCatches: '',
};

Player.getInitialProps = async ({ query }) => {
  try {
    const res = await fetch(
      `https://statsapi.web.nhl.com/api/v1/people/${query.id}`,
    );
    const json = await res.json();
    const [person] = json.people;

    return ({
      id: query.id,
      name: person.fullName,
      currentTeam: person.currentTeam.name,
      position: person.primaryPosition.name,
      shootsCatches: person.shootsCatches,
    });
  } catch {
    return {};
  }
};

export default Player;
