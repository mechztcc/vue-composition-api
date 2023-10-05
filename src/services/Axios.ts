import axios from 'redaxios';
import { IRequestPost } from '../types/request.interface';

const url = 'https://reservadireta-hmg-api.info/auth/signin';

export const login = async (request: IRequestPost) => {
  const { data, status } = await axios.post(url, request.payload);

  if (data.error) {
    alert(data.error);
  }
  if (!data.error) {
    return data;
  }
};
