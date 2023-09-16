import { ADD_USER_STATE } from 'redux/actions/types';

const initialState = {
  userData: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER_STATE:
      return {
        ...state,
        userData: payload,
      };

    default:
      return state;
  }
}
