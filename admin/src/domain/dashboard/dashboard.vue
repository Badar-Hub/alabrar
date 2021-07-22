<template>
  <div v-if="isLoading">
    <h1>Loading...</h1>
  </div>
  <div v-else>
    <div class="row justify-center">
      <h5>Accuracy Rate: 100%</h5>
    </div>
    <hr />
    <div class="row justify-evenly q-my-md">
      <div>
        <q-btn
          :label="`Pending For Approval - ${userData.pending}`"
          color="primary"
        />
      </div>
      <div>
        <q-btn :label="`Approved - ${userData.approved}`" color="primary" />
      </div>
      <div>
        <q-btn color="red" label="Rejected" />
      </div>
    </div>
    <hr />
    <div class="row justify-evenly q-my-md">
      <div>
        <q-btn
          :label="
            `Estimated Withdrawl Amount - Rs: ${user.rate * userData.approved}`
          "
          color="primary"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import dashboardService from "./dashboardService";
export default defineComponent({
  setup() {
    const userData = ref({});
    const isLoading = ref(false);
    const store = useStore();
    const user = store.getters.getUser;
    onMounted(async () => {
      try {
        isLoading.value = true;
        userData.value = await dashboardService.getUserData();
        console.log(userData.value);
        isLoading.value = false;
      } catch (error) {
        console.log(error);
      }
    });

    return {
      userData,
      isLoading,
      user,
    };
  },
});
</script>

<style></style>
