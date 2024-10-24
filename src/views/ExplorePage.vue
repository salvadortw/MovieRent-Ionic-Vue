<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Explorar</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <header class="search-movies">
        <div class="flex space-x-2 mt-4">
          <ion-searchbar
            placeholder="Buscar películas, géneros..."
          ></ion-searchbar>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4 px-2 mt-5">
          <ion-list class="rounded-lg">
            <ion-item>
              <ion-select
                aria-label="genero"
                placeholder="Género"
                v-model="selectedGenre"
                @ion-change="filterMoviesByGenre"
              >
                <ion-select-option
                  :value="genre.id"
                  v-for="genre in genres"
                  :key="genre.id"
                >
                  {{ genre.name }}
                </ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>

          <ion-list class="rounded-lg">
            <ion-item>
              <ion-select aria-label="anio" placeholder="Año">
                <ion-select-option value="2021">2021</ion-select-option>
                <ion-select-option value="2022">2022</ion-select-option>
                <ion-select-option value="2023">2023</ion-select-option>
                <ion-select-option value="2024">2024</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>
        </div>
      </header>

      <section class="explore-movies mb-2">
        <div class="px-1" v-for="movie in filteredMovies" :key="movie.id">
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
            alt="Movie Poster"
            @click="goToMovieDetail(movie.id)"
            class="poster-image"
          />
          <div class="flex items-center justify-between px-[2px]">
            <h4 class="text-base font-semibold">
              {{ movie.title }}
            </h4>
            <button class="mt-3" @click="showOptions(movie)">
              <ion-icon :icon="ellipsisHorizontal"></ion-icon>
            </button>
          </div>
        </div>

        <ion-action-sheet
          :is-open="isOpen"
          @did-dismiss="isOpen = false"
          header="Opciones"
          :buttons="actionSheetButtons"
        >
        </ion-action-sheet>
      </section>
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
  IonIcon,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonMenuButton,
  IonButtons,
  IonActionSheet,
  IonImg,
} from "@ionic/vue";

import { onMounted, ref } from "vue";
import type { Movie, Genre } from "@/interfaces/Movie";
import { getTopRated, getGenres } from "@/services/MovieServices";
import { useRouter } from "vue-router";

import { ellipsisHorizontal, cartOutline, heartOutline } from "ionicons/icons";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonSearchbar,
    IonIcon,
    IonItem,
    IonList,
    IonSelect,
    IonSelectOption,
    IonMenuButton,
    IonButtons,
    IonActionSheet,
    IonImg,
  },

  setup() {
    const movies = ref<Movie[]>([]);
    const isOpen = ref(false);
    const selectedMovie = ref(null);
    const router = useRouter();
    const genres = ref<Genre[]>([]);
    const filteredMovies = ref<Movie[]>([]);
    const selectedGenre = ref<number | null>(null);

    const getData = async () => {
      try {
        const response = await getTopRated();
        movies.value = response.results;
        filteredMovies.value = response.results;
      } catch (error) {
        console.log(error);
      }
    };

    const getDataGenre = async () => {
      try {
        const response = await getGenres();
        genres.value = response.genres;
      } catch (error) {
        console.log(error);
      }
    };

    const filterMoviesByGenre = () => {
      if (selectedGenre.value) {
        filteredMovies.value = movies.value.filter((movie) =>
          movie.genre_ids.includes(selectedGenre.value!)
        );
      } else {
        filteredMovies.value = movies.value;
      }
    };

    const goToMovieDetail = (movieId: number) => {
      router.push(`/movie/${movieId}`);
    };

    const loadMovies = async () => {
      const response = await getTopRated();
      movies.value = response.results;
    };

    onMounted(() => {
      getData();
      loadMovies();
      getDataGenre();
    });

    const showOptions = (movie: any) => {
      selectedMovie.value = movie;
      isOpen.value = true;
    };

    const actionSheetButtons = ref([
      {
        text: "Agregar a Favoritos",
        role: "selected",
        icon: heartOutline,
        data: {
          action: "addToFav",
        },
      },
      {
        text: "Agregar al Carro",
        role: "selected",
        icon: cartOutline,
        data: {
          action: "addToCart",
        },
      },
      {
        text: "Cancelar",
        role: "cancel",
        data: {
          action: "cancel",
        },
      },
    ]);

    return {
      actionSheetButtons,
      isOpen,
      goToMovieDetail,
      loadMovies,
      movies,
      showOptions,
      genres,
      filterMoviesByGenre,
      selectedGenre,
      filteredMovies,
    };
  },

  data() {
    return {
      heartOutline,
      cartOutline,
      ellipsisHorizontal,
    };
  },
};
</script>

<style scoped>
.explore-movies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-inline: 5px;
}

.poster-image {
  border-radius: 6px;
  transition: transform 500ms;
  box-shadow: 6px 4px 6px 4px hsla(0, 0%, 0%, 0.2);
  width: 100%;
  height: 238.5px;

  &:hover {
    transform: scale(1.08);
  }
}

ion-searchbar {
  --border-radius: 6px;
  --background: #222;
}
</style>
