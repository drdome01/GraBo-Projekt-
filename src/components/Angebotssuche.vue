<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <h3 style="padding-bottom: 20px">Hier kannst du 20 zufällige Angebote eines bestimmten Shops abfragen</h3>
  <input type="text" placeholder="Store ID" class="Suchleiste" id="inputSpiel" v-model="StoreID" @input="usePathStore().changeStoreID(StoreID)">
  <form >
    <input type="range" min="0" max="50" class="Suchleiste" id="inputPreismax" style="accent-color: #5419b2" v-model="inputPreismax" @input="usePathStore().changeMaxPreis(inputPreismax)">
    <div style="padding-left: 5px; padding-bottom: 15px" >
      Maximaler Preis:
      <output style="color: #5419b2" name="PreisMax" for="inputPreismax">{{inputPreismax}}</output>
      $
    </div>
  </form>
  <form >
    <input type="range" min="0" max="50" class="Suchleiste" id="inputPreismin" style="accent-color: #05abcc" v-model="inputPreismin" @input="usePathStore().changeMinPreis(inputPreismin)">
    <div>
      Minimaler Preis:
      <output style="color: #05abcc" name="PreisMin" for="inputPreismin">{{inputPreismin}}</output>
      $
    </div>
  </form>
  <div>
    <RouterLink :to="{ name: 'Gefundene Angebote anzeigen' }" style="color: #5419b2" >Ergebnisse anzeigen</RouterLink>
  </div>
</template>

<script>

import {usePathStore} from "@/Stores/Paths";

export default {
  name: "Angebotssuche",
  setup() {
    const pathStore = usePathStore()

    return { pathStore }
  },
  data() {
    return {
      StoreID: "",
      inputPreismin: 25,
      inputPreismax: 25,
    }
  }
}

</script>

<style scoped>

.Suchleiste {
  padding: 5px;
  margin: 5px;
  border-radius: 4px;
  border-color: black;
}

</style>