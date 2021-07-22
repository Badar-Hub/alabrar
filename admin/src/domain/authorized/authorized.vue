<template>
  <div class="row">
    <div
      class="col-xs-12 col-sm-4 q-pa-sm"
      v-for="(data, index) in authorizedList"
      :key="index"
    >
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-body1">Name: {{ data.name }}</div>
          <div class="text-body1">User: {{ data.user.email }}</div>
          <div class="text-body1">User: {{ data.user.username }}</div>
          <div class="text-body1">User: {{ data.user.role }}</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn color="red" @click="reject(data._id)" unelevated>Delete</q-btn>
          <q-btn color="primary" @click="approved(data._id)" unelevated
            >View All Fields</q-btn
          >
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import UnAuthorized from "../unAuthorized/unAuthorizedService";

export default defineComponent({
  setup() {
    const authorizedList = ref({});

    const getUnAuthorizedData = async () => {
      try {
        return (authorizedList.value = await UnAuthorized.getAuthorized());
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(async () => {
      try {
        getUnAuthorizedData();
      } catch (error) {
        console.log(error);
      }
    });

    return {
      authorizedList,
    };
  },
});
</script>

<style></style>
