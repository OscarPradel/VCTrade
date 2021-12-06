<template>
  <div class="main-container">
    <Home v-if="isMounted" :userList="userList" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Home from "./views/Home.vue";
import DataService from "./service/DataService";
import ResponseData from "./types/ResponseData";
import User from "./types/User";

export default defineComponent({
  name: "App",
  components: {
    Home,
  },
  data() {
    return {
      userList: [] as PropType<User[]>,
      isMounted: false,
    };
  },
  mounted() {
    const fetchUserData = async () => {
      await DataService.getMultipleUsers()
        .then((response: ResponseData) => {
          this.userList = response.data.results;
          this.isMounted = true;
        })
        .catch((err) => {
          // TODO-OOP: Better error handling
          alert(err);
        });
    };
    fetchUserData();
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-container {
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: auto;
}
</style>
