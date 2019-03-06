import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import SeasonStats from '../components/SeasonStats';
import PlayoffStats from '../components/PlayoffStats';

const Player = ({
  id,
  name,
  currentTeam,
  position,
  shootsCatches,
  age,
  height,
  weight,
  nationality,
}) => {
  if (id === '') {
    return (
      <main>
        <h1>Invalid player id</h1>
      </main>
    );
  }

  return (
    <main>
      <section>
        <h1>{name}</h1>
        <p>
          <strong>{currentTeam}</strong>
        </p>
        <p>{`Position: ${position} • Shoots/Catches: ${shootsCatches}`}</p>
        <p>{`Age ${age} • ${height} • ${weight} lbs • ${nationality}`}</p>
      </section>

      <section>
        <SeasonStats id={id} position={position} />
      </section>
      <section>
        <PlayoffStats id={id} position={position} />
      </section>
    </main>
  );
};

Player.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  currentTeam: PropTypes.string,
  position: PropTypes.string,
  shootsCatches: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.string,
  weight: PropTypes.number,
  nationality: PropTypes.string,
};

Player.defaultProps = {
  id: '',
  name: '',
  currentTeam: '',
  position: '',
  shootsCatches: '',
  age: undefined,
  height: '',
  weight: undefined,
  nationality: '',
};

Player.getInitialProps = async ({ query }) => {
  try {
    const res = await fetch(
      `https://statsapi.web.nhl.com/api/v1/people/${query.id}`,
    );
    const json = await res.json();
    const [person] = json.people;

    return {
      id: query.id,
      name: person.fullName,
      currentTeam: person.currentTeam.name,
      position: person.primaryPosition.name,
      shootsCatches: person.shootsCatches,
      age: person.currentAge,
      height: person.height,
      weight: person.weight,
      nationality: person.nationality,
    };
  } catch {
    return {};
  }
};

export default Player;
