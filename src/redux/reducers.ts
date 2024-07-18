import { ADD_SCORE, ScoreActionTypes } from './actions';

interface ScoreState {
  scores: { username: string; score: string }[];
}

const initialState: ScoreState = {
  scores: [],
};

const scoreReducer = (state = initialState, action: ScoreActionTypes): ScoreState => {
  switch (action.type) {
    case ADD_SCORE:
      const updatedScores = [...state.scores, action.payload].sort((a, b) => {
        const timeA = a.score.split(':').map(Number);
        const timeB = b.score.split(':').map(Number);
        return timeA[0] - timeB[0] || timeA[1] - timeB[1] || timeA[2] - timeB[2];
      }).slice(0, 10);
      return { ...state, scores: updatedScores };
    default:
      return state;
  }
};

export default scoreReducer;
