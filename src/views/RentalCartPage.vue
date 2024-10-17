<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Carrito de Alquiler</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item-sliding>
          <ion-item>
            <div class="movie-image w-40">
              <img
                src="https://image.tmdb.org/t/p/original/pi6mwFCtTDIAHOHWan4AQ36Tdh2.jpg"
                alt=""
              />
            </div>
            <div class="info-movie px-8">
              <h2 class="text-xl font-bold mb-2">Película 1</h2>
              <ion-label class="text-sm opacity-60 mb-2"
                >Alquiler por 24 horas</ion-label
              >
              <ion-label class="text-base font-semibold">$1.900</ion-label>
            </div>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option>
              <ion-icon slot="icon-only" :icon="heart"></ion-icon>
            </ion-item-option>
            <ion-item-option color="danger" class="font-xs">
              <ion-icon slot="icon-only" :icon="trash"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        <ion-item-sliding>
          <ion-item>
            <div class="movie-image w-40">
              <img
                src="https://image.tmdb.org/t/p/original/pi6mwFCtTDIAHOHWan4AQ36Tdh2.jpg"
                alt=""
              />
            </div>
            <div class="info-movie px-8">
              <h2 class="text-xl font-bold mb-2">Película 2</h2>
              <ion-label class="text-sm opacity-60 mb-2"
                >Alquiler por 24 horas</ion-label
              >
              <ion-label class="text-base font-semibold">$1.900</ion-label>
            </div>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option>
              <ion-icon slot="icon-only" :icon="heart"></ion-icon>
            </ion-item-option>
            <ion-item-option color="danger">
              <ion-icon slot="icon-only" :icon="trash"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        <ion-item-sliding>
          <ion-item>
            <div class="movie-image w-40">
              <img
                src="https://image.tmdb.org/t/p/original/pi6mwFCtTDIAHOHWan4AQ36Tdh2.jpg"
                alt=""
              />
            </div>
            <div class="info-movie px-8">
              <h2 class="text-xl font-bold mb-2">Película 3</h2>
              <ion-label class="text-sm opacity-60 mb-2"
                >Alquiler por 24 horas</ion-label
              >
              <ion-label class="text-base font-semibold">$1.900</ion-label>
            </div>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option>
              <ion-icon slot="icon-only" :icon="heart"></ion-icon>
            </ion-item-option>
            <ion-item-option color="danger">
              <ion-icon slot="icon-only" :icon="trash"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>

      <ion-footer collapse="fade" class="sticky bottom-0">
        <ion-toolbar>
          <div class="flex justify-between items-center mb-4 px-2 mt-4">
            <ion-label class="text-lg font-semibold">Total</ion-label>
            <ion-label class="text-lg font-semibold">$5.700</ion-label>
          </div>
        </ion-toolbar>
        <ion-toolbar>
          <ion-button class="w-full px-2 font-bold text-white" color="primary"
            ><span class="text-white">Proceder al Pago</span></ion-button
          >
        </ion-toolbar>
      </ion-footer>
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
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonFooter,
  IonButton,
  IonMenuButton,
  IonButtons,
} from "@ionic/vue";

import { heart, trash } from "ionicons/icons";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonFooter,
    IonButton,
    IonMenuButton,
    IonButtons,
  },
  data() {
    return {
      heart,
      trash,
    };
  },
};
</script>

<style scoped>
.movie-image img {
  border-radius: 6px;
  margin-bottom: 15px;
}
</style>
