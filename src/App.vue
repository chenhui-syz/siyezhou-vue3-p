<template>
  <div id="nav">
    <loader v-if="isLoading"></loader>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Loader from "./components/common/Loader.vue";

export default defineComponent({
  name: "App",
  components: {
    Loader,
  },
});
</script>

<style lang="less"></style>
