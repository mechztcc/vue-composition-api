<template>
  <el-container>
    <el-row :gutter="20">
      <el-col :sm="24" :md="12" v-for="(item, index) in data" :key="index">
        <ReservationCard :data="item" />
      </el-col>
    </el-row>
  </el-container>
</template>

<script setup lang="ts">
  import { useGet } from '../composables/useGet.ts';

  const { data, isFetching } = useGet({ path: 'reservation/get-all' });

  console.log(data);
</script>

<style scoped></style>
