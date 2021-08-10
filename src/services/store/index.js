import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import contactReducer from '../reducers/contactReducer';
import alertReducer from '../reducers/alertReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  contact: contactReducer,
  alert: alertReducer,
});
const middlewares = [thunk, logger];
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(...middlewares));
};
export default configureStore;
