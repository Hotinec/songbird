import React, { useState, useEffect } from 'react';
import './answer-list.scss';
import success from '../../assets/success.mp3';
import error from '../../assets/error.mp3';

const AnswerItem = ({ bird, onAnswerClick, randomBirdId, isAnswered }) => {
  const [additionalClass, setAdditionalClass] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setAdditionalClass('');
    setIsClicked(false);
  }, [bird]);

  const handleAnswerClick = () => {
    if (isAnswered || isClicked) {
      return;
    }

    if (randomBirdId === bird.id) {
      setAdditionalClass('success');
      new Audio(success).play();
    } else {
      setAdditionalClass('error');
      new Audio(error).play();
    }

    setIsClicked(true);
    onAnswerClick(bird.id);
  };

  return (
    <li
      className={`list-group-item ${additionalClass}`}
      key={bird.id}
      onClick={handleAnswerClick}
    >
      <span className="answer-btn"></span>
      {bird.name}
    </li>
  );
};

export default AnswerItem;
