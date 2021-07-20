<template>
  <div>
    <h1>Hello World</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import UnAuthorizedService from "./unAuthorizedService";
export default defineComponent({
  setup() {
    onMounted(async () => {
      const data = await UnAuthorizedService.getUnAuthorized();
      console.log(data);
    });
  },
});
</script>

<style></style>
