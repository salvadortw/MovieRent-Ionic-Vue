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
        <div class="flex space-x-2">
          <ion-searchbar placeholder="Buscar películas..."></ion-searchbar>
        </div>
        <div class="filters grid grid-cols-2 gap-4 mb-4 px-2 mt-5">
          <ion-list class="rounded-lg">
            <ion-item>
              <ion-select aria-label="genero" placeholder="Género">
                <ion-select-option value="accion">Acción</ion-select-option>
                <ion-select-option value="terror">Terror</ion-select-option>
                <ion-select-option value="comedia">Comedia</ion-select-option>
                <ion-select-option value="drama">Drama</ion-select-option>
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
        <div class="card">
          <img src="/public/images/movie-1.webp" alt="" />
        </div>

        <div class="card">
          <img src="/public/images/movie-2.webp" alt="" />
        </div>

        <div class="card">
          <img src="/public/images/movie-3.webp" alt="" />
        </div>

        <div class="card">
          <img src="/public/images/movie-4.webp" alt="" />
        </div>

        <div class="card">
          <img src="/public/images/movie-5.webp" alt="" />
        </div>

        <div class="card">
          <img src="/public/images/movie-6.webp" alt="" />
        </div>

        <div class="card">
          <img src="/public/images/movie-7.webp" alt="" />
        </div>

        <div class="card">
          <img src="/public/images/movie-8.webp" alt="" />
        </div>

        <div class="card">
          <img src="/public/images/movie-9.webp" alt="" />
        </div>
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
} from "@ionic/vue";

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
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.explore-movies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 32px;
  margin-inline: 5px;
}

.explore-movies img {
  border-radius: 6px;
  transition: transform 500ms;
  box-shadow: 6px 4px 6px 4px hsla(0, 0%, 0%, 0.2);
  width: 100%;

  &:hover {
    transform: scale(1.08);
  }
}

ion-searchbar {
  --border-radius: 6px;
}
</style>
