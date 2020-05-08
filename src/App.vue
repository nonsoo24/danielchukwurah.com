<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
   /* background-color: #E9E9E9; */
  /* background-color: #f3f7f9 !important; */
}

/* .navbar, .navbar-toggler{
  background-color: #E9E9E9;
} */
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

body {
  max-width: 100%;
  overflow-x: hidden;
  /* overflow-y: hidden; */
}

body html{
   background-color: #f3f7f9 !important;
}

.is-open {
  width: 200px !important;
}
</style>
