<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="#"></ion-back-button>
        </ion-buttons>
        <ion-title>Reparto de {{ movie?.title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div v-for="actor in cast" :key="actor.id" v-if="movie">
        <ion-list>
          <ion-item>
            <ion-thumbnail>
              <ion-img
                :src="'https://image.tmdb.org/t/p/w500' + actor.profile_path"
                alt="Foto Actor"
                class="rounded-full"
              >
              </ion-img>
            </ion-thumbnail>
            <ion-label class="ml-4">
              <div>
                <p class="text-base font-semibold">{{ actor.name }}</p>
                <p class="text-sm opacity-70">{{ actor.character }}</p>
              </div>
            </ion-label>
          </ion-item>
        </ion-list>
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
  IonSearchbar,
  IonChip,
  IonButton,
  IonIcon,
  IonImg,
  IonBackButton,
  IonButtons,
  IonThumbnail,
  IonItem,
  IonList,
  IonLabel,
} from "@ionic/vue";

import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { getFullCast, getDetailMovie } from "@/services/MovieServices";
import type { Cast, DetailMovie } from "@/interfaces/Movie";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonSearchbar,
    IonChip,
    IonIcon,
    IonButton,
    IonButtons,
    IonBackButton,
    IonImg,
    IonThumbnail,
    IonItem,
    IonList,
    IonLabel,
  },

  setup() {
    const route = useRoute();
    const cast = ref<Cast[]>([]);
    const movie = ref<DetailMovie | null>(null);

    const loadCast = async () => {
      const movieId = route.params.id;
      try {
        const movieDetails = await getDetailMovie(Number(movieId));
        const movieCast = await getFullCast(Number(movieId));
        movie.value = movieDetails as DetailMovie;
        cast.value = movieCast;
      } catch (error) {
        console.error("Error al cargar detalles de la película:", error);
      }
    };

    onMounted(() => {
      loadCast();
    });

    return {
      cast,
      movie,
    };
  },
};
</script>

<style scoped></style>
