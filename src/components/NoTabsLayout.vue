<template>
    <ion-page>
      <ion-router-outlet></ion-router-outlet>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonPage, IonRouterOutlet } from "@ionic/vue";
  
  export default {
    components: {
      IonPage,
      IonRouterOutlet,
    },
  };
  </script>
  