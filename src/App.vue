<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Apollo Query</router-link> |
      <router-link to="/mutation">Apollo Mutation</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  background: url(./assets/img/glory-low-contrast.jpg) fixed #dea478 top center no-repeat;
  background-size: 120%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
