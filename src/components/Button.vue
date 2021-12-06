<template>
  <button>{{ buttonTitle }}</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    buttonTitle: {
      required: true,
      type: String,
    },
  },
});
</script>
<style scoped></style>
