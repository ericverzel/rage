import { combineReducers } from 'redux';
import duelsReducer from './duelsReducer';

export default combineReducers({
  duels: duelsReducer,
  // ... other reducers as your app grows
});
