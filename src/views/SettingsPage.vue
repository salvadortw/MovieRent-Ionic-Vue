<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
          <ion-back-button default-href="#"></ion-back-button>
        </ion-buttons>
        <ion-title>Configuración</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list-header class="text-xl font-bold mt-2">Apariencia</ion-list-header>
      <ion-list lines="none" class="bg-transparent">
        <ion-item class="mx-2">
          <ion-icon :icon="moonOutline" class="mr-2"></ion-icon>
          <ion-toggle
            :checked="paletteToggle"
            @ionChange="toggleChange($event)"
            justify="space-between"
            >Modo Oscuro</ion-toggle
          >
        </ion-item>
      </ion-list>
      <ion-list lines="none" class="bg-transparent">
      <ion-item :button="true" class="mx-2 mb-2">Tamaño Fuente</ion-item>
      <ion-item class="mx-2">
        <ion-toggle justify="space-between">Negrita</ion-toggle>
      </ion-item>
    </ion-list>

    <ion-list-header class="text-xl font-bold">Brillo</ion-list-header>
    <ion-list lines="none" class="bg-transparent">
      <ion-item class="mx-2 mb-2">
        <ion-range>
          <ion-icon :icon="sunnyOutline" slot="start"></ion-icon>
          <ion-icon :icon="sunny" slot="end"></ion-icon>
        </ion-range>
      </ion-item>
      <ion-item class="mx-2">
        <ion-toggle justify="space-between" checked>Tono</ion-toggle>
      </ion-item>
    </ion-list>

    <ion-list lines="none" class="bg-transparent">
      <ion-item :button="true" class="mx-2">
        <ion-label>Luz Nocturna</ion-label>
        <ion-text slot="end" color="medium">9:00 PM a 8:00 AM</ion-text>
      </ion-item>
    </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonBackButton,
  IonMenuButton,
  IonList,
  IonListHeader,
  IonItem,
  IonToggle,
  IonIcon,
  IonLabel,
  IonText,
  IonRange,
} from "@ionic/vue";

import type { ToggleCustomEvent } from '@ionic/vue';
import { sunny, sunnyOutline, moonOutline, } from "ionicons/icons";
import { defineComponent, ref } from 'vue';

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonBackButton,
    IonMenuButton,
    IonList,
    IonListHeader,
    IonItem,
    IonToggle,
    IonIcon,
    IonLabel,
    IonText,
    IonRange,
  },

  setup() {
      const paletteToggle = ref(false);

      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

      const toggleDarkPalette = (shouldAdd: boolean) => {
        document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
      };

      const initializeDarkPalette = (isDark: any) => {
        paletteToggle.value = isDark;
        toggleDarkPalette(isDark);
      };

      initializeDarkPalette(prefersDark.matches);

      prefersDark.addEventListener('change', (mediaQuery) => initializeDarkPalette(mediaQuery.matches));

      const toggleChange = (ev: ToggleCustomEvent) => {
        toggleDarkPalette(ev.detail.checked);
      };

      return {
        initializeDarkPalette,
        toggleChange,
        toggleDarkPalette,
        paletteToggle,
        sunny, 
        sunnyOutline,
        moonOutline,
      };
    },
};
</script>

<style scoped>
ion-item {
    --border-radius: 16px;
}
</style>
