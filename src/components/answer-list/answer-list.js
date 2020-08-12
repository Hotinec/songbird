import React, { useContext, useEffect } from 'react';
import './answer-list.scss';
import birdsData from '../../data/birds';
import AnswerItem from './answer-item';
import { AppContext } from '../../context/AppState';
import {
  setIsAnswered,
  setScore,
  setScorePoint,
  setSelectedBird,
} from '../../context/actions';

const AnswerList = () => {
  const {
    state: { category, randomBirdItem, score, scorePoint },
    dispatch,
  } = useContext(AppContext);

  const birds = birdsData[category];
  const randomBird = birdsData[category][randomBirdItem];

  useEffect(() => {
    console.log('Correct answer: ', randomBird.name);
  }, [randomBird.name]);

  const onAnswerClick = (id, wasClicked) => {
    dispatch(
      setSelectedBird(birdsData[category].find((bird) => bird.id === id))
    );

    if (wasClicked) {
      return;
    }

    if (randomBird.id === id) {
      dispatch(setIsAnswered(true));
      dispatch(setScore(score + scorePoint));
    } else {
      dispatch(setScorePoint(scorePoint - 1));
    }
  };

  const birdsItems = birds.map((item) => {
    return (
      <AnswerItem
        key={item.id}
        bird={item}
        randomBirdId={randomBird.id}
        onAnswerClick={onAnswerClick}
      />
    );
  });

  return <ul className="answer-list list-group">{birdsItems}</ul>;
};

export default AnswerList;
