import React from 'react';
import './finish-game.scss';
import Button from '../button';

const FinishGame = ({ onFinishClick }) => {
  return (
    <div className="jumbotron finish-game">
      <h1 className="text-center">Поздравляем!</h1>
      <p className="text-center">
        Вы прошли викторину и набрали 24 из 30 возможных баллов
      </p>
      <hr className="my-4" />
      <Button active={true} onClickHandler={onFinishClick}>
        Попробовать еще раз!
      </Button>
    </div>
  );
};

export default FinishGame;
