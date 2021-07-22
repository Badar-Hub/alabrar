<template>
  <div v-if="isLoading"><h1>Is Loading</h1></div>
  <div v-else>
    <q-layout view="lHh Lpr lFf">
      <Header @clicked="leftDrawerOpen = !leftDrawerOpen" />

      <Sidebar v-model="leftDrawerOpen" />
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import { UserService } from "./domain/user/UserService";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "LayoutDefault",
  components: {
    Sidebar,
    Header,
  },

  setup() {
    const isTokenValidated = ref(false);
    const isLoading = ref(true);
    const store = useStore();
    const router = useRouter();

    onMounted(async () => {
      try {
        isLoading.value = true;
        const data = await UserService.validateToken();
        if (data.data) {
          isTokenValidated.value = true;
          store.dispatch("setUser", data.data.user);
          console.log(data.data.user);
          router.beforeEach((to, from, next) => {
            if (to.matched.some((route) => route.meta.requiresAuth)) {
              console.log(store.getters);
              if (store.getters.getUser.isApproved) {
                next();
              } else {
                next("/login");
              }
            } else {
              next();
            }
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    });
    return {
      leftDrawerOpen: ref(false),
      isTokenValidated,
      isLoading,
    };
  },
};
</script>
