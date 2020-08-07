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
        <h5 className="pt-4">Tеперь ты знаешь кто чирикнул!</h5>
        <Button active={true} onClickHandler={onFinishClick}>
          Попробовать еще раз!
        </Button>
      </div>
    );
  }

  return (
    <div className="jumbotron text-center finish-game">
      <h1>Поздравляем!</h1>
      <p>
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
