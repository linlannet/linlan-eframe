<template>
  <a-button type="primary" block style="text-align: left">一体化平台前端框架</a-button>
  <p />
  <br />


  <br />
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
const vueRouter = useRouter();
const data = vueRouter.getRoutes();
// const data = JSON.stringify(vueRouter.getRoutes());
</script>

<style lang="less"></style>
