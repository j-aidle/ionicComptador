<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/home">Home</ion-button>
        </ion-buttons>
        <ion-title>Comptador</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="counter">
        <p>Valor del comptador: {{ count }}</p>
        <ion-button @click="increment">Incrementar</ion-button>
        <ion-button @click="decrement">Decrementar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonButtons} from "@ionic/vue";
import {defineComponent, ref} from "vue";

  export default defineComponent({
    components: { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonButtons },
    setup() {
      const count = ref(0);

      const increment = () => {
        count.value++;
      };

      const decrement = () => {
        count.value--;
      };

      return {
        count,
        increment,
        decrement,
      }
    }
  });
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>