import React, { useState } from 'react';
import './app.scss';
import Header from '../header';
import RandomBird from '../random-bird';
import AnswerList from '../answer-list';
import BirdDetails from '../bird-details';
import Button from '../button';
import FinishGame from '../finish-game';
import birdsData from '../../data/birds';

const App = () => {
  const [isFinished, setIsFinished] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [category, setCategory] = useState(0);

  const onNextClickHandler = () => {
    console.log(category);
    if (category === birdsData.length - 1) {
      setIsFinished(true);
      setCategory(0);
    } else {
      setCategory(category + 1);
    }
  };

  const onFinishClickHandler = () => {
    console.log('onFinish!');
    setIsFinished(false);
  };

  return (
    <div className="app">
      <Header activeCategory={category} />
      {!isFinished ? (
        <>
          <RandomBird />
          <div className="row mb2">
            <div className="col-md-6">
              <AnswerList />
            </div>
            <div className="col-md-6">
              <BirdDetails />
            </div>
            <Button active={true} onClickHandler={onNextClickHandler}>
              Next Level
            </Button>
          </div>
        </>
      ) : (
        <FinishGame onFinishClick={onFinishClickHandler} />
      )}
    </div>
  );
};

export default App;
