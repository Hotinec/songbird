import React from 'react';
import './answer-list.scss';
import AnswerItem from './answer-item';

const AnswerList = ({ birds, onAnswerClick, randomBirdId, isAnswered }) => {
  const birdsItems = birds.map((item) => {
    return (
      <AnswerItem
        key={item.id}
        bird={item}
        onAnswerClick={onAnswerClick}
        randomBirdId={randomBirdId}
        isAnswered={isAnswered}
      />
    );
  });

  return <ul className="answer-list list-group">{birdsItems}</ul>;
};

export default AnswerList;
