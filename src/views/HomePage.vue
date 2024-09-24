<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }" :loop="true" :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide><img src="/public/images/slide-1.webp" alt=""></swiper-slide>
        <swiper-slide><img src="/public/images/slide-2.webp" alt=""></swiper-slide>
        <swiper-slide><img src="/public/images/slide-3.webp" alt=""></swiper-slide>
        <swiper-slide><img src="/public/images/slide-1.webp" alt=""></swiper-slide>
        <swiper-slide><img src="/public/images/slide-2.webp" alt=""></swiper-slide>
        <swiper-slide><img src="/public/images/slide-3.webp" alt=""></swiper-slide>
        <swiper-slide><img src="/public/images/slide-1.webp" alt=""></swiper-slide>
        <swiper-slide><img src="/public/images/slide-2.webp" alt=""></swiper-slide>
        <swiper-slide><img src="/public/images/slide-3.webp" alt=""></swiper-slide>
      </swiper>

      <div class="search px-2 mt-3">
        <ion-searchbar placeholder="Buscar películas..."></ion-searchbar>
        <h3 class="text-black dark:text-white font-semibold text-xl mx-2">Categorías</h3>
        <div class="categories ml-1">
          <ion-chip class="bg-blue-200/60 text-blue-700 dark:bg-blue-700/60 font-bold dark:text-blue-200">Acción</ion-chip>
          <ion-chip>Terror</ion-chip>
          <ion-chip>Drama</ion-chip>
          <ion-chip>Comedia</ion-chip>
        </div>
      </div>

      <h3 class="text-black dark:text-white font-semibold text-xl ml-4">Películas Populares</h3>
      <div class="popular-movies px-2 mx-2">
        <div class="card" v-for="movie in movies" :key="movie.id">
          <router-link to="/detallePelicula">
            <img :src="movie.image" alt="Movie Poster" class="w-full h-auto rounded-lg" />
          </router-link>
          <div class="flex items-center justify-between px-[2px]">
            <h4 class="text-black dark:text-white text-base font-semibold">
            {{ movie.name }}
            </h4>
            <button class="mt-3" @click="showOptions(movie)"> 
              <ion-icon :icon="ellipsisHorizontal" id="open-action-sheet"></ion-icon>
            </button>
          </div>
        </div>

        <ion-action-sheet 
        :is-open="isOpen"
        @did-dismiss="isOpen = false"
        trigger="open-action-sheet"
        header="Opciones" 
        :buttons="actionSheetButtons">

        </ion-action-sheet>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSearchbar, IonChip, IonButton, IonIcon, IonActionSheet, IonItem, } from '@ionic/vue';
import { cartOutline, ellipsisHorizontal, heartOutline } from 'ionicons/icons';

import { ref } from 'vue';

export default {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSearchbar, IonChip, Swiper, SwiperSlide, EffectCoverflow, IonButton, IonIcon, IonActionSheet, IonItem },

  setup() {

    const movies = ref([
      {
        id: 1,
        image: '/images/poster-1.webp',
        name: 'No Country for Old Men', 
      },
      {
        id: 2,
        image: '/images/poster-2.webp',
        name: 'Seven', 
      },
      {
        id: 3,
        image: '/images/poster-3.webp',
        name: 'Pulp Fiction', 
      },
      {
        id: 4,
        image: '/images/poster-4.webp',
        name: 'Taxi Driver', 
      },
      {
        id: 5,
        image: '/images/poster-5.webp',
        name: 'Memento', 
      },
      {
        id: 6,
        image: '/images/poster-6.webp',
        name: 'The Dark Knight', 
      },
      {
        id: 7,
        image: '/images/poster-7.webp',
        name: 'Black Swan', 
      },
      {
        id: 8,
        image: '/images/poster-8.webp',
        name: 'Jackie', 
      },
    ]);

    const isOpen = ref(false);
    const selectedMovie = ref(null);

    const showOptions = (movie:any) => {
      selectedMovie.value = movie;
      isOpen.value = true;
    };


    const actionSheetButtons = ref([
      {
        text: 'Agregar a Favoritos',
        role: 'selected',
        icon: heartOutline,
        data: {
          action: 'addToFav',
        },
      },
      {
        text: 'Agregar al Carro',
        role: 'selected',
        icon: cartOutline,
        data: {
          action: 'addToCart',
        },
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ]);

    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, EffectCoverflow],
      ellipsisHorizontal,
      heartOutline,
      cartOutline,
      actionSheetButtons,
      movies,
      isOpen,
      showOptions,
    };
  },
};
</script>

<style scoped>
.popular-movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
}

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

ion-searchbar {
  --border-radius: 6px;
}

ion-button .custom {
  padding: 0px !important;
  margin: 0px !important;
}
</style>