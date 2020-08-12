export const setRandomBirdItem = () => ({
  type: 'SET_RANDOM_BIRD_ITEM',
});

export const setIsFinished = (payload) => ({
  type: 'SET_IS_FINISHED',
  payload,
});

export const setIsAnswered = (payload) => ({
  type: 'SET_IS_ANSWERED',
  payload,
});

export const setCategory = (payload) => ({
  type: 'SET_CATEGORY',
  payload,
});

export const setScore = (payload) => ({
  type: 'SET_SCORE',
  payload,
});

export const setScorePoint = (payload) => ({
  type: 'SET_SCORE_POINT',
  payload,
});

export const setSelectedBird = (payload) => ({
  type: 'SET_SELECTED_BIRD',
  payload,
});
