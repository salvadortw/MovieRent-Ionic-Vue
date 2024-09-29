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
        :loop="true"
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
        <swiper-slide
          ><img src="/public/images/slide-1.webp" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/public/images/slide-2.webp" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/public/images/slide-3.webp" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/public/images/slide-1.webp" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/public/images/slide-2.webp" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/public/images/slide-3.webp" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/public/images/slide-1.webp" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/public/images/slide-2.webp" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/public/images/slide-3.webp" alt=""
        /></swiper-slide>
      </swiper>

      <div class="search px-2 mt-3">
        <ion-searchbar
          placeholder="Buscar películas, géneros..."
        ></ion-searchbar>
        <h3 class="font-semibold text-xl mx-2">Categorías</h3>
        <div class="categories ml-1">
          <ion-chip color="primary" class="font-semibold">Acción</ion-chip>
          <ion-chip>Terror</ion-chip>
          <ion-chip>Drama</ion-chip>
          <ion-chip>Comedia</ion-chip>
        </div>
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
          <swiper-slide v-for="(movie, i) in popularMovies" :key="i">
            <router-link to="/detallePelicula">
              <img
                :src="movie.image"
                alt="Movie Poster"
                class="w-full h-auto rounded-lg"
              />
            </router-link>
            <div class="flex items-center justify-between px-[2px]">
              <h4 class="text-base font-semibold">
                {{ movie.name }}
              </h4>
              <button class="mt-3" @click="showOptions(movie)">
                <ion-icon
                  :icon="ellipsisHorizontal"
                  id="open-action-sheet"
                ></ion-icon>
              </button>
            </div>
          </swiper-slide>
        </swiper>

        <ion-action-sheet
          :is-open="isOpen"
          @did-dismiss="isOpen = false"
          trigger="open-action-sheet"
          header="Opciones"
          :buttons="actionSheetButtons"
        >
        </ion-action-sheet>
      </section>

      <h3 class="font-semibold text-lg ml-4">Películas de Crimen</h3>
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
          <swiper-slide v-for="(movie, i) in crimeMovies" :key="i">
            <router-link to="/detallePelicula">
              <img
                :src="movie.image"
                alt="Movie Poster"
                class="w-full h-auto rounded-lg"
              />
            </router-link>
            <div class="flex items-center justify-between px-[2px]">
              <h4 class="text-base font-semibold">
                {{ movie.name }}
              </h4>
              <button class="mt-3" @click="showOptions(movie)">
                <ion-icon
                  :icon="ellipsisHorizontal"
                  id="open-action-sheet"
                ></ion-icon>
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
} from "@ionic/vue";
import { cartOutline, ellipsisHorizontal, heartOutline } from "ionicons/icons";

import { ref } from "vue";

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
  },

  setup() {
    const popularMovies = ref([
      {
        id: 1,
        image: "/images/poster-1.webp",
        name: "No Country for Old Men",
      },
      {
        id: 2,
        image: "/images/poster-2.webp",
        name: "Seven",
      },
      {
        id: 3,
        image: "/images/poster-3.webp",
        name: "Pulp Fiction",
      },
      {
        id: 4,
        image: "/images/poster-4.webp",
        name: "Taxi Driver",
      },
      {
        id: 5,
        image: "/images/poster-5.webp",
        name: "Memento",
      },
      {
        id: 6,
        image: "/images/poster-6.webp",
        name: "The Dark Knight",
      },
      {
        id: 7,
        image: "/images/poster-7.webp",
        name: "Black Swan",
      },
      {
        id: 8,
        image: "/images/poster-8.webp",
        name: "Jackie",
      },
    ]);

    const crimeMovies = ref([
      {
        id: 1,
        name: "Snatch",
        image: "/images/poster-9.webp",
      },
      {
        id: 2,
        name: "American Psycho",
        image: "/images/poster-10.webp",
      },
      {
        id: 3,
        name: "Reservoir Dogs",
        image: "/images/poster-11.webp",
      },
      {
        id: 4,
        name: "The Gentlemen",
        image: "/images/poster-12.webp",
      },
      {
        id: 5,
        name: "Ocean's Eleven",
        image: "/images/poster-13.webp",
      },
      {
        id: 6,
        name: "The Nice Guys",
        image: "/images/poster-14.webp",
      },
      {
        id: 7,
        name: "Wolfs",
        image: "/images/poster-15.webp",
      },
      {
        id: 8,
        name: "Get Shorty",
        image: "/images/poster-16.webp",
      },
    ]);

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
      popularMovies,
      crimeMovies,
      isOpen,
      showOptions,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.card img {
  border-radius: 6px;
  margin-bottom: 0px;
  transition: transform 500ms;

  &:hover {
    transform: scale(1.08);
  }
}

h4 {
  font-size: 16;
}

.mySwiper img {
  height: 150px;
  margin: auto;
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

ion-searchbar {
  --border-radius: 6px;
}

ion-button .custom {
  padding: 0px !important;
  margin: 0px !important;
}
</style>
