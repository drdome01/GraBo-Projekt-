<template>
  <div>
    <input type="checkbox" id="Steam" class="Checkbox">
    <label for="Steam">Steam</label>
  </div>
  <div>
    <input type="checkbox" id="anderer Store" class="Checkbox">
    <label for="anderer Store">Anderer Store</label>
  </div>
</template>

<script>
export default {
  name: "Storesearch"
}
</script>

<style scoped>
  .Checkbox {
    padding: 5px;
    margin: 5px;
    border-radius: 4px;
    border-color: black;
  }
</style>