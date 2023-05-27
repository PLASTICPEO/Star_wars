<template>
  <Menu />
  <router-view></router-view>
</template>
<script setup>
import Menu from "../menu/Menu.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
