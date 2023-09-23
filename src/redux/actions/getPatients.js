import axios from '../../axios-api';

export const getUnassignedPatient = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.get('/api/users/getUnassignedPatient', config);
    return res;
  } catch (error) {
    return error.response;
  }
};
