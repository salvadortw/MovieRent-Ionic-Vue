<template>
  <ion-app>
    <Menu></Menu>
    <ion-router-outlet id="main-content"></ion-router-outlet>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';

import { defineComponent } from 'vue';

import TabsMenu from './components/TabsMenu.vue';
import Menu from './components/Menu.vue';

export default defineComponent({
    name: 'App',
    components: { IonApp, IonRouterOutlet, TabsMenu, Menu, },
  });
</script>

<style scoped>
  #app {
    --background: var(--ion-color-dark);
    --color: var(--ion-color-light);
  }
</style>
