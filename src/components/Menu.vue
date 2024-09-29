<template>
  <ion-menu menu-id="app-menu" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menú</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list
        v-for="item in views"
        :key="item.title"
        class="bg-transparent mt-2"
        lines="none"
      >
        <ion-item button @click="menuNavegation(item.url)" class="px-2">
          <button class="flex" :class="item.class">
            <ion-icon :icon="item.icon"></ion-icon>
            <span class="ml-2"> {{ item.title }} </span>
          </button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonItem,
  IonLabel,
  IonList,
  menuController,
} from "@ionic/vue";
import { defineComponent } from "vue";

import {
  eyeOutline,
  logInOutline,
  settingsOutline,
  heartOutline,
  callOutline,
  informationCircleOutline,
} from "ionicons/icons";

export default defineComponent({
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuToggle,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButtons,
    IonItem,
    IonLabel,
    IonList,
  },

  data() {
    return {
      views: [
        {
          title: "Historial de Alquileres",
          icon: eyeOutline,
          url: "/historial",
        },
        { title: "Favoritos", icon: heartOutline, url: "/favoritos" },
        {
          title: "Configuración",
          icon: settingsOutline,
          url: "/configuracion",
        },
        { title: "Contacto", icon: callOutline, url: "/contacto" },
        {
          title: "Quiénes Somos",
          icon: informationCircleOutline,
          url: "/sobreNosotros",
        },
        {
          title: "Iniciar Sesión",
          icon: logInOutline,
          url: "/login",
          class: "text-blue-500",
        },
      ],
      close,
    };
  },

  methods: {
    menuNavegation(url: string) {
      menuController.close("app-menu");
      this.$router.push(url);
    },
  },
});
</script>

<style scoped>
ion-item::part(native) {
  border-radius: 16px;
}
</style>
