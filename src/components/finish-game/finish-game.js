import React from 'react';
import Button from '../button';

const FinishGame = ({ onFinishClick, score }) => {
  return (
    <div className="jumbotron finish-game">
      <h1 className="text-center">Поздравляем!</h1>
      <p className="text-center">
        Вы прошли викторину и набрали {score} из 30 возможных баллов
      </p>
      <hr className="my-4" />
      <Button active={true} onClickHandler={onFinishClick}>
        Попробовать еще раз!
      </Button>
    </div>
  );
};

export default FinishGame;
