<template>
  <h1 class="Text">Alle Stores</h1>
  <div v-for="data in info" class="Store" >
    <span>
      Store ID: {{data.storeID}}
    </span>
    <span style="padding-left: 15px">
      {{data.storeName}}
    </span>
    <span class="Aktivität">
      <span v-if="data.isActive" style="color: #633ab4">
        Store ist aktiv
      </span>
      <span v-else style="color: #9d85ce">
        Store ist derzeit inaktiv
      </span>
    </span>
  </div>
</template>

<script>

import axios from "axios";

export default {
  el: '#store',
  name: "Store",
  data() {
    return {
      info: null,
    }
  },
  props: {
    title: String,
    Show: false,
  },
  mounted() {
    axios
        .get("https://www.cheapshark.com/api/1.0/stores")
        .then(response => (this.info = response.data))
        .then(response => (console.log(response)))
  }
}
</script>

<style scoped>
.Text {
  padding: 5px;
  margin: 5px;
}
.Aktivität {
  padding-left: 15px;
}
</style>