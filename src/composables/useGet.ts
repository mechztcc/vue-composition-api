import { useFetch } from '@vueuse/core';
import { IRequestGet } from '../types/request.interface';
import { useAppStore } from '../stores/useAppStore';

const url = 'https://reservadireta-hmg-api.info';

export function useGet(request: IRequestGet) {
  const store = useAppStore();
  const path = request.path ? `${url}/${request.path}` : url;

  return useFetch(`${path}`, {
    beforeFetch({ options }) {
      const myToken = store.token;
      options.headers = {
        ...options.headers,
        Authorization: myToken,
      };

      return {
        options,
      };
    },
    onFetchError({ data }) {
      alert(data);
      return data;
    },
  }).json();
}
