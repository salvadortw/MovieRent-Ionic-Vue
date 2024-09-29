<style scoped></style>

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

          <form action="" class="mt-8 space-y-6">
            <div class="space-y-4 rounded-md shadow-sm">
              <div>
                <ion-input
                  ref="input"
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
                  href=""
                  class="font-medium text-primary hover:text-primary/80"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <ion-button
                class="font-semibold rounded-md"
                type="submit"
                expand="full"
              >
                Iniciar Sesión
              </ion-button>
            </div>
          </form>

          <div class="text-center">
            <p class="mt-2 text-sm text-muted-foreground">
              ¿No tienes una cuenta?
              <router-link
                to="/registro"
                class="font-medium text-primary hover:text-primary/80"
              >
                Regístrate
              </router-link>
            </p>
          </div>
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
  IonInput,
  IonButtons,
  IonBackButton,
  IonButton,
} from "@ionic/vue";

import { arrowBackOutline } from "ionicons/icons";

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
  },
  data() {
    return {
      arrowBackOutline,
    };
  },
};
</script>
