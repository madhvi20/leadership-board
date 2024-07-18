export const ADD_SCORE = 'ADD_SCORE';

interface AddScoreAction {
  type: typeof ADD_SCORE;
  payload: {
    username: string;
    score: string;
  };
}

export const addScore = (data: { username: string; score: string }): AddScoreAction => ({
  type: ADD_SCORE,
  payload: data,
});

export type ScoreActionTypes = AddScoreAction;
