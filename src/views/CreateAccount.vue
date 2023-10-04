<template>
  <el-row>
    <el-col :sm="24" :md="24">
      <el-card>
        <template #header>
          <div class="card-header">
            <h3>Log in to an account</h3>
            <span>
              Sign in to your already existing account by filling fields below
            </span>

            <div class="d-flex-column mt-5">
              <label for="name">Name</label>
              <el-input class="mt-5" v-model="name" size="large" data-cy="name">
                <template #prepend>
                  <el-button :icon="User" />
                </template>
              </el-input>
            </div>

            <div class="d-flex-column mt-5">
              <label for="email">Email</label>
              <el-input
                class="mt-5"
                v-model="email"
                size="large"
                data-cy="email"
              >
                <template #prepend>
                  <el-button :icon="Message" />
                </template>
              </el-input>
            </div>

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

            <el-button
              style="width: 100%; margin-top: 3%"
              type="primary"
              size="large"
            >
              Login
            </el-button>
          </div>
        </template>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
  import { ref } from 'vue';
  import { Lock, Message, Unlock, User } from '@element-plus/icons-vue';

  const name = ref('');
  const email = ref('');
  const password = ref('');
  const isHide = ref(true);
</script>
<style scoped></style>
