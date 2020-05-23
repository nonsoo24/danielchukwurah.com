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
  /* color: #000; */
  /* min-height: 100vh; */
}

* {
  margin: 0;
  padding: 0;
}

body html {
  background-color: #f3f7f9 !important;
  min-height: 100vh !important;
  overflow-x: hidden;
}

.dark-theme body {
  background-color: #071521;
  color: #fff;
}

.is-open {
  width: 200px !important;
}

</style>