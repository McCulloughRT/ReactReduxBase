import Immutable from 'immutable';

export default function ReducerOne(state = null, action) {
  switch(action.type){
    case 'CASE': {
      return state.set('PROPERTY', action.payload);
    }

    default: return state;
  }

  return state;
}
