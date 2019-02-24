import { withRouter } from 'next/router';

const Player = withRouter(({ router }) => (
  <main>
    <h1>{router.query.id}</h1>
  </main>
));

export default Player;
