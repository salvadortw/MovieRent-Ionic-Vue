<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :loop="false"
        :pagination="{
          dynamicBullets: true,
        }"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(movie, i) in movies" :key="movie.id">
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie.backdrop_path"
            alt="Movie Poster"
            class="img-swiper"
          />
        </swiper-slide>
      </swiper>

      <div class="search px-2 mt-3">
        <ion-searchbar
          placeholder="Buscar películas, géneros..."
        ></ion-searchbar>
      </div>

      <h3 class="font-semibold text-lg ml-4">Películas Populares</h3>
      <section
        class="px-2 mx-2 overflow-x-hidden overflow-y-hidden swiperMovies"
      >
        <swiper
          :loop="false"
          :space-between="16"
          :breakpoints="{
            0: { freeMode: true, slidesPerView: 2, spaceBetween: 10 },
            1024: {
              freeMode: false,
              centeredSlides: false,
              navigation: true,
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }"
        >
          <swiper-slide v-for="(movie, i) in movies" :key="movie.id">
            <img
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              alt="Movie Poster"
              class="w-full h-auto rounded-lg"
              @click="goToMovieDetail(movie.id)"
            />
            <div class="flex items-center justify-between px-[2px]">
              <h4 class="text-base font-semibold truncate w-24">
                {{ movie.title }}
              </h4>
              <button class="mt-3" @click="showOptions(movie)">
                <ion-icon :icon="ellipsisHorizontal"></ion-icon>
              </button>
            </div>
          </swiper-slide>
        </swiper>

        <ion-action-sheet
          :is-open="isOpen"
          @did-dismiss="isOpen = false"
          header="Opciones"
          :buttons="actionSheetButtons"
        >
        </ion-action-sheet>
      </section>

      <h3 class="font-semibold text-lg ml-4">Películas Familiares</h3>
      <section
        class="px-2 mx-2 overflow-x-hidden overflow-y-hidden swiperMovies"
      >
        <swiper
          :loop="false"
          :space-between="16"
          :breakpoints="{
            0: { freeMode: true, slidesPerView: 2, spaceBetween: 10 },
            1024: {
              freeMode: false,
              centeredSlides: false,
              navigation: true,
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }"
        >
          <swiper-slide v-for="(movie, i) in familyMovies" :key="movie.id">
            <img
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              alt="Movie Poster"
              class="w-full h-auto rounded-lg"
              @click="goToMovieDetail(movie.id)"
            />
            <div class="flex items-center justify-between px-[2px]">
              <h4 class="text-base font-semibold truncate w-24">
                {{ movie.title }}
              </h4>
              <button class="mt-3" @click="showOptions(movie)">
                <ion-icon :icon="ellipsisHorizontal"></ion-icon>
              </button>
            </div>
          </swiper-slide>
        </swiper>
      </section>

      <h3 class="font-semibold text-lg ml-4">Crimen</h3>
      <section
        class="px-2 mx-2 overflow-x-hidden overflow-y-hidden swiperMovies"
      >
        <swiper
          :loop="false"
          :space-between="16"
          :breakpoints="{
            0: { freeMode: true, slidesPerView: 2, spaceBetween: 10 },
            1024: {
              freeMode: false,
              centeredSlides: false,
              navigation: true,
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }"
        >
          <swiper-slide v-for="(movie, i) in crimeMovies" :key="movie.id">
            <img
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              alt="Movie Poster"
              class="w-full h-auto rounded-lg"
              @click="goToMovieDetail(movie.id)"
            />
            <div class="flex items-center justify-between px-[2px]">
              <h4 class="text-base font-semibold truncate w-24">
                {{ movie.title }}
              </h4>
              <button class="mt-3" @click="showOptions(movie)">
                <ion-icon :icon="ellipsisHorizontal"></ion-icon>
              </button>
            </div>
          </swiper-slide>
        </swiper>
      </section>

      <h3 class="font-semibold text-lg ml-4">Thriller</h3>
      <section
        class="px-2 mx-2 overflow-x-hidden overflow-y-hidden swiperMovies"
      >
        <swiper
          :loop="false"
          :space-between="16"
          :breakpoints="{
            0: { freeMode: true, slidesPerView: 2, spaceBetween: 10 },
            1024: {
              freeMode: false,
              centeredSlides: false,
              navigation: true,
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }"
        >
          <swiper-slide v-for="(movie, i) in thrillerMovies" :key="movie.id">
            <img
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              alt="Movie Poster"
              class="w-full h-auto rounded-lg"
              @click="goToMovieDetail(movie.id)"
            />
            <div class="flex items-center justify-between px-[2px]">
              <h4 class="text-base font-semibold truncate w-24">
                {{ movie.title }}
              </h4>
              <button class="mt-3" @click="showOptions(movie)">
                <ion-icon :icon="ellipsisHorizontal"></ion-icon>
              </button>
            </div>
          </swiper-slide>
        </swiper>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  FreeMode,
} from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

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
  IonActionSheet,
  IonItem,
  IonMenuButton,
  IonButtons,
  IonImg,
} from "@ionic/vue";
import { cartOutline, ellipsisHorizontal, heartOutline } from "ionicons/icons";

import { onMounted, ref } from "vue";
import { Movie } from "@/interfaces/Movie";
import {
  getThrillerMovies,
  getCrimeMovies,
  getFamilyMovies,
  getMovies,
} from "@/services/MovieServices";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { useFavorites } from "@/composables/useFavorites";
import { useCart } from "@/composables/useCart";
export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonSearchbar,
    IonChip,
    Swiper,
    SwiperSlide,
    EffectCoverflow,
    IonButton,
    IonIcon,
    IonActionSheet,
    IonItem,
    IonMenuButton,
    IonButtons,
    IonImg,
  },

  setup() {
    const movies = ref<Movie[]>([]);
    const familyMovies = ref<Movie[]>([]);
    const crimeMovies = ref<Movie[]>([]);
    const thrillerMovies = ref<Movie[]>([]);
    const router = useRouter();

    const toast = useToast();

    const { favorites, addFavorite, removeFavorite, loadFavorites } = useFavorites();
    const { addToCart } = useCart();

    const getData = async () => {
      try {
        const response = await getMovies();
        movies.value = response.results;
      } catch (error) {
        console.log(error);
      }
    };

    const getDataFamilyMovies = async () => {
      try {
        const response = await getFamilyMovies();
        familyMovies.value = response.results;
      } catch (error) {
        console.log(error);
      }
    };

    const getDataCrimeMovies = async () => {
      try {
        const response = await getCrimeMovies();
        crimeMovies.value = response.results;
      } catch (error) {
        console.log(error);
      }
    };

    const getDataThrillerMovies = async () => {
      try {
        const response = await getThrillerMovies();
        thrillerMovies.value = response.results;
      } catch (error) {
        console.log(error);
      }
    };

    const loadMovies = async () => {
      const response = await getMovies();
      movies.value = response.results;
    };

    const goToMovieDetail = (movieId: number) => {
      router.push(`/movie/${movieId}`);
    };

    onMounted(() => {
      getData();
      loadMovies();
      getDataFamilyMovies();
      getDataCrimeMovies();
      getDataThrillerMovies();
      loadFavorites();
    });

    const isOpen = ref(false);
    const selectedMovie = ref(null);

    const showOptions = (movie: any) => {
      selectedMovie.value = movie;
      isOpen.value = true;
    };

    const actionSheetButtons = ref([
      {
        text: "Agregar a Favoritos",
        role: "selected",
        icon: heartOutline,
        handler: () => {
          if (selectedMovie.value) {
            addFavorite(selectedMovie.value);
          }
          isOpen.value = false; 
        },
      },
      {
        text: "Agregar al Carro",
        role: "selected",
        icon: cartOutline,
        handler: () => {
          if (selectedMovie.value) {
            addToCart(selectedMovie.value);
          }
          isOpen.value = false;
        },
      },
      {
        text: "Cancelar",
        role: "cancel",
        handler: () => {
          isOpen.value = false;
        },
      },
    ]);

    return {
      modules: [
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        EffectCoverflow,
        FreeMode,
      ],
      ellipsisHorizontal,
      heartOutline,
      cartOutline,
      actionSheetButtons,
      isOpen,
      showOptions,
      movies,
      goToMovieDetail,
      familyMovies,
      crimeMovies,
      thrillerMovies,
      addToCart,
      favorites,
      addFavorite,
      removeFavorite,
    };
  },
};
</script>

<style scoped>
.swiperMovies .swiper-slide img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.img-swiper {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0px;
}

img {
  border-radius: 6px;
}

a {
  text-decoration: none;
}

h4 {
  font-size: 16;
}

@media (width > 900px) {
  .mySwiper img {
    height: 310px;
  }
}

@media (width < 900px) {
  .swiperMovies h4 {
    font-size: 12px;
  }
}

@media (width < 900px) {
  img {
    height: 240px;
  }
}

ion-searchbar {
  --border-radius: 6px;
  --background: #222;
}

ion-button .custom {
  padding: 0px !important;
  margin: 0px !important;
}

/* Responsive */
@media (max-width: 1024px) {
  .swiperMovies {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .swiperMovies::-webkit-scrollbar {
    display: none;
  }

  .swiperMovies .swiper-slide {
    display: inline-block;
    white-space: normal;
  }
}

@media (max-width: 768px) {
  .swiperMovies {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .swiperMovies::-webkit-scrollbar {
    display: none;
  }

  .swiperMovies .swiper-slide {
    display: inline-block;
    white-space: normal;
  }
}

@media (max-width: 640px) {
  .swiperMovies {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .swiperMovies::-webkit-scrollbar {
    display: none;
  }

  .swiperMovies .swiper-slide {
    display: inline-block;
    white-space: normal;
  }
}

@media (max-width: 480px) {
  .swiperMovies {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .swiperMovies::-webkit-scrollbar {
    display: none;
  }

  .swiperMovies .swiper-slide {
    display: inline-block;
    white-space: normal;
  }
}
</style>
