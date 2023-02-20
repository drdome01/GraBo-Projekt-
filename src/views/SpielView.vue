<template>
  <div>
    <table>
      <tr>
        <th style="padding:15px"><h2>Name</h2></th>
        <th style="padding:15px"><h2>Billigster Preis</h2></th>
        <th style="padding:15px"><h2>Billigster Deal</h2></th>
      </tr>
      <tr v-for="data in info" class="Spiele">
        <td style="text-align: start">
          <h3>{{data.external}}</h3>
        </td>
        <td style="text-align: center">
          <h3>{{data.cheapest}}$</h3>
        </td>
        <td>
          <button @click="$router.push('/Deals'); path.changeDealID(data.cheapestDealID)" class="Knopf">Billigsten Deal anzeigen</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import {usePathStore} from "@/Stores/Paths";

export default {
  name: "SpielView",
  data () {
    return {
      info: null,
      APIPath: String("https://www.cheapshark.com/api/1.0/games?title=" + this.StoreTitle + "&limit=20&exact=" + this.StoreExact),
    }
  },
  setup () {
    const path = usePathStore()

    let StoreTitle = usePathStore().getTitle
    let StoreExact = usePathStore().getExact

    return { path, StoreTitle, StoreExact }
  },
  mounted() {
    axios
        .get(this.APIPath)
        .then(response => (this.info = response.data))
        .then(response => (console.log(response)))
  },
}
</script>

<style scoped>
.Spiele {
  text-align: center;
}
.Knopf {
  border: #000000;
  border-width: medium;
  padding: 5px;
  background-color: #633ab4;
  color: #000000;
  border-radius: 7px;
}
</style>