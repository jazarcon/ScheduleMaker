import { combineReducers } from 'redux';

// Example reducer
const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  example: exampleReducer,
});