import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useAppStore = defineStore('useAppStore', () => {
  let user = reactive({
    name: '',
    profile: '',
    linkProfile: '',
  });

  const token = ref('');

  function setUser(payload) {
    user = payload.user;
    token.value = payload.token;
    console.log(user);
  }

  return { user, setUser, token };
});
