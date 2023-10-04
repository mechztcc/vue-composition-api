<template>
  <el-row>
    <el-col :sm="24" :md="24">
      <el-card>
        <template #header>
          <div class="card-header">
            <el-form @submit.prevent="onSubmit">
              <h3>Log in to an account</h3>
              <span>
                Sign in to your already existing account by filling fields below
              </span>

              <div class="d-flex-column mt-5">
                <label for="email">Email</label>
                <el-input
                  class="mt-5"
                  v-model="email"
                  size="large"
                  data-cy="email"
                  rules="required | email "
                >
                  <template #prepend>
                    <el-button :icon="Message" />
                  </template>
                </el-input>
              </div>
              <span>{{ errors.email }}</span>

              <div class="d-flex-column mt-5">
                <label for="email">Password</label>
                <el-input
                  style="margin-top: 3%"
                  :type="isHide ? 'password' : 'text'"
                  size="large"
                  data-cy="password"
                  v-model="password"
                >
                  <template #prepend>
                    <el-button
                      @click="isHide = !isHide"
                      :icon="isHide ? Lock : Unlock"
                      data-cy="submit"
                    >
                    </el-button>
                  </template>
                </el-input>
              </div>

              <span>{{ errors.password }}</span>

              <el-button
                style="width: 100%; margin-top: 3%"
                type="primary"
                size="large"
                native-type="submit"
                :loading="isFetching"
              >
                Login
              </el-button>
            </el-form>

            <span>{{ error }}</span>
          </div>
        </template>
      </el-card>
    </el-col>
    <Test />
  </el-row>
</template>

<script setup>
  import { Lock, Message, Unlock } from '@element-plus/icons-vue';
  import { useField, useForm } from 'vee-validate';
  import { toTypedSchema } from '@vee-validate/zod';
  import { ref } from 'vue';
  import * as zod from 'zod';
  import { useFetch } from '@vueuse/core';

  const url = 'https://reservadireta-hmg-api.info/auth/signin';

  const isHide = ref(true);

  const validationSchema = toTypedSchema(
    zod.object({
      email: zod
        .string()
        .nonempty('This is required')
        .email({ message: 'Must be a valid email' }),
      password: zod
        .string()
        .nonempty('This is required')
        .min(8, { message: 'Too short' }),
    })
  );

  const { handleSubmit, errors } = useForm({
    validationSchema,
  });

  const { value: email } = useField('email');
  const { value: password } = useField('password');

  const onSubmit = handleSubmit(async () => {
    const { isFetching, execute, error, data } = useFetch(url, {
      method: 'POST',
      body: JSON.stringify({ email: email.value, password: password.value }),
    });
  });
</script>

<style>
  .d-flex-column {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }

  .mt-5 {
    margin-top: 3%;
  }
</style>
