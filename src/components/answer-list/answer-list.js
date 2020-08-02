import React from 'react';
import './answer-list.scss';

const AnswerList = () => {
  return (
    <ul className="answer-list list-group">
      <li className="list-group-item">
        <span className="answer-btn"></span>
        Ворон
      </li>
      <li className="list-group-item error">
        <span className="answer-btn"></span>
        Журавль
      </li>
      <li className="list-group-item success">
        <span className="answer-btn"></span>
        Ласточка
      </li>
      <li className="list-group-item">
        <span className="answer-btn"></span>
        Козодой
      </li>
      <li className="list-group-item">
        <span className="answer-btn"></span>
        Кукушка
      </li>
      <li className="list-group-item">
        <span className="answer-btn"></span>
        Синица
      </li>
    </ul>
  );
};

export default AnswerList;
