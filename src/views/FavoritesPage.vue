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
      <section v-if="favorites.length > 0" class="container">
        <div v-for="(movie, i) in favorites" :key="movie.id" class="favorite-item">
          <img
            :src="movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : 'https://via.placeholder.com/150'"
            alt="Movie Poster"
            class="movie-poster"
          />
          <h4 class="text-base font-semibold truncate w-24">{{ movie.title || 'Título no disponible' }}</h4>
          <ion-button class="delete-button" color="danger" fill="outline" expand="full" shape="round" @click="removeFavorite(movie.id)">Quitar</ion-button>
        </div>
      </section>
      <section v-else class="grid justify-center absolute left-0 right-0 top-[50%]">
        <p>No tienes películas favoritas aún.</p>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { useFavorites } from "@/composables/useFavorites";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonBackButton,
  IonMenuButton,
  IonButton,
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
    IonButton,
  },

  setup() {
    const { favorites, removeFavorite, loadFavorites } = useFavorites();

    onMounted(() => {
      loadFavorites(); 
    });

    return {
      favorites,
      removeFavorite,
    };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}

.favorite-item {
  margin-bottom: 16px;
}

.movie-poster {
  width: 100%;
  height: auto;
  max-width: 150px;
  border-radius: 8px;
  object-fit: cover;
}

h4 {
  font-size: 16px;
  margin: 8px 0;
}

.delete-button {
  --background-hover: #e57373;
  --color: #fff;
  --padding-start: 16px;
  --padding-end: 16px;
  --padding-top: 8px;
  --padding-bottom: 8px;
  --box-shadow: none;
}
</style>
