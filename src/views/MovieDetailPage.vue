<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="#"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ movie?.title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="flex-1 overflow-auto p-4">
      <div class="flex flex-col h-screen bg-background" v-if="movie">
        <div>
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie.backdrop_path"
            alt=""
            class="imageCover"
          />
        </div>

        <div class="px-4">
          <h1 class="text-2xl font-bold text-primary mb-2">
            {{ movie.title }}
          </h1>
          <div class="flex items-center space-x-2 mb-4 opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#facc15"
            >
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
              />
            </svg>
            <span>{{ movie.vote_average }}</span>
            <span>|</span>
            <ion-icon :icon="timeOutline" class="h-4 w-4"></ion-icon>
            <span>{{ movie.runtime }} min</span>
            <span>|</span>
            <ion-icon :icon="calendarOutline" class="h-4 w-4"></ion-icon>
            <span>{{ movie.release_date }}</span>
          </div>

          <div class="flex flex-wrap gap-1 mb-4 ml-[-5px]">
            <ion-chip
              v-for="genre in movie.genre"
              :key="genre.id"
              color="primary"
            >
              {{ genre.name }}
            </ion-chip>
          </div>

          <p class="text-muted-foreground mb-4 opacity-80">
            {{ movie.overview }}
          </p>

          <h2 class="text-lg font-semibold mb-2 flex">
            Reparto
            <ion-icon
              :icon="chevronForwardOutline"
              class="ml-2 mt-1 text-white/80"
              @click="goToMovieDetail(movie.id)"
            ></ion-icon>
          </h2>
          <swiper
            :loop="false"
            :space-between="16"
            :breakpoints="{
              0: { freeMode: false, slidesPerView: 3, spaceBetween: 10 },
              1024: {
                freeMode: false,
                centeredSlides: false,
                navigation: true,
                slidesPerView: 7,
                spaceBetween: 5,
              },
            }"
          >
            <swiper-slide v-for="actor in cast" :key="actor.id">
              <div
                class="flex flex-col items-center justify-center text-center"
              >
                <img
                  :src="'https://image.tmdb.org/t/p/w500' + actor.profile_path"
                  class="w-24 h-24 rounded-full object-cover"
                  alt="Imagen de actor"
                />
                <p class="text-sm mt-2 font-semibold truncate w-24">
                  {{ actor.name }}
                </p>
                <p class="text-xs mt-1 opacity-70 truncate w-24">
                  {{ actor.character }}
                </p>
              </div>
            </swiper-slide>
          </swiper>

          <h2 class="text-lg font-semibold mb-2">Opciones de Alquiler</h2>
          <div class="space-y-2 mb-2">
            <ion-button
              class="w-full font-semibold"
              color="primary"
              @click="openPurchaseModal(movie, 'rent', 48, 1900)"
              >Alquilar por 48 horas - $1.900</ion-button
            >
            <ion-button
              class="w-full font-semibold bg-transparent border-solid border-[1px] border-blue-800 rounded-md hover:bg-black/5 dark:bg-transparent dark:hover:bg-white/5"
              fill="outline"
              @click="openPurchaseModal(movie, 'buy', 'always', 5500)"
              >Comprar - $5.500</ion-button
            >

            <ion-modal :is-open="isPurchaseModalOpen">
              <div class="text-center m-auto">
                <h2
                  class="text-2xl font-bold mb-4 px-2"
                  v-if="rentalHours === 'always'"
                >
                  ¿Deseas comprar esta película por {{ price }} pesos?
                </h2>
                <h2 class="text-2xl font-bold mb-4 px-2" v-else>
                  ¿Deseas arrendar esta película por {{ rentalHours }} horas por
                  {{ price }} pesos?
                </h2>
                <div class="p-8">
                  <p class="text-xl font-medium mb-4">
                    {{ selectedMovie?.title }}
                  </p>
                  <div class="flex items-center justify-between">
                    <ion-button color="primary" @click="confirmPurchase"
                      >Si</ion-button
                    >
                    <ion-button
                      color="danger"
                      @click="isPurchaseModalOpen = false"
                      >No</ion-button
                    >
                  </div>
                </div>
              </div>
            </ion-modal>
          </div>
        </div>
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
  IonModal,
} from "@ionic/vue";

// import Swiper core and required modules
import { Navigation, Pagination, FreeMode } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

import {
  calendarOutline,
  chevronForwardOutline,
  starOutline,
  timeOutline,
} from "ionicons/icons";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getDetailMovie, getCast } from "@/services/MovieServices";
import { addMovieToPurchase } from "@/services/PurchaseServices";
import type { DetailMovie, Cast } from "@/interfaces/Movie";
import router from "@/router";

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
    Swiper,
    SwiperSlide,
    IonChip,
    IonModal,
  },
  setup() {
    const { addPurchase } = addMovieToPurchase();
    const route = useRoute();
    const movie = ref<DetailMovie | null>(null);
    const cast = ref<Cast[]>([]);
    const selectedMovie = ref<Movie | null>(null);
    const isPurchaseModalOpen = ref(false);
    const rentalHours = ref<number | string | null>(null);
    const price = ref<number | null>(null);

    const openPurchaseModal = (
      movie: Movie,
      type: "buy" | "rent",
      hours: number | "always",
      priceValue: number
    ) => {
      selectedMovie.value = movie;
      rentalHours.value = hours || null;
      price.value = priceValue || null;
      isPurchaseModalOpen.value = true;
    };

    const confirmPurchase = () => {
      if (
        !selectedMovie.value ||
        rentalHours.value === null ||
        price.value === null
      ) {
        return;
      }

      addPurchase({
        movieId: selectedMovie.value.id,
        movieTitle: selectedMovie.value.title,
        type: rentalHours.value === "always" ? "buy" : "rent",
        hours: rentalHours.value,
        price: price.value,
      });

      const message =
        rentalHours.value === "always"
          ? `Has comprado la película ${selectedMovie.value.title} por ${price.value} pesos.`
          : `Has arrendado la película ${selectedMovie.value.title} por ${rentalHours.value} horas por ${price.value} pesos.`;

      alert(message);
      isPurchaseModalOpen.value = false;
    };

    const loadMovieDetails = async () => {
      const movieId = route.params.id;
      try {
        const movieDetails = await getDetailMovie(Number(movieId));
        const movieCast = await getCast(Number(movieId));
        movie.value = movieDetails as DetailMovie;
        cast.value = movieCast;
      } catch (error) {
        console.error("Error al cargar detalles de la película:", error);
      }
    };

    const goToMovieDetail = (movieId: number) => {
      router.push(`/reparto/${movieId}`);
    };

    onMounted(() => {
      loadMovieDetails();
    });

    return {
      modules: [Navigation, Pagination, FreeMode],
      movie,
      cast,
      goToMovieDetail,
      openPurchaseModal,
      confirmPurchase,
      selectedMovie,
      isPurchaseModalOpen,
      rentalHours,
      price,
    };
  },

  data() {
    return {
      calendarOutline,
      starOutline,
      timeOutline,
      chevronForwardOutline,
    };
  },
};
</script>

<style scoped>
.imageCover {
  mask-image: linear-gradient(black 80%, transparent);
  width: 100%;
}

* {
  text-wrap: pretty;
}

ion-button {
  --background: transparent;
  --background-hover: rgba(255, 255, 255, 0.09);
  --border-radius: 6px;
  --border-color: rgba(255, 255, 255, 0.1);
  --border-style: solid;
  --border-width: 1px;

  --box-shadow: 0;
}
</style>
