import React from 'react';
import './finish-game.scss';
import Button from '../button';
import maxScoreImg from '../../assets/max_score.png';

const MAX_SCORE = 30;

const FinishGame = ({ onFinishClick, score }) => {
  const isMaximum = MAX_SCORE === score;
  if (isMaximum) {
    return (
      <div className="jumbotron text-center finish-game">
        <img src={maxScoreImg} alt="max-score" width="60%" />
        <hr className="my-4" />
        <h3 className="text-center">Вы победили!</h3>
      </div>
    );
  }

  return (
    <div className="jumbotron finish-game">
      <h1 className="text-center">Поздравляем!</h1>
      <p className="text-center">
        Вы прошли викторину и набрали {score} из {MAX_SCORE} возможных баллов
      </p>
      <hr className="my-4" />
      <Button active={true} onClickHandler={onFinishClick}>
        Попробовать еще раз!
      </Button>
    </div>
  );
};

export default FinishGame;
