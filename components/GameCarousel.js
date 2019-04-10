import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import PropTypes from 'prop-types';
import GameInfo from './GameInfo';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../css/game-carousel.css';

const GameCarousel = ({ games }) => (
  <React.Fragment>
    {games.length > 0 && (
    <CarouselProvider
      naturalSlideWidth={175}
      naturalSlideHeight={100}
      totalSlides={games.length}
      visibleSlides={games.length > 4 ? 4 : games.length}
      className="game-carousel"
    >
      <ButtonBack className="game-carousel__button">
        <strong>
          <span className="game-carousel__button-text">&lt;</span>
        </strong>
      </ButtonBack>
      <Slider className="game-carousel__slider">
        {games.map((game, i) => (
          <Slide
            key={game.awayTeam + game.homeTeam}
            index={i}
            data-test="slide"
          >
            <GameInfo
              awayTeam={game.awayTeam}
              awayScore={game.awayScore}
              homeTeam={game.homeTeam}
              homeScore={game.homeScore}
              gameState={game.gameState}
              stateCode={game.stateCode}
              gameTime={game.gameTime}
            />
          </Slide>
        ))}
      </Slider>
      <ButtonNext className="game-carousel__button">
        <strong>
          <span className="game-carousel__button-text">&gt;</span>
        </strong>
      </ButtonNext>
    </CarouselProvider>
    )}

    {games.length === 0 && (
      <p><em>None today</em></p>
    )}
  </React.Fragment>
);

GameCarousel.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      awayTeam: PropTypes.string,
      awayScore: PropTypes.number,
      homeTeam: PropTypes.string,
      homeScore: PropTypes.number,
      gameState: PropTypes.string,
    }),
  ).isRequired,
};

export default GameCarousel;
