import React, { useContext } from 'react';
import './header.scss';
import logo from '../../assets/logo.4f82cd73.svg';
import { AppContext } from '../../context/AppState';

const categories = [
  'Разминка',
  'Воробьиные',
  'Лесные птицы',
  'Певчие птицы',
  'Хищные птицы',
  'Морские птицы',
];

const Header = () => {
  const {
    state: { category, score, isFinished },
  } = useContext(AppContext);
  const categoriesItems = categories.map((item, indx) => {
    const active = category === indx && !isFinished ? 'active' : '';

    return (
      <li className={`page-item ${active}`} key={`${item}_${indx}`}>
        <a className="page-link" href="/#">
          {item}
        </a>
      </li>
    );
  });

  return (
    <div className="header d-flex">
      <div className="d-flex header-top">
        <img src={logo} alt="logo" />
        <h5>
          Score: <span className="score">{score}</span>
        </h5>
      </div>
      <ul className="pagination">{categoriesItems}</ul>
    </div>
  );
};

export default Header;
