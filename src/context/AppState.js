import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';
import { MAX_ITEM, MIN_ITEM } from '../utils/constants';
import getRandomItem from '../utils/getRandomItem';

export const AppContext = createContext({});

export const AppState = ({ children }) => {
  const initialState = {
    isFinished: false,
    isAnswered: false,
    category: 0,
    score: 0,
    scorePoint: MAX_ITEM,
    selectedBird: null,
    randomBirdItem: getRandomItem(MIN_ITEM, MAX_ITEM),
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
