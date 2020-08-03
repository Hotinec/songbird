import React, { useState } from 'react';
import Header from '../header';
import RandomBird from '../random-bird';
import AnswerList from '../answer-list';
import BirdDetails from '../bird-details';
import Button from '../button';
import FinishGame from '../finish-game';
import birdsData from '../../data/birds';
import getRandomItem from '../../utils/getRandomItem';

const minItem = 0;
const maxItem = 5;

const App = () => {
  const [isFinished, setIsFinished] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [category, setCategory] = useState(0);
  const [score, setScore] = useState(0);
  const [scorePoint, setScorePoint] = useState(5);
  const [selectedBird, setSelectedBird] = useState(null);
  const [randomBirdItem, setRandomBirdItem] = useState(
    getRandomItem(minItem, maxItem)
  );

  const randomBird = birdsData[category][randomBirdItem];

  const onNextClickHandler = () => {
    if (!isAnswered) {
      return;
    }

    if (category === birdsData.length - 1) {
      setIsFinished(true);
      setCategory(0);
    } else {
      setCategory(category + 1);
      setRandomBirdItem(getRandomItem(minItem, maxItem));
    }

    setIsAnswered(false);
    setSelectedBird(null);
    setScorePoint(5);
  };

  const onFinishClickHandler = () => {
    setIsFinished(false);
    setScore(0);
    setScorePoint(5);
  };

  const onAnswerClickHandler = (id) => {
    setSelectedBird(birdsData[category].find((bird) => bird.id === id));

    if (randomBird.id === id) {
      setIsAnswered(true);
      setScore(score + scorePoint);
    } else {
      setScorePoint(scorePoint - 1);
    }
  };

  return (
    <div className="app">
      <Header activeCategory={category} score={score} />
      {!isFinished ? (
        <>
          <RandomBird
            bird={birdsData[category][randomBirdItem]}
            isAnswered={isAnswered}
            randomBird={randomBird}
          />
          <div className="row mb2">
            <div className="col-md-6">
              <AnswerList
                birds={birdsData[category]}
                onAnswerClick={onAnswerClickHandler}
                randomBirdId={randomBird.id}
                isAnswered={isAnswered}
              />
            </div>
            <div className="col-md-6">
              <BirdDetails selectedBird={selectedBird} />
            </div>
            <Button active={isAnswered} onClickHandler={onNextClickHandler}>
              Next Level
            </Button>
          </div>
        </>
      ) : (
        <FinishGame onFinishClick={onFinishClickHandler} score={score} />
      )}
    </div>
  );
};

export default App;
