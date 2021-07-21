<template>
  <q-drawer v-bind="$attrs" show-if-above bordered class="bg-grey-2">
    <q-list>
      <div class="row justify-center">
        <img src="@/assets/logo.png" class="logo" />
      </div>
      <div class="column q-my-md" v-for="(route, index) in routes" :key="index">
        <q-btn unelevated :label="route.name" :to="route.path" />
      </div>
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const routes = computed(() => {
      return router.options.routes;
    });

    return {
      routes,
    };
  },
});
</script>

<style lang="scss">
.logo {
  max-width: 350px;
  width: 100%;
}
</style>
