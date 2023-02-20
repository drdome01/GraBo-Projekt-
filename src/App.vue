<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Button from "@/components/Button.vue";
import Spielsuche from "@/components/Spielsuche.vue";
import Angebotssuche from "@/components/Angebotssuche.vue";
</script>

<template>
  <header>
    <img alt="RWU Logo" class="logo" src="@/assets/RWU_Logo.png" width="125" height="125" />
    <div class="wrapper">
      <h3>Nach was suchen sie:</h3>
      <div>
        <Button @Show_Searchbar="ShowSearchbar()" title="Angebote" />
        <div v-show="ShowBar">
          <Angebotssuche />
        </div>
      </div>
      <div>
        <Button @Show_Searchbar="ShowSpielsuche()" title="Spiel"/>
        <div v-show="ShowSpielBar">
          <Spielsuche />
        </div>
      </div>
      <nav>
        <RouterLink to="/" style="color: #5419b2">Startseite</RouterLink>
        <RouterLink to="/about" style="color: #5419b2">Über</RouterLink>
        <RouterLink to="/Stores" style="color: #5419b2">Alle Stores anzeigen</RouterLink>
      </nav>
    </div>
  </header>
<div>
  <RouterView />
</div>
</template>

<script>
export default {
  data() {
    return {
      ShowBar: false,
      ShowSpielBar: false,
    }
  },
  methods: {
    ShowSearchbar(){
      this.ShowBar=!this.ShowBar;
    },
    ShowSpielsuche(){
      this.ShowSpielBar=!this.ShowSpielBar;
    },
  },
}

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
