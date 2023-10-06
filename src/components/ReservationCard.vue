<template>
  <el-card class="mt-5">
    <el-row>
      <el-col :sm="14">
        <el-button style="width: 100%">{{ props.data.statusName }}</el-button>
      </el-col>
      <el-col :sm="10">
        <el-button> Ver Reserva </el-button>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :sm="8" class="d-flex">
        <img class="img" :src="`${url}${data.image}`" alt="" />
      </el-col>
      <el-col :sm="16">
        <div class="d-flex-column mt-5">
          <span>Data da reserva</span>
          <span
            >{{ useDateFormat(data.checkin, 'DD/MM') }} /
            {{ useDateFormat(data.checkout, 'DD/MM') }}
          </span>
        </div>

        <div class="d-flex-column mt-5">
          <span>Código da reserva</span>
          <span>{{ data.codeTransaction }}</span>
        </div>

        <div class="d-flex-column mt-5">
          <span>Valor</span>
          <span>{{ data.price }}</span>
        </div>

        <div class="d-flex-column mt-5">
          <span>Data do envio</span>
          <span>{{ useDateFormat(data.sendDate, 'DD/MM/YYYY HH:mm') }}</span>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup lang="ts">
  import { defineProps, ref } from 'vue';
  import { useDateFormat } from '@vueuse/core';

  const props = defineProps(['data']);

  const url = ref(`https://reservadireta-hmg-api.info/file/`);
</script>

<style scoped>
  .d-flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img {
    min-width: 200px;
    max-width: 200px;
    min-height: 200px;
    min-height: 200px;
    object-fit: cover;
  }
</style>
