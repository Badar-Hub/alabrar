<template>
  <div class="column justify-center items-center">
    <q-form @submit="onSubmit">
      <div class="row">
        <div class="col-xs-12 q-my-sm">
          <q-input label="Email" type="email" v-model="user.email" />
        </div>
        <div class="col-xs-12 q-my-sm">
          <q-input label="Username" v-model="user.username" />
        </div>
        <div class="col-xs-12 q-my-sm">
          <q-input label="Password" type="password" v-model="user.password" />
        </div>
        <div class="col-xs-12 q-my-sm">
          <q-input
            label="Confirm Password"
            type="password"
            v-model="user.confirmPassword"
          />
        </div>
        <div class="col-xs-12 q-my-sm">
          <q-btn
            color="primary"
            label="Submit"
            type="submit"
            class="full-width"
          />
        </div>
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { UserService } from "./UserService";

export default defineComponent({
  setup() {
    const user = ref({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });

    async function onSubmit() {
      try {
        const req = await UserService.registerUser(user.value);
        console.log(req);
      } catch (error) {
        console.log(error);
      }
    }

    return {
      user,
      onSubmit,
    };
  },
});
</script>

<style></style>
