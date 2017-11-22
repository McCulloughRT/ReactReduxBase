import { combineReducers, createStore } from 'redux';
import Immutable from 'immutable';
import ReducerOne from './reducer_one';
import InitialState from './init_state';

const rootReducer = combineReducers({
  mainState: ReducerOne
});

let store = createStore(rootReducer, InitialState);
export default store;
