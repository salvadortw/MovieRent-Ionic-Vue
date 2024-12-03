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
      <section v-if="cart.length > 0">
        <ion-list>
          <ion-item-sliding v-for="(movie, i) in cart" :key="movie.id">
            <ion-item class="mb-4">
              <img
                :src="movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : 'https://via.placeholder.com/150'"
                alt="Movie Poster"
                class="movie-poster"
              />
              <div class="info-movie px-4">
                <h2 class="text-xl font-bold mb-1">{{ movie.title || 'Título no disponible' }}</h2>
                <ion-label class="text-base font-semibold">$1,900</ion-label>
              </div>
            </ion-item>
            <ion-item-options side="end">
              <ion-item-option color="danger" @click="removeFromCart(movie.id)">
                <ion-icon slot="icon-only" :icon="trash"></ion-icon>
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>

        <ion-footer collapse="fade" class="sticky bottom-0">
        <ion-toolbar>
          <div class="flex justify-between items-center mb-4 px-4">
            <ion-label class="text-lg font-semibold">Total</ion-label>
            <ion-label class="text-lg font-semibold">${{ cart.length * 1900 }}</ion-label>
          </div>
        </ion-toolbar>
        <ion-toolbar>
          <ion-button class="w-full font-bold text-white" color="primary">
            <span class="text-white">Proceder al Pago</span>
          </ion-button>
        </ion-toolbar>
      </ion-footer>
      </section>
      <section v-else>
        <p class="text-center text-lg mt-8">Tu carrito está vacío.</p>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { onMounted, computed } from "vue";
import { useCart } from "@/composables/useCart";
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

import { trash } from "ionicons/icons";

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

  setup() {
    const { cart, removeFromCart, loadCart } = useCart();


    onMounted(() => {
      loadCart(); 
    });

    return {
      cart,
      removeFromCart,
    };
  },

  data() {
    return {
      trash,
    };
  },
};
</script>

<style scoped>
.movie-poster {
  width: 100px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.info-movie {
  flex: 1;
  margin-left: 12px;
}

h2 {
  font-size: 16px;
  margin: 0;
}

p {
  text-align: center;
}
</style>
