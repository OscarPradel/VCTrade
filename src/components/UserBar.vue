<template>
  <div class="flexbox-container">
    <div class="flexbox-left">
      <img
        class="thumbnail-image"
        :src="user.picture.thumbnail"
        alt="User thumbnail image"
      />
    </div>
    <div class="flexbox-right">
      <div class="user-name">{{ user.name.first }} {{ user.name.last }}</div>
      <div class="contact-details">{{ user.email }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import User from "@/types/User";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    user: {
      required: true,
      type: Object as PropType<User[]>,
    },
  },
});
</script>
<style scoped>
/* TODO-OOP: Use SCSS instead to use nested classes */
.flexbox-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-right: 2%;
}
.flexbox-left {
  width: 25%;
  display: flex;
}
.flexbox-right {
  width: 70%;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow-wrap: break-word;
}
.thumbnail-image {
  border-radius: 50%;
  width: 75%;
  margin: auto;
}
.user-name {
  font-weight: bold;
  font-size: 2vh;
}
.contact-details {
  font-size: 1.5vh;
}
</style>
