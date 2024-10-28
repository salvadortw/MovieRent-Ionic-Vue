<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="#"></ion-back-button>
        </ion-buttons>
        <ion-title>Iniciar Sesión</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <main
        class="flex items-center justify-center h-[80vh] bg-background mb-10"
      >
        <div class="w-full max-w-md space-y-8 p-8 bg-card rounded-xl">
          <div class="text-center">
            <h2 class="mt-6 text-3xl font-bold text-primary">MovieRent</h2>
            <p class="mt-2 text-sm text-muted-foreground">
              Inicia sesión para alquilar películas
            </p>
          </div>
          <form @submit.prevent="loginUser" class="mt-8 space-y-6">
            <div class="space-y-4 rounded-md shadow-sm">
              <div>
                <ion-input
                  v-model="email"
                  type="email"
                  fill="solid"
                  label="Email"
                  label-placement="floating"
                  placeholder="tu@ejemplo.com"
                  class="mt-1"
                ></ion-input>
              </div>
              <div>
                <ion-input
                  v-model="password"
                  label="Contraseña"
                  label-placement="floating"
                  fill="solid"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  class="mt-1"
                ></ion-input>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-primary hover:text-primary/80"
                  >¿Olvidaste tu contraseña?</a
                >
              </div>
            </div>
            <div>
              <ion-button
                class="font-semibold rounded-md"
                type="submit"
                expand="full"
                >Iniciar Sesión</ion-button
              >
            </div>
          </form>
          <div class="text-center">
            <p class="mt-2 text-sm text-muted-foreground">
              ¿No tienes una cuenta?
              <router-link
                to="/registro"
                class="font-medium text-primary hover:text-primary/80"
                >Regístrate</router-link
              >
            </p>
          </div>
        </div>
        <ion-alert
          v-if="showAlert"
          :is-open="showAlert"
          onDidDismiss="() => showAlert = false"
          header="Error"
          message="{{ errorMessage }}"
          :buttons="[{ text: 'Aceptar' }]"
        />
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
  IonInput,
  IonButtons,
  IonBackButton,
  IonButton,
  IonAlert,
} from "@ionic/vue";

import { arrowBackOutline } from "ionicons/icons";
import { ref } from "vue";
// import { loginUser } from "@/services/AuthServices";
import AuthServices from "@/services/AuthServices"; 
import { useRouter } from "vue-router";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonInput,
    IonButtons,
    IonBackButton,
    IonButton,
    IonAlert,
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const showAlert = ref(false);
    const errorMessage = ref('');
    const router = useRouter();

    const loginUser = async () => {
      try {
        await AuthServices.loginUser(email.value, password.value);
        // Redirigir o mostrar un mensaje de éxito
        router.push('/home'); // Cambia esto a la ruta que desees después de iniciar sesión
      } catch (error: any) {
        showAlert.value = true;
        errorMessage.value = error.message || 'Error desconocido';
      }
    };

    return {
      email,
      password,
      loginUser,
      showAlert,
      errorMessage,
    };
  },
  data() {
    return {
      arrowBackOutline,
    };
  },
};
</script>

<style scoped></style>
