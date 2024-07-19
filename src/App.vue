<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
    background: #f5f5f5;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

#app {
  width: 100%;
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
}

h1, h2, h3 {
  margin: 0;
  padding: 0;
}
@media (max-width: 600px) {
    #app {
      margin: 20px;
      padding: 10px;
    }
  }
  
</style>
