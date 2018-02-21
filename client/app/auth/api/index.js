import axios from 'axios';

type RegisterParams = {
  name: string,
  email: string,
  password: string,
};

export const register = (params: RegisterParams) => {
  console.log('Sending register request with params:', params);

  return axios.post('/users', params)
    .then(response => {
      console.log('Response received:', response);

      return response;
    });
};
