<template>
  <div class="home">
    <v-header :user="currentUser"></v-header>
    this is home page!
  </div>
</template>

<script lang="ts">
import vHeader from "../components/common/vHeader.vue";
import { defineComponent,reactive } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    vHeader,
  },
  setup() {
    const currentUser = reactive({
      isLogin: false,
      username: "893352008@qq.com",
      name:'chenhui',
      uid: 370406199108100076,
      regTime: 1615532195803,
      favs: 100,
      roles: "user",
    });
    return {
      currentUser,
    };
  },
});
</script>
