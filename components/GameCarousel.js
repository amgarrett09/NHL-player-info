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
  <CarouselProvider
    naturalSlideWidth={200}
    naturalSlideHeight={100}
    totalSlides={games.length}
    visibleSlides={4}
    className="game-carousel"
  >
    <Slider>
      {games.map((game, i) => (
        <Slide key={game.awayTeam + game.homeTeam} index={i} data-test="slide">
          <GameInfo
            awayTeam={game.awayTeam}
            awayScore={game.awayScore}
            homeTeam={game.homeTeam}
            homeScore={game.homeScore}
            gameState={game.gameState}
          />
        </Slide>
      ))}
    </Slider>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
  </CarouselProvider>
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
