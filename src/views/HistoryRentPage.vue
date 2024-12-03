<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
          <ion-back-button default-href="#"></ion-back-button>
        </ion-buttons>
        <ion-title>Historial de Renta</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div
        v-if="purchases.length === 0"
        class="grid justify-center absolute left-0 right-0 top-[50%]"
      >
        No has realizado ninguna compra aún.
      </div>

      <ion-list v-else>
        <ion-item v-for="rental in purchases" :key="rental.movieId">
          <ion-label class="px-2">
            <h1 class="text-xl font-bold mb-2">{{ rental.movieTitle }}</h1>
            <p class="font-semibold text-lg mb-2">
              {{ rental.type === "rent" ? "Arriendo" : "Compra" }}
            </p>
            <p
              v-if="rental.type === 'rent'"
              class="text-base font-semibold mb-2"
            >
              {{ rental.hours }} horas
            </p>
            <p class="text-lg font-semibold mb-2">${{ rental.price }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonBackButton,
  IonMenuButton,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/vue";
import { usePurchase } from "@/composables/usePurchase";
import { Purchase } from "@/interfaces/Purchase";

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
    IonItem,
    IonLabel,
    IonList,
  },
  setup() {
    const { getPurchases } = usePurchase();
    const purchases = ref<Purchase[]>([]);

    onMounted(() => {
      purchases.value = getPurchases(); 
      console.log(purchases.value);
    });

    return {
      purchases,
    };
  },
};
</script>

<style scoped></style>
