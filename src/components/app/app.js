import React, { useEffect, useContext } from 'react';
import './app.scss';
import Header from '../header';
import RandomBird from '../random-bird';
import AnswerList from '../answer-list';
import BirdDetails from '../bird-details';
import Button from '../button';
import FinishGame from '../finish-game';
import birdsData from '../../data/birds';
import { MAX_ITEM } from '../../utils/constants';
import { AppContext } from '../../context/AppState';
import {
  setRandomBirdItem,
  setIsFinished,
  setCategory,
  setIsAnswered,
  setSelectedBird,
  setScorePoint,
} from '../../context/actions';

const App = () => {
  const {
    state: { randomBirdItem, isAnswered, isFinished, category },
    dispatch,
  } = useContext(AppContext);

  const randomBird = birdsData[category][randomBirdItem];

  useEffect(() => {
    console.log('Correct answer: ', randomBird.name);
  }, [randomBird.name]);

  const onNextClickHandler = () => {
    if (!isAnswered) {
      return;
    }

    if (category === birdsData.length - 1) {
      dispatch(setIsFinished(true));
      dispatch(setCategory(0));
    } else {
      dispatch(setCategory(category + 1));
      dispatch(setRandomBirdItem());
    }

    dispatch(setIsAnswered(false));
    dispatch(setSelectedBird(null));
    dispatch(setScorePoint(MAX_ITEM));
  };

  return (
    <div className="app">
      <Header />
      {!isFinished ? (
        <>
          <RandomBird />
          <div className="row mb2">
            <div className="col-lg-6">
              <AnswerList />
            </div>
            <div className="col-lg-6 m-t">
              <BirdDetails />
            </div>
            <Button active={isAnswered} onClickHandler={onNextClickHandler}>
              Next Level
            </Button>
          </div>
        </>
      ) : (
        <FinishGame />
      )}
    </div>
  );
};

export default App;
