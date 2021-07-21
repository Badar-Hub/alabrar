<template>
  <div v-if="isLoading">
    <h2>Is Loading {{ isLoading }}</h2>
  </div>
  <div v-else>
    <div class="row justify-between q-ma-md">
      <h5 class="q-my-xs">Data Entry</h5>
      <q-btn
        @click="unAuthorizedModal = !unAuthorizedModal"
        label="Add New Entry"
      />
    </div>
    <hr />
    <div v-for="(data, index) in unauthorizedData" :key="index">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-body1">Name: {{ data.name }}</div>
          <!-- <div class="text-body1">User: {{ data.user.email }}</div> -->
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn color="red" @click="reject(data)" unelevated>Reject</q-btn>
          <q-btn color="primary" @click="approved(data)" unelevated
            >Approve</q-btn
          >
        </q-card-actions>
      </q-card>
    </div>
    <UnAuthorizedModal v-model="unAuthorizedModal" />
  </div>
</template>

<script lang="ts">
import { useQuasar } from "quasar";
import { ref, defineComponent, onMounted } from "vue";
import UnAuthorizedModal from "./unAuthorizedModal.vue";
import UnAuthorizedModel from "./UnAuthorizedModel";
import UnAuthorizedService from "./unAuthorizedService";
export default defineComponent({
  components: {
    UnAuthorizedModal,
  },
  setup() {
    const unAuthorizedModal = ref(false);
    const isLoading = ref(false);
    const unauthorizedData = ref([]);
    const $q = useQuasar();

    const unAuthorizedList = async () => {
      try {
        return (unauthorizedData.value = await UnAuthorizedService.getUnAuthorized());
      } catch (error) {
        console.log(error);
      }
    };

    const approved = async (data: UnAuthorizedModel) => {
      try {
        const req = await UnAuthorizedService.addNewAuthorizedData(data);
        if (req.data) {
          $q.notify({
            message: `This Record has been successfully verified`,
          });
        }
        unAuthorizedList();
        return req;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(async () => {
      isLoading.value = true;
      unAuthorizedList();
      console.log(unauthorizedData.value, "unauthorizedData");
      isLoading.value = false;
    });

    return {
      unAuthorizedModal,
      unauthorizedData,
      approved,
    };
  },
});
</script>

<style></style>
