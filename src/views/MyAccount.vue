<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Mi Cuenta</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <main class="flex-1 overflow-auto p-4">
        <div class="flex items-center space-x-4 mb-8">
          <img
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
            alt="Avatar"
            class="rounded-full w-20 h-20 mt-2"
          />
          <div v-if="username && email">
            <h2 class="text-xl font-semibold">{{ username }}</h2>
            <p class="text-muted-foreground opacity-60">{{ email }}</p>
          </div>
        </div>

        <div class="space-y-4 mt-5">
          <ion-button
            class="custom-button"
            expand="block"
            fill="default"
            color="medium"
          >
            <ion-icon :icon="personOutline" class="mr-2 h-4 w-4"></ion-icon>
            <ion-text class="button-text">Información Personal</ion-text>
          </ion-button>

          <ion-button
            class="custom-button"
            expand="block"
            fill="default"
            color="medium"
          >
            <ion-icon :icon="cardOutline" class="mr-2 h-4 w-4"></ion-icon>
            <ion-text class="button-text">Métodos de Pago</ion-text>
          </ion-button>

          <ion-button
            v-if="!isLoggedIn"
            router-link="/login"
            class="custom-button text-blue-500"
            expand="block"
            fill="default"
          >
            <ion-icon :icon="logInOutline" class="mr-2 h-4 w-4"></ion-icon>
            <span class="text-center">Iniciar Sesión</span>
          </ion-button>

          <ion-button
            v-if="isLoggedIn"
            @click="handleLogout"
            class="custom-button text-red-500"
            expand="block"
            fill="default"
          >
            <ion-icon :icon="logOutOutline" class="mr-2 h-4 w-4"></ion-icon>
            <span class="text-center">Cerrar Sesión</span>
          </ion-button>
        </div>
      </main>
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
  IonButton,
  IonIcon,
  IonText,
  IonMenuButton,
  IonButtons,
} from "@ionic/vue";
import {
  cardOutline,
  logInOutline,
  logOutOutline,
  personOutline,
} from "ionicons/icons";
import { logoutUser, getCurrentUser } from "@/services/AuthServices";
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
    IonText,
    IonMenuButton,
    IonButtons,
  },
  setup() {
    const username = ref<string>("");
    const email = ref<string>("");
    const isLoggedIn = ref<boolean>(false);

    const toast = useToast();
    const router = useRouter();

    const checkUserStatus = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          isLoggedIn.value = true;
          username.value = user.name;
          email.value = user.email;
        } else {
          isLoggedIn.value = false;
          username.value = "";
          email.value = "";
        }
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
        isLoggedIn.value = false;
      }
    };

    watchEffect(() => {
      checkUserStatus(); 
    });

    const handleLogout = async () => {
      try {
        await logoutUser(); 
        toast.success("Sesión cerrada exitosamente");
        router.push("/login");
        isLoggedIn.value = false;
        username.value = "";
        email.value = "";
        console.log("Sesión cerrada");
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    };

    return {
      isLoggedIn,
      username,
      email,
      handleLogout,
      personOutline,
      cardOutline,
      logInOutline,
      logOutOutline,
    };
  },
};
</script>

<style scoped>
.custom-button {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.button-text {
  text-align: left;
  flex: 1;
}

ion-button {
  --background-hover: rgba(255, 255, 255, 0.09);
  --border-radius: 6px;
  --border-color: rgba(255, 255, 255, 0.1);
  --border-style: solid;
  --border-width: 1px;

  --box-shadow: 0;

  --padding-top: 12px;
  --padding-bottom: 12px;
}
</style>
