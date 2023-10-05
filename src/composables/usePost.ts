import { useFetch } from '@vueuse/core';
import { IRequestPost } from '../types/request.interface';

const url = 'https://reservadireta-hmg-api.info/auth/signin';

export function usePost(request: IRequestPost) {
  const path = request.path ? `${url}/${request.path}` : url;
  return useFetch(`${path}`, {
    immediate: false,
    beforeFetch({ options }) {
      const myToken = 'token';
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${myToken}`,
      };

      return {
        options,
      };
    },
    onFetchError({ data }) {
      alert(data);
      return data;
    },
  }).post(request.payload);
}
