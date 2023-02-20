<template>
  <div>
    <table @load="showRedirect()">
      <tr>
        <th style="padding:15px"><h2>Name des Spiels</h2></th>
        <th style="padding:15px"><h2>Normaler Preis</h2></th>
        <th style="padding:15px"><h2>Sale Preis</h2></th>
        <th style="padding:15px"><h2>Billigster Preis jemals</h2></th>
      </tr>
      <tr class="Deals" v-if="info != null" style="text-align: center">
        <td style="text-align: start">
          <h3>{{info.gameInfo.name}}</h3>
        </td>
        <td>
          <h3>{{info.gameInfo.retailPrice}}$</h3>
        </td>
        <td>
          <h3>{{info.gameInfo.salePrice}}$</h3>
        </td>
        <td>
          <h3 v-if="info.cheapestPrice.price != undefined" style="color: #ba3c3c">{{info.cheapestPrice.price}}$</h3>
          <h3 v-else style="color: #ba3c3c">Gerade billigster Preis!</h3>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import {usePathStore} from "@/Stores/Paths";
export default {
  name: "Deal",
  setup() {
    const path = usePathStore()

    let StoreDealID = usePathStore().getDealID

    return { path, StoreDealID }
  },
  data() {
    return {
      info: null,
      APIPath: String("https://www.cheapshark.com/api/1.0/deals?id=" + this.StoreDealID),
    }
  },
  methods: {
    showRedirect() {
      console.log(this.RedirectPath)
    }
  },
  mounted() {
    axios
        .get(this.APIPath)
        .then(response => (this.info = response.data))
        .then(response => (console.log(response)))
  }
}
</script>