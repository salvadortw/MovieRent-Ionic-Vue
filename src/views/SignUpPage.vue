<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="#"></ion-back-button>
        </ion-buttons>
        <ion-title>Registro</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <main
        class="flex items-center justify-center h-[80vh] bg-background mb-10"
      >
        <div class="w-full max-w-md space-y-8 p-8 bg-card rounded-xl">
          <div class="text-center">
            <h2 class="mt-14 text-3xl font-bold text-primary">MovieRent</h2>
            <p class="mt-2 text-sm text-muted-foreground">
              Regístrate para alquilar películas
            </p>
          </div>
          <form @submit.prevent="handleRegister" class="mt-8 space-y-6">
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
                  v-model="name"
                  type="text"
                  fill="solid"
                  label="Nombre"
                  label-placement="floating"
                  placeholder="Ej: Alonso"
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
            <div class="text-center">
              <ion-button
                class="font-semibold rounded-md"
                type="submit"
                expand="full"
                >Registrate</ion-button
              >
            </div>
          </form>
          <div class="text-center">
            <p class="mt-2 text-sm text-muted-foreground">
              ¿Ya tienes una cuenta?
              <router-link
                to="/login"
                class="font-medium text-primary hover:text-primary/80"
                >Inicia Sesión</router-link
              >
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
  IonAlert,
} from "@ionic/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { arrowBackOutline } from "ionicons/icons";
import { registerUser } from "@/services/AuthServices";
import { useToast } from "vue-toastification";

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
    const router = useRouter();
    const toast = useToast();

    const email = ref("");
    const password = ref("");
    const name = ref("");

    const handleRegister = async () => {
      try {
        await registerUser(email.value, name.value, password.value);
        toast.success("¡Usuario registrado exitosamente!");
        router.push("/login");
      } catch (error) {
        console.error("Error al registrar el usuario:", error);
        toast.error("Hubo un error al registrar el usuario. Intenta nuevamente.");
      }
    };

    return {
      email,
      password,
      name,
      handleRegister,
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
