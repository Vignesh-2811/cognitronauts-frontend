import { ADD_USER_STATE } from 'redux/actions/types';

const initialState = {
  role: '',
  email: '',
  phoneNumber: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER_STATE:
      localStorage.setItem('role', payload.role);
      localStorage.setItem('email', payload.email);
      localStorage.setItem('phoneNumber', payload.phoneNumber);
      return {
        ...state,
        role: payload.role,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
      };

    default:
      return state;
  }
}
