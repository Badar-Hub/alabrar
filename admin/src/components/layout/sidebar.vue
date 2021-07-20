<template>
  <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
    <q-list>
      <q-item-label header>Essential Links</q-item-label>
      <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
        <div class="row column" v-for="(route, index) in routes" :key="index">
          <q-btn :label="route.name" :to="route.path" />
        </div>
      </q-item>
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

<style></style>
