import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { legacy_createStore as createStore } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
