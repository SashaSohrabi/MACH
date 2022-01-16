<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="logo">
        <img src="./assets/img/logo_book-elibrary.png" alt="logo" />
      </router-link>
      |
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  background-image: linear-gradient(to bottom, rgba(86, 86, 88, 0.52), rgba(12, 4, 10, 0.73)), url(./assets/img/background-image.jpg);
  background-size: cover;
  background-attachment: fixed;
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

.logo {
  position: fixed;
  top: 15px;
  left: 15px;
}

.logo img {
  width: 150px;
}

@media (max-width: 750px) {
  .logo {
    top: 5px;
    left: 5px;
  }

  .logo img {
    width: 120px;
  }
}
</style>
