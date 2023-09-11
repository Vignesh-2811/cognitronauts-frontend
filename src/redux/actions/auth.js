import axios from '../../axios-api';

export const submitRegisterEvent = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/users/signup', data, config);
    return res;
  } catch (error) {
    console.log(error);
  }
};
