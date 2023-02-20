<template>
  <h3 style="padding-bottom: 20px">Hier kannst du den Preis eines bestimmten Spiels herausfinden</h3>
  <div>
    <input type="text" placeholder="Name des Spiels" class="Suchleiste" v-model="Spiel" @input="usePathStore().changeTitle(this.Spiel)">
    <div class="Checkbox">
      <input type="checkbox" id="Genau" v-model="genau" @input="boolToNum()">
      <label for="Genau">Name muss übereinstimmen</label>
    </div>
  </div>
  <div>
    <RouterLink to="/Spiele" style="color: #5419b2">Ergebnisse anzeigen</RouterLink>
  </div>
</template>

<script>
import {usePathStore} from "@/Stores/Paths";

export default {
  name: "Spielsuche",
  data() {
    return {
      Spiel: "",
      genau: false,
      numGenau: 0,
    }
  },
  setup() {
    const path = usePathStore()

    return { path }
  },
  methods: {
    usePathStore,
    boolToNum() {
      if (this.genau) {
        this.numGenau = 0
        usePathStore().changeExact(this.numGenau)
      } else {
        this.numGenau = 1
        usePathStore().changeExact(this.numGenau)
      }
    },
  },
}
</script>

<style scoped>
.Suchleiste {
  padding: 5px;
  margin: 5px;
  border-radius: 4px;
  border-color: black;
}
.Checkbox {
  padding-top: 15px;
  padding-left: 5px;
}
</style>