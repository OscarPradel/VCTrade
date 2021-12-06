<template>
  <div class="container">
    <div class="search-bar">
      <input
        class="form-control"
        @keyup="handleChange"
        @change="handleChange"
        v-model="searchInput"
        type="text"
        placeholder="Search for names and genders"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    handleChange() {
      this.$emit("searchEvent", this.searchInput);
    },
  },
});
</script>
<style scoped>
/* TODO-OOP: Use SCSS instead to use nested classes */
.container {
  margin: 0 auto;
  width: 80%;
  padding: 5%;
}
.search-bar {
  width: 100%;
  margin: 0 auto;
}
.form-control {
  width: 98%; /* TODO-OOP: To counter the browser padding. That should be fixed instead of this workaround */
}
.icon {
  height: 30%;
  opacity: 0.7;
  color: var(--theme-primary-light);
  position: absolute;
  transform: translateY(-50%) scale(1.1);
  opacity: 0.7;
  z-index: 2;
  transition: all 0.2s linear;
}
</style>
