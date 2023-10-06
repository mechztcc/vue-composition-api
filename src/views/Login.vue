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
                  v-model="form.email"
                  size="large"
                  data-cy="email"
                >
                  <template #prepend>
                    <el-button :icon="Message" />
                  </template>
                </el-input>
              </div>

              <small v-if="errorFields.email">{{
                errorFields.email[0].message
              }}</small>

              <div class="d-flex-column mt-5">
                <label for="password">Password</label>
                <el-input
                  style="margin-top: 3%"
                  :type="isHide ? 'password' : 'text'"
                  size="large"
                  data-cy="password"
                  v-model="form.password"
                >
                  <template #prepend>
                    <el-button
                      @click="isHide = !isHide"
                      :icon="isHide ? Lock : Unlock"
                      data-cy="lock"
                    >
                    </el-button>
                  </template>
                </el-input>
              </div>

              <small v-if="errorFields.password">
                {{ errorFields.password[0].message }}
              </small>

              <el-button
                style="width: 100%; margin-top: 3%"
                type="primary"
                size="large"
                native-type="submit"
                :loading="response.isFetching"
              >
                Login
              </el-button>
            </el-form>
          </div>
        </template>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import { Lock, Message, Unlock } from '@element-plus/icons-vue';
  import { ref, reactive } from 'vue';
  import { usePost } from '../composables/usePost';
  import type { Rules } from 'async-validator';
  import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator';
  import { useRouter } from 'vue-router';

  const isHide = ref(true);
  const response = ref<any>({});

  const router = useRouter();

  const form = reactive({
    email: '',
    password: '',
  });

  const rules: Rules = {
    password: {
      type: 'string',
      min: 5,
      max: 12,
      required: true,
      message: 'Invalid Password',
    },
    email: [
      {
        type: 'email',
        required: true,
        message: 'Email is required field',
      },
    ],
  };

  const { pass, errorFields } = useAsyncValidator(form, rules);

  const onSubmit = async () => {
    if (!pass.value) return;

    response.value = await usePost({
      payload: { email: form.email, password: form.password },
    });

    if (response.value.data) {
      router.push({ name: 'Signin' });
    }
  };
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
