// Action types
const SET_TOKEN = 'SET_TOKEN';

// Action creators
export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

// Reducer
const initialState = {
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
