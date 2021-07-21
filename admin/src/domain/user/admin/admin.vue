<template>
  <div class="row">
    <div
      class="col-xs-12 col-sm-4 q-pa-sm"
      v-for="user in users"
      :key="user._id"
    >
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-body1">Email Address: {{ user.email }}</div>
          <div class="text-body1">Username: {{ user.username }}</div>
          <div class="text-body1">Approval Status: {{ user.isApproved ? 'Approved' : 'Not Approved'}}</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn color="red" @click="rejectUser(user._id)" unelevated>Reject</q-btn>
          <q-btn color="primary" @click="approvedUser(user._id)" unelevated
            >Approve</q-btn
          >
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import { UserService } from "../UserService";
import { useQuasar } from "quasar";

export default defineComponent({
  setup() {
    const users = ref([]);
    const $q = useQuasar();

    const getUsers = async () => {
      try {
        return (users.value = await UserService.allUsers());
      } catch (error) {
        console.log(error);
      }
    };

    const approvedUser = async (userId: string) => {
      try {
        const user = await UserService.approval(userId, true);
        getUsers();
        $q.notify({
          color: "primary",
          message: `This User has been successfully approved`,
        });
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };

    const rejectUser = async (userId: string) => {
      try {
        const user = await UserService.approval(userId, false);
        getUsers();
        $q.notify({
          color: "danger",
          message: `This User is blocked`,
        });
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(async () => {
      try {
        getUsers();
      } catch (error) {
        console.log(error);
      }
    });

    return {
      users,
      approvedUser,
      rejectUser
    };
  },
});
</script>

<style></style>
