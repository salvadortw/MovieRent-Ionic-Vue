<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="homeOutline"></ion-icon>
          <ion-label>Inicio</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="explorar" href="/explorar">
          <ion-icon :icon="filmOutline"></ion-icon>
          <ion-label>Explorar</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="carro" href="/carro">
          <ion-icon :icon="cartOutline"></ion-icon>
          <ion-label>Carro</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="miCuenta" href="/miCuenta">
          <ion-icon :icon="personCircleOutline"></ion-icon>
          <ion-label>Mi Cuenta</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/vue";
import {
  homeOutline,
  filmOutline,
  cartOutline,
  personCircleOutline,
} from "ionicons/icons";

export default {
  components: {
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon,
  },
  data() {
    return {
      homeOutline,
      filmOutline,
      cartOutline,
      personCircleOutline,
    };
  },
};
</script>

<style scoped>
ion-tab-bar {
  --background: #181818;
}
</style>
