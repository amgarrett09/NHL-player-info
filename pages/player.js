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
        <p>{`${height} • ${weight} lbs • ${nationality}`}</p>
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
    const {
      fullName,
      primaryPosition,
      shootsCatches,
      height,
      weight,
      nationality,
    } = person;

    let currentTeam;

    if (person.currentTeam) {
      currentTeam = person.currentTeam.name;
    }

    return {
      id: query.id,
      name: fullName,
      position: primaryPosition.name,
      currentTeam,
      shootsCatches,
      height,
      weight,
      nationality,
    };
  } catch (err) {
    return {};
  }
};

export default Player;
