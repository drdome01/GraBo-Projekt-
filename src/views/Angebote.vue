<template>
  <div v-if="this.info != null">
    <table style="width: 100%; align-content: center; display: block" >
      <tr>
        <th style="padding:15px"><h2>Titel</h2></th>
        <th style="padding:15px"><h2>Normaler Preis</h2></th>
        <th style="padding:15px"><h2>Sale Preis</h2></th>
        <th style="padding:15px"><h2>Deal</h2></th>
      </tr>
      <tr v-for="data in info" class="Angebote">
        <td style="text-align: start">
          <h3>
            {{data.title}}
          </h3>
        </td>
        <td style="padding-left: 20px">
          <h3>
            {{data.normalPrice}}$
          </h3>
        </td>
        <td>
          <h3>
            {{data.salePrice}}$
          </h3>
        </td>
        <td>
          <button @click="$router.push('/Deals'); path.changeDealID(data.dealID)" class="Knopf">Deal anzeigen</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import {usePathStore} from "@/Stores/Paths";

export default {
  name: "Angebote",
  data () {
    return {
      info: null,
      isEmpty: true,
      APIPath: String("https://www.cheapshark.com/api/1.0/deals?storeID=" + this.StoreStoreID + '&pageSize=20&upperPrice=' + this.StorePreisMax + '&lowerPrice=' + this.StorePreisMin + "&onSale=1"),
    }
  },
  setup() {
    const path = usePathStore()

    let StorePreisMax = usePathStore().getPreisMax
    let StorePreisMin = usePathStore().getPreisMin
    let StoreStoreID = usePathStore().getStoreID

    return { path, StorePreisMax, StorePreisMin, StoreStoreID }
  },
  mounted() {
    axios
        .get(this.APIPath)
        .then(response => (this.info = response.data))
  },
}
</script>

<style scoped>
.Angebote {
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