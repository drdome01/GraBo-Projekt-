<template>
  <button @click="ShowSearch()" class="Suchknopf">{{ title }}</button>
</template>

<script>

export default {
  name: "Button",

  data() {
    return {
      ShowS: false,
      title: String,
    }
  },
  props: {
    title: String,
  },
  methods: {
    ShowSearch(){
      this.$emit('Show_Searchbar');
    },
  }
}
</script>

<style scoped>

.Suchknopf{
  border: #000000;
  border-width: medium;
  margin: 15px;
  padding: 5px;
  background-color: #633ab4;
  color: #000000;
  border-radius: 7px;
}

.Suchknopf:hover {
  background-color: #9d85ce;
}

</style>