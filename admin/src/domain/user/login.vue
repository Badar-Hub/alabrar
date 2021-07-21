<template>
  <div>
    <div class="column justify-center items-center">
      <q-form @submit="onSubmit">
        <div class="row">
          <div class="col-xs-12 q-my-sm">
            <q-input label="Email" type="email" v-model="user.email" />
          </div>
          <div class="col-xs-12 q-my-sm">
            <q-input label="Password" type="password" v-model="user.password" />
          </div>
          <div class="col-xs-12 q-my-sm">
            <q-btn
              color="primary"
              type="submit"
              label="Submit"
              class="full-width"
            />
          </div>
        </div>
      </q-form>
    </div>
    <div class="row justify-evenly q-mx-md">
      <h6 class="q-my-sm">Need an account</h6>
      <q-btn label="Sign Up" color="primary" to="/register" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { UserService } from "./UserService";

export default defineComponent({
  setup() {
    const router = useRouter();
    const user = ref({
      email: "",
      password: "",
    });

    async function onSubmit() {
      try {
        const req = await UserService.loginUser(user.value);
        console.log(req.data.access_token);
        localStorage.setItem("token", req.data.access_token);
        router.push("/");
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
