import getRandomItem from '../utils/getRandomItem';
import { MIN_ITEM, MAX_ITEM } from '../utils/constants';

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RANDOM_BIRD_ITEM':
      return {
        ...state,
        randomBirdItem: getRandomItem(MIN_ITEM, MAX_ITEM),
      };

    case 'SET_IS_FINISHED':
      return {
        ...state,
        isFinished: action.payload,
      };

    case 'SET_IS_ANSWERED':
      return {
        ...state,
        isAnswered: action.payload,
      };

    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };

    case 'SET_SCORE':
      return {
        ...state,
        score: action.payload,
      };

    case 'SET_SCORE_POINT':
      return {
        ...state,
        scorePoint: action.payload,
      };

    case 'SET_SELECTED_BIRD':
      return {
        ...state,
        selectedBird: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
