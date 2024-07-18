import { createStore } from 'redux';
import scoreReducer from './reducers';

const store = createStore(scoreReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
