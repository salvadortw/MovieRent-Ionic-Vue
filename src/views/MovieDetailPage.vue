<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="#"></ion-back-button>
        </ion-buttons>
        <ion-title>Detalle Película</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="flex-1 overflow-auto p-4">
      <div class="flex flex-col h-screen bg-background">
        <div>
          <img
            src="/images/movie-detail.webp"
            alt=""
            class="imageCover"
          />
        </div>

        <div class="px-4">
          <h1 class="text-2xl font-bold text-primary mb-2">
            Título de la Película
          </h1>
          <div class="flex items-center space-x-2 text-muted-foreground mb-4">
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
            <span>4.5</span>
            <span>|</span>
            <ion-icon :icon="timeOutline" class="h-4 w-4"></ion-icon>
            <span>2h 15min</span>
            <span>|</span>
            <ion-icon :icon="calendarOutline" class="h-4 w-4"></ion-icon>
            <span>2023</span>
          </div>

          <p class="text-muted-foreground mb-4 opacity-60">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            dolor laborum vel suscipit, magni, amet blanditiis praesentium nisi
            ea veritatis qui similique, ipsa aut dolorem impedit unde molestiae
            voluptatem cumque. Nemo tenetur perferendis, laudantium tempora
            animi officiis quas cumque, architecto commodi veritatis eum iusto
            consectetur eaque explicabo dolores harum totam, nobis iure.
          </p>

          <h2 class="text-lg font-semibold mb-2">Reparto</h2>
          <div class="flex space-x-2 overflow-x-auto mb-4">
            <div class="flex-shrink-0">
              <img
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
                class="w-20 h-20 object-cover rounded-full"
              />
              <p class="text-sm text-center mt-1">Actor</p>
            </div>
          </div>

          <h2 class="text-lg font-semibold mb-2">Opciones de Alquiler</h2>
          <div class="space-y-2 mb-2">
            <ion-button class="w-full font-semibold" color="primary"
              >Alquilar por 24 horas - $1.900</ion-button
            >
            <ion-button
              class="w-full font-semibold bg-transparent border-solid border-[1px] border-blue-800 rounded-md hover:bg-black/5 dark:bg-transparent dark:hover:bg-white/5"
              fill="outline"
              >Alquilar por 48 horas - $3.500</ion-button
            >
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
} from "@ionic/vue";

import { calendarOutline, starOutline, timeOutline } from "ionicons/icons";

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
  },

  data() {
    return {
      calendarOutline,
      starOutline,
      timeOutline,
    };
  },
};
</script>

<style scoped>
.imageCover{
  mask-image: linear-gradient(black 90%, transparent);
  text-align: center;
  margin: auto
}

* {
  text-wrap: pretty;
}

span {
  font-weight: 400;
  opacity: 0.5;
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
