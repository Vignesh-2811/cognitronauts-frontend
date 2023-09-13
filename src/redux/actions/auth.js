import axios from '../../axios-api';
import { ADD_JWT_TOKEN } from './types';

export const submitRegisterEvent = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/users/signup', data, config);
    return res.status;
  } catch (error) {
    return error.response;
  }
};

export const loginEvent = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/users/login', data, config);
    dispatch({
      type: ADD_JWT_TOKEN,
      payload: res.data.accessToken,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};
