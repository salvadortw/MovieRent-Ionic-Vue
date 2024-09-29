<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
            <ion-back-button default-href="#"></ion-back-button>
          </ion-buttons>
          <ion-title>Favoritos</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="grid justify-center absolute left-0 right-0 top-[50%]">
          No hay nada por aquí.
        </div>
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
  } from "@ionic/vue";
  
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
    },
  
    data() {
      return {};
    },
  };
  </script>
  
  <style scoped></style>
  