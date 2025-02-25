<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/home">Home</ion-button>
        </ion-buttons>
        <ion-title>Posts</ion-title>
        <ion-buttons slot="end">
          <ion-button router-link="/comptador">Comptador</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="posts">
        <ion-list>
          <ion-item v-for="post in posts" :key="post.id">
            <ion-label>
              <h2>{{ post.title }}</h2>
              <p>{{ post.body }}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonList,
  IonItem, IonLabel
} from "@ionic/vue";
import {defineComponent, onMounted, ref} from "vue";
import axios from "axios";

export default defineComponent({
  components: { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonButtons, IonList, IonItem, IonLabel },
  setup() {
    const posts = ref([]);

    onMounted(async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts.value = response.data;
    })

    return {
      posts
    }
  }
});
</script>

<style scoped>
.posts {
  padding: 1rem;
}
</style>