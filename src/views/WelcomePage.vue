<template>
  <ion-page>
    <ion-content class="welcome-page" fullscreen>
      <div class="container">
        <div class="illustration">
          <img src="@/assets/welcome.svg" alt="Watching Movies" />
        </div>
        <div class="text">
          <h1>¡Bienvenido a MovieRent!</h1>
          <p>Descubre y alquila tus películas favoritas en un solo lugar.</p>
        </div>
        <div class="actions">
          <ion-button expand="block" color="primary" router-link="/login">
            Iniciar Sesión
          </ion-button>
          <ion-button
            expand="block"
            fill="outline"
            color="secondary"
            router-link="/registro"
          >
            Registrarse
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonButton } from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
  },
};
</script>

<style scoped>
.welcome-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  --background: var(--ion-color-dark);
  --color: var(--ion-color-light);
}

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.illustration img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.text h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.text p {
  font-size: 1rem;
  color: #6b6b6b;
}

.actions {
  margin-top: 20px;
}

.actions ion-button {
  margin-top: 10px;
}

ion-buttom {
    font-weight: bold;
    --border-radius: 6px;
}
</style>
