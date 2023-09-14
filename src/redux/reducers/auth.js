import {
  ADD_JWT_TOKEN,
  REMOVE_JWT_TOKEN,
  USER_LOGOUT,
  UNAUTH_ERROR,
} from 'redux/actions/types';

const initialState = {
  isAuthenticated: false,
  jwtToken: '',
  userDate: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_JWT_TOKEN:
      localStorage.setItem('token', payload);
      return {
        ...state,
        jwtToken: payload,
        isAuthenticated: true,
      };

    case REMOVE_JWT_TOKEN:
      localStorage.removeItem('token');
      return {
        ...state,
        jwtToken: payload,
        isAuthenticated: false,
      };

    case USER_LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        jwtToken: '',
        isAuthenticated: false,
      };

    default:
      return state;
  }
}
