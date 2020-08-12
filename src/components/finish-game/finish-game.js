import React, { useContext } from 'react';
import './finish-game.scss';
import Button from '../button';
import maxScoreImg from '../../assets/max_score.png';
import { MAX_SCORE } from '../../utils/constants';
import { AppContext } from '../../context/AppState';
import { setIsFinished, setScore, setScorePoint } from '../../context/actions';

const FinishGame = () => {
  const {
    state: { score },
    dispatch,
  } = useContext(AppContext);
  const isMaximum = MAX_SCORE === score;

  const onFinishClickHandler = () => {
    dispatch(setIsFinished(false));
    dispatch(setScore(0));
    dispatch(setScorePoint(5));
  };

  if (isMaximum) {
    return (
      <div className="jumbotron text-center finish-game">
        <img src={maxScoreImg} alt="max-score" width="60%" />
        <h5 className="pt-4">Tеперь ты знаешь кто чирикнул!</h5>
        <Button active={true} onClickHandler={onFinishClickHandler}>
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
      <Button active={true} onClickHandler={onFinishClickHandler}>
        Попробовать еще раз!
      </Button>
    </div>
  );
};

export default FinishGame;
